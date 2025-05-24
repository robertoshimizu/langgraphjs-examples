import { SourceConfig } from '../types/types.js'

// Tool processor config map
export const toolSourceConfigs: Record<string, SourceConfig> = {
  getMedicaments: {
    primary: [
      'site:ncbi.nlm.nih.gov/pmc/',
      'site:drugs.com/pro/',
      'site:medscape.com/',
      'site:ncbi.nlm.nih.gov/books/',
      'site:merckmanuals.com/professional/'
    ],
    secondary: ['site:consultaremedios.com.br/', 'site:scielo.br/'],
    language: 'auto',
    maxResults: 5
  },
  getTreatments: {
    primary: ['site:clinicaltrials.gov', 'site:guidelines.gov', 'site:who.int'],
    secondary: ['site:scielo.br/', 'site:ncbi.nlm.nih.gov/pmc/'],
    language: 'auto',
    maxResults: 6
  },
  // Add more tool configs as needed
  default: {
    primary: ['site:ncbi.nlm.nih.gov/pmc/', 'site:ncbi.nlm.nih.gov/books/'],
    secondary: ['site:scielo.br/'],
    language: 'auto',
    maxResults: 3
  }
}
