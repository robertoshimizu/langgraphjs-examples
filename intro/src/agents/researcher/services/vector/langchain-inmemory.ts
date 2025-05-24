import { encoding_for_model } from 'tiktoken'
import { OpenAIEmbeddings } from '@langchain/openai'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { Document } from '@langchain/core/documents'
import {v4 as uuid4} from 'uuid'

import { MemoryVectorStore } from 'langchain/vectorstores/memory'
import { PromptTemplate } from '@langchain/core/prompts'
import { StructuredTool } from '@langchain/core/tools'
import { z } from 'zod'



/** Maximum token size for GPT-4o context window */
const MODEL_CONTEXT_WINDOW = 12800

/**
 * Calculates the number of tokens in a given text using the GPT-4o tokenizer
 *
 * @param {string} text - The text to count tokens from
 * @returns {number} The number of tokens in the text
 */
function getTokenCount(text: string): number {
  const encoder = encoding_for_model('gpt-4o')
  const tokens = encoder.encode(text)
  const tokenCount = tokens.length
  return tokenCount
}

/**
 * Splits text into manageable chunks while maintaining context
 *
 * @param {string} text - The text to be split into chunks
 * @param {number} chunkSize - Maximum size of each chunk in characters (default: 4000)
 * @param {number} chunkOverlap - Overlap between chunks to maintain context (default: 200)
 * @returns {Promise<string[]>} Array of text chunks
 */
async function splitText(
  text: string,
  chunkSize: number = 10000,
  chunkOverlap: number = 1000
) {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize,
    chunkOverlap
  })
  return await splitter.splitText(text)
}

interface CreateMemoryVectorProps {
  article: string
  url?: string
}
async function createMemoryVector({ article, url }: CreateMemoryVectorProps) {
  // Split text into smaller chunks
  const chunks = await splitText(article)

  // Generate IDs for each chunk
  const docs = chunks.map((item, i) => {
    return new Document({
      pageContent: item,
      metadata: {
        part: i,
        url: url || ''
      },
      id: uuid4()
    })
  })

  const vectorStore = await MemoryVectorStore.fromDocuments(
    docs,
    new OpenAIEmbeddings()
  )

  console.log(`Added ${docs.length} chunks to vector store.`)

  //console.log('Memory Vector created', vectorStore)

  return vectorStore
}


/**
 * Main function demonstrating the usage of article processing
 *
 * @returns {Promise<void>}
 */
export async function getRelevantPieces(item: string, url:string, query: any) {

  // const tokenCount = getTokenCount(item);
  // console.log('Token Count:', tokenCount)
  
  //   if (tokenCount <= MODEL_CONTEXT_WINDOW) {
  //     return item;
  //   }

  const vectorStore = await createMemoryVector({article: item, url: url})

  const retrievedDocs = await vectorStore.similaritySearch(
    query,
    3
  )

  //console.log('\nretrievedDocs', retrievedDocs)
  return retrievedDocs
}



// npx ts-node src/rag-vector/langchain-inmemory.ts
