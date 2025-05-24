import { v2 } from '@google-cloud/translate'
const { Translate } = v2

async function getGoogleCredentials() {
  // console.log('document Translate API starting ...')

  const credentialsBase64 = process.env.GOOGLE_APPLICATION_CREDENTIALS_BASE64
  if (!credentialsBase64) {
    throw new Error(
      'The GOOGLE_APPLICATION_CREDENTIALS_BASE64 environment variable is not set.'
    )
  }

  const credentialsJson = Buffer.from(credentialsBase64, 'base64').toString(
    'utf-8'
  )

  // console.log('Google credentials loaded ...', credentialsJson)
  const credentials = JSON.parse(credentialsJson)

  return credentials
}

interface TranslateTextProps {
  text: string
  target: string
}

/**
 * Translates text into the target language.
 *
 * @param {string} text The text to translate
 * @param {string} target The target language
 * @returns {Promise<string>}
 *
 */
export async function translateText({
  text,
  target
}: TranslateTextProps): Promise<string> {
  const credentials = await getGoogleCredentials()

  const translate = new Translate({ credentials })

  const [translation] = await translate.translate(text, target)
  // console.log(`Text: ${text}`)
  // console.log(`Translation: ${translation}`)
  return translation
}

// translateText({
//   text: 'Hello, world!',
//   target: 'es'
// })
//   .then(() => {
//     console.log('Text translated successfully.')
//   })
//   .catch(err => {
//     console.error('ERROR:', err)
//   })
