'use server'
interface GoogleSearchProps {
  query: string
  sources?: string
}
export async function google_search({
  query = '(Effects of semaglutide in teenagers)',
  sources
}: GoogleSearchProps): Promise<Array<string> | undefined> {

  const key = process.env.GOOGLE_SEARCH_API_KEY
  const cx = process.env.GOOGLE_CX

  if (!key || !cx) {
    console.log('Missing Google Search API credentials');
    return undefined;
  }

  const search_object = `(${query}) ${sources}`

  try {
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${search_object}&num=3`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )

    const data = await response.json()
    // console.log(data)

    if (data.error) {
      console.error(`Error: ${data.error.code} - ${data.error.message}`)
    } else if (data.items && data.items.length > 0) {
      return data.items.slice(0, 2)
    } else {
      console.log('No items found.')
      return []
    }
  } catch (error) {
    console.error('An error occurred:', error)
    return undefined;
  }
}
