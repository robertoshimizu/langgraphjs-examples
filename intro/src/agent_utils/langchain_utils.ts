import { cn } from '../lib/utils.js'
import {
  AIMessage,
  AIMessageChunk,
  HumanMessage,
  ToolMessage,
  RemoveMessage
} from '@langchain/core/messages'

// Define the union type for all possible messages
type Message = HumanMessage | AIMessage | AIMessageChunk | ToolMessage

/**
 * Determines the base type of a message.
 * @param message - The message to classify.
 * @returns The base type as a string literal.
 */
export function baseType(
  message: HumanMessage | AIMessage | AIMessageChunk | ToolMessage
):
  | 'HumanMessage'
  | 'AIMessage'
  | 'FunctionMessage'
  | 'ToolMessage'
  | 'AIMessageChunk'
  | 'Unknown' {
  //console.log('baseType', message)

  if (message.lc_id.includes('HumanMessage')) return 'HumanMessage'
  if (message.lc_id.includes('AIMessage')) return 'AIMessage'
  if (message.lc_id.includes('FunctionMessage')) return 'FunctionMessage'
  if (message.lc_id.includes('ToolMessage')) return 'ToolMessage'
  if (message.lc_id.includes('AIMessageChunk')) {
    const msgAsAIMessageChunk = message as AIMessageChunk
    const hasNoToolCalls =
      !msgAsAIMessageChunk.tool_calls ||
      msgAsAIMessageChunk.tool_calls.length === 0
    if (hasNoToolCalls) return 'AIMessage'
    return 'AIMessageChunk'
  }
  return 'Unknown'
}

/**
 * Filters the messages array to include only HumanMessage and AIMessage types.
 * AIMessageChunk instances are included only if they have no tool calls, effectively treating them as AIMessage.
 * @param messages - The array of messages to filter.
 * @returns A new array containing only HumanMessage or AIMessage instances.
 */
export function filterMessages(
  messages: Message[]
): (HumanMessage | AIMessage)[] {
  return messages.filter((message): message is HumanMessage | AIMessage => {
    const type = baseType(message)

    // Include if it's a HumanMessage or an AIMessage (including AIMessageChunk without tool calls)
    return type === 'HumanMessage' || type === 'AIMessage'
  })
}

/**
 * Deletes all messages except HumanMessage and AIMessage types.
 * @param messages - The array of messages to process.
 * @returns An object containing RemoveMessage instances for deletion.
 */
export function messagesToKeep(messages: Message[]) {
  // Identify messages to delete
  const messagesToKeep = messages.filter((message) => {
    const type = baseType(message)
    return type === 'HumanMessage' || type === 'AIMessage'
  })

  // Return the deletion instructions
  return messagesToKeep
}
