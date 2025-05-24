import axios, { AxiosInstance } from 'axios'

/**
 * API from ICD WHO
 *
 * https://icd.who.int/icdapi
 */
class ICD11 {
  private clientId: string
  private clientSecret: string
  private tokenEndpoint: string =
    'https://icdaccessmanagement.who.int/connect/token'
  private token: string | null = null
  private httpClient: AxiosInstance

  private constructor(clientId: string, clientSecret: string) {
    this.clientId = clientId
    this.clientSecret = clientSecret
    this.httpClient = axios.create()
  }

  // Static factory method to create and initialize the instance
  public static async create(): Promise<ICD11> {
    const clientId = process.env.ICD_CLIENT_ID
    const clientSecret = process.env.ICD_CLIENT_SECRET

    if (!clientId || !clientSecret) {
      throw new Error(
        'ICD_CLIENT_ID and ICD_CLIENT_SECRET must be set in environment variables.'
      )
    }

    const instance = new ICD11(clientId, clientSecret)
    await instance.initialize()
    return instance
  }

  private async getToken(): Promise<void> {
    const credentials = Buffer.from(
      `${this.clientId}:${this.clientSecret}`
    ).toString('base64')
    const config = {
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    const body = new URLSearchParams({
      grant_type: 'client_credentials',
      scope: 'icdapi_access'
    })

    try {
      const response = await this.httpClient.post(
        this.tokenEndpoint,
        body.toString(),
        config
      )
      this.token = response.data.access_token
      //console.log('Token fetched successfully:', this.token)
    } catch (error) {
      console.error('Error fetching token:', error)
      throw new Error('Failed to fetch token.')
    }
  }

  private async initialize() {
    await this.getToken()
  }

  public async makeRequest(
    endpoint: string,
    method: 'GET' | 'POST' = 'GET',
    data: any = null
  ) {
    if (!this.token) {
      console.error('Token is not available, cannot make request')
      return
    }

    const config = {
      headers: {
        Authorization: `Bearer ${this.token}`,
        accept: 'application/json',
        'Accept-Language': 'en',
        'API-Version': 'v2'
      }
    }

    try {
      const url = `https://id.who.int/${endpoint}`
      let response
      if (method === 'POST') {
        response = await this.httpClient.post(url, data, config)
      } else {
        response = await this.httpClient.get(url, config)
      }
      return response.data
    } catch (error) {
      console.error('Error making request:', error)
      return null
    }
  }
}

/**
 * API from NIH - National Library of Medicine
 *
 * https://documentation.uts.nlm.nih.gov/rest/home.html
 *
 */
class UMLS {
  private static instance: UMLS // Static instance for singleton
  private apiKey: string
  private httpClient: AxiosInstance

  // Private constructor to prevent direct instantiation
  private constructor() {
    this.apiKey = process.env.UMLS_API_KEY || '' // Use || for default value
    if (!this.apiKey) {
      throw new Error('UMLS_API_KEY must be set in environment variables.')
    }
    this.httpClient = axios.create() // Initialize Axios instance
  }

  // Public static method to get the singleton instance
  public static getInstance(): UMLS {
    if (!UMLS.instance) {
      UMLS.instance = new UMLS()
    }
    return UMLS.instance
  }

  /**
   * Searches for a concept using the UMLS API
   * @param text - The text string to search for
   * @returns Response data from the UMLS API
   */
  public async searchConcept(text: string): Promise<any> {
    try {
      const url = `https://uts-ws.nlm.nih.gov/rest/search/current`
      const params = {
        apiKey: this.apiKey,
        searchType: 'words',
        string: text
      }

      const response = await this.httpClient.get(url, { params })

      return response.data
    } catch (error: any) {
      console.error('Error making request:', error.message || error)
      return null
    }
  }

  /**
   * Searches for an ICD-10-CM code using the UMLS API
   * @param text - The text string to search for
   * @returns ICD-10-CM code or null if not found
   */
  public async searchICD10Code(text: string): Promise<any> {
    try {
      const url = `https://uts-ws.nlm.nih.gov/rest/search/current`
      const params = {
        apiKey: this.apiKey,
        string: text,
        returnIdType: 'code',
        sabs: 'ICD10CM'
      }

      const response = await this.httpClient.get(url, { params })

      // Extracting the first result's code if available
      const results = response.data?.result?.results
      if (results && results.length > 0) {
        return results[0]
      }

      //   ICD-10 Search Result: {
      //                 "ui": "M32.9",
      //                 "rootSource": "ICD10CM",
      //                 "uri": "https://uts-ws.nlm.nih.gov/rest/content/2024AB/source/ICD10CM/M32.9",
      //                 "name": "Systemic lupus erythematosus, unspecified"
      // }

      return null // Return null if no results found
    } catch (error: any) {
      console.error(
        'Error making request for ICD-10-CM code:',
        error.message || error
      )
      return null
    }
  }
}

interface CodesRetrieverProps {
  _lang: string
  code_type: string
  subject: string
}

export async function codesRetriever({
  _lang,
  code_type,
  subject
}: CodesRetrieverProps) {
  switch (code_type) {
    case 'ICD-10':
      const umls = UMLS.getInstance()
      const icd10Result = await umls.searchICD10Code(subject)
      console.log(
        '\nICD-10 Search Result:',
        JSON.stringify(icd10Result, null, 2)
      )
      break
    case 'ICD-11':
      break
    case 'TUSS':
      break
  }
}
