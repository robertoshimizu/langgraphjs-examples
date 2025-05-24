import 'cheerio'
import { MemoryVectorStore } from 'langchain/vectorstores/memory'
import { OpenAIEmbeddings } from '@langchain/openai'
import { ChatPromptTemplate } from '@langchain/core/prompts'
import { StringOutputParser } from '@langchain/core/output_parsers'
import { createStuffDocumentsChain } from 'langchain/chains/combine_documents'
import { Document } from '@langchain/core/documents'
import { Pack, pack } from '../data/pack.js'
import { llm } from '../agent_utils/llm_models.js'

interface PackRagProps {
  signsAndsymptoms: string
  _contextOfQuestion?: string
}
/**
 * Search the terms in the Pack database and returns the information
 * @param signsAndsymptoms
 * @param contextOfQuestion
 * @returns string
 */
export async function pack_rag({
  signsAndsymptoms,
  _contextOfQuestion
}: PackRagProps): Promise<any> {
  console.log('Pack RAG')

  // Load the document

  const pack_docs = pack.map((item: Pack) => {
    return new Document({
      pageContent: item.conteudo,
      metadata: {
        titulo: item.titulo,
        pagina: item.pagina
      }
    })
  })

  const vectorStore = await MemoryVectorStore.fromDocuments(
    pack_docs,
    new OpenAIEmbeddings()
  )

  // Retrieve and generate using the relevant snippets of the blog.

  const prompt = ChatPromptTemplate.fromMessages([
    'system',
    `You are an medical assistant for doctors that perform primary care. You help them to select protocols based on signs and symptoms. 
    Your only and upmost task is to respond if the protocols provided are relevant to the signs and symptoms.
    <<<{context}>>>
    If yes, answer "true" in lowercase, if not, answer "false" in lowercase.
    Your answer is a javascript boolen value`,
    'user',
    `signs and symptoms: {question}`
  ])
  //const prompt = await pull<ChatPromptTemplate>('rlm/rag-prompt')

  const model = llm({ modelName: 'gpt-4o-mini' })
  //const llm = new ChatOpenAI({ model: 'gpt-3.5-turbo', temperature: 0 })

  const ragChain = await createStuffDocumentsChain({
    llm: model,
    prompt,
    outputParser: new StringOutputParser()
  })

  const retrievedDocs = await vectorStore.similaritySearch(
    `${signsAndsymptoms}`,
    2
  )

  //console.log('retrievedDocs', retrievedDocs)

  const responde = await ragChain.invoke({
    question: `${signsAndsymptoms}`,
    context: retrievedDocs
  })
  console.log('\n ----------------------------------------------------')
  console.log('Os protocolos sao releventes? ', responde)
  console.log('\n ----------------------------------------------------\n')
  if (responde === 'true') {
    return retrievedDocs
  } else return []
}

//main()

// npx ts-node src/lib/rag_models/basics.ts
