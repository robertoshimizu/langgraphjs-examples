/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as cheerio from 'cheerio'
import puppeteer from 'puppeteer';

interface SearchResult {
  kind: string
  title: string
  htmlTitle: string
  link: string
  displayLink: string
  snippet: string
  htmlSnippet: string
  formattedUrl: string
  htmlFormattedUrl: string
  pagemap: Record<string, unknown>
  mime?: string // Optional properties for PDFs
  fileFormat?: string
}

export function extractCodeFromUrl(
  item: SearchResult
): { type: string; code: string } | null {
  const { link, mime } = item
  const patterns = {
    statsPearl: /https:\/\/www\.ncbi\.nlm\.nih\.gov\/books\/(NBK\d+)/,
    pmc: /https:\/\/www\.ncbi\.nlm\.nih\.gov\/pmc\/articles\/(PMC\d+)/,
    medscape: /.medscape\.com\//,
    drugs: /www\.drugs\.com\//
  }

  if (mime === 'application/pdf') {
    return { type: 'pdf', code: link }
  }

  for (const type in patterns) {
    const match = link.match(patterns[type as keyof typeof patterns])
    if (match != null) {
      return { type, code: match[1] }
    }
  }

  return null
}

// Load environment variables from .env file

interface IScraper {
  scrape: (url: string) => Promise<string>
}

function extractNBKNumber(url: string): string | null {
  const match = url.match(/NBK(\d+)/)
  return match != null ? match[1] : null
}

function extractPMCNumber(url: string): string | null {
  const match = url.match(/PMC(\d+)/)
  return match != null ? match[1] : null
}

class StatsPearlScraper implements IScraper {
  async scrape(url: string): Promise<string> {
    //console.log('\n Scraping StatsPearl article...')
    // Specific scraping logic for books
    const NBK = extractNBKNumber(url)
    const api = `https://api.ncbi.nlm.nih.gov/lit/oai/books/?verb=GetRecord&identifier=oai:books.ncbi.nlm.nih.gov:${NBK}&metadataPrefix=nbk_ftext`
    try {
      const response = await fetch(api)

      if (response.ok) {
        const blob = await response.text()

        // Case api does not return the content
        if (blob.includes('error code="cannotDisseminateFormat"')) {
          const response = await fetch(url)
          const htmlContent = await response.text()

          const $ = cheerio.load(htmlContent)

          // Remove script, style tags, and comments
          $('script, style').remove()
          $('*')
            .contents()
            .each(function () {
              if (this.nodeType === 8) {
                // Node type 8 corresponds to comments
                $(this).remove()
              }
            })

          // Extracting text and removing extra whitespace
          let textContent = $('body').text()
          textContent = textContent.replace(/\s\s+/g, ' ').trim()

          //return textContent

          // Limiting the text content to a maximum length

          const maxLength = 200000

          return textContent.slice(0, maxLength)
        }

        const $ = cheerio.load(blob)
        let textContent = $('book-part').text()
        textContent = textContent.replace(/\s\s+/g, ' ').trim()

        const maxLength = 200000

        return textContent.slice(0, maxLength)
      }
      return ''
    } catch (error) {
      console.error(error)
    }
    console.log('No response')
    return ''
  }
}

class PMCScraper implements IScraper {
  async scrape(url: string): Promise<string> {
    // Specific scraping logic for articles
    //console.log('\n Scraping PMC article...')
    const PMC = extractPMCNumber(url)
    // const api = `https://www.ncbi.nlm.nih.gov/research/bionlp/RESTful/pmcoa.cgi/BioC_xml/PMC${PMC}/unicode`
    const api = `https://www.ncbi.nlm.nih.gov/pmc/oai/oai.cgi?verb=GetRecord&identifier=oai:pubmedcentral.nih.gov:${PMC}&metadataPrefix=pmc`
    try {
      const response = await fetch(api)
      if (response.ok) {
        const blob = await response.text()
        //console.log(`\n PMC blob ${url}:`, blob.slice(0, 100))
        // Case api does not return the content
        if (blob.includes('error code')) {
          const response = await fetch(url)
          const htmlContent = await response.text()

          const $ = cheerio.load(htmlContent)

          // Select the section with role="document"
          const documentSection = $('section[role="document"]')

          // Get the content inside the section
          const textContent = documentSection.text() // This returns the inner HTML

          //console.log(`\n PMC text content ${url}:`, textContent.slice(0, 1000))

          //return textContent

          // Limiting the text content to a maximum length

          const maxLength = 200000

          // return textContent.slice(0, maxLength)
          return textContent
        }
        const $ = cheerio.load(blob)
        let textContent = $('body').text()
        textContent = textContent.replace(/\s\s+/g, ' ').trim()

        const maxLength = 200000

        //console.log(`\n PMC text content ${url}:`, textContent.slice(0, 100))

        return textContent.slice(0, maxLength)
      }
    } catch (error) {
      console.error(error)
    }
    return ''
  }
}

class MedscapeScraper implements IScraper {
  async scrape(_url: string): Promise<string> {
    // Specific scraping logic for Medscape
    return 'Scraped data for Medscape'
  }
}

class DrugsScraper implements IScraper {
  async scrape(url: string): Promise<string> {
    // Specific scraping logic for Drugs.com
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    
    // Extract page content
    const content = await page.evaluate(() => {
        return document.body.innerText;
    });

    const contentWithoutNewlines = content.replace(/\n/g, " ");

    
    await browser.close();
    return contentWithoutNewlines
  }
}

class OthersScraper implements IScraper {
  async scrape(url: string): Promise<string> {
    try {
      const response = await fetch(url)
      const htmlContent = await response.text()

      const $ = cheerio.load(htmlContent)

      // Remove script, style tags, and comments
      $('script, style').remove()
      $('*')
        .contents()
        .each(function () {
          if (this.nodeType === 8) {
            // Node type 8 corresponds to comments
            $(this).remove()
          }
        })

      // Extracting text and removing extra whitespace
      let textContent = $('body').text()
      textContent = textContent.replace(/\s\s+/g, ' ').trim()

      //return textContent

      // Limiting the text content to a maximum length

      const maxLength = 200000

      return textContent.slice(0, maxLength)
    } catch (error: any) {
      console.error('Error fetching the page:', error.message)
      return ''
    }
  }
}

export async function webScraper(category: string, url: string): Promise<any> {
  let scraper: IScraper

  switch (category) {
    case 'statsPearl':
      scraper = new StatsPearlScraper()
      break
    case 'pmc':
      scraper = new PMCScraper()
      break
    case 'medscape':
      scraper = new OthersScraper()
      break
    case 'drugs':
      scraper = new DrugsScraper()
      break
    case 'pdf':
      return null
    default:
      scraper = new OthersScraper()
      break
  }

  const res = await scraper.scrape(url)

  return res
}
