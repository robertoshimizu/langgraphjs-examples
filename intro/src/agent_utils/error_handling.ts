import * as fs from 'fs';
import * as path from 'path';

// Error object structure
export interface ErrorObject {
  message: string;
  timestamp: string;
  source: string;
  details: any;
}

// Path to error log file - ensure directory exists
const ERROR_LOG_DIR = path.join(process.cwd(), 'logs');
const ERROR_LOG_PATH = path.join(ERROR_LOG_DIR, 'error_logs.json');

// Function to log errors to file  
export function logError(functionName: string, description: string, error: any = {}): ErrorObject {
  const errorMessage = `${functionName}: ${description}`;
  const errorObj: ErrorObject = {
    message: errorMessage,
    timestamp: new Date().toISOString(),
    source: functionName,
    details: typeof error === 'object' ? JSON.stringify(error, null, 2) : String(error)
  };
  
  try {
    // Ensure directory exists
    if (!fs.existsSync(ERROR_LOG_DIR)) {
      fs.mkdirSync(ERROR_LOG_DIR, { recursive: true });
    }
    
    // Read existing logs or create new log array
    let logs: ErrorObject[] = [];
    if (fs.existsSync(ERROR_LOG_PATH)) {
      const fileContent = fs.readFileSync(ERROR_LOG_PATH, 'utf-8');
      try {
        logs = JSON.parse(fileContent);
      } catch (parseErr) {
        console.error('Error parsing log file, creating new log');
      }
    }
    
    // Add new error log
    logs.push(errorObj);
    
    // Write back to file
    fs.writeFileSync(ERROR_LOG_PATH, JSON.stringify(logs, null, 2));
    
    console.error(`Error logged: ${errorMessage}`);
  } catch (err) {
    console.error('Failed to log error to file:', err);
  }
  
  return errorObj;
}

// Generate user-friendly error messages
/**
 * Generate user-friendly error messages
 * @param language 
 * @returns 
 */
export function getUserErrorMessage(language: string = 'pt'): string {
  const messages = {
    pt: 'Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde ou reformule sua pergunta.',
    en: 'Sorry, an error occurred while processing your request. Please try again later or rephrase your question.',
    es: 'Lo siento, se produjo un error al procesar su solicitud. Inténtelo de nuevo más tarde o reformule su pregunta.'
  };
  
  return messages[language as keyof typeof messages] || messages.en;
}
