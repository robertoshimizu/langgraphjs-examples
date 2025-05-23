# Human in the Loop (HITL)

This directory demonstrates **Human in the Loop** patterns using a real-world customer refund authorization system. The AI agent can process refund requests but requires explicit human approval before executing sensitive operations.

## What It Does

**Customer Refund Authorization System** - Shows how AI agents can be designed with human oversight for critical business operations.

**Key Components:**
1. **AI Agent**: Handles customer refund requests and can call a `process_refund` tool
2. **Human Gate**: Requires explicit human authorization (`refundAuthorized: true`) before executing refunds  
3. **Interrupt Point**: Graph pauses before tool execution for human review

**Workflow:**
1. Customer requests refund → AI processes request → **STOPS** before refund tool
2. Human reviews and authorizes → Graph continues → Refund processed

This directory contains two graphs:
- [`human_in_the_loop.ts`](./src/human_in_the_loop.ts) - Main HITL refund system (configured for Studio)
- [`dynamic_breakpoints.ts`](./src/dynamic_breakpoints.ts) - Programmatic demonstration

## [YouTube Video](https://www.youtube.com/watch?v=gm-WaPTFQqM)

## Setup

To setup the HITL project, install the dependencies:

```bash
pnpm install
```

## Environment variables

The HITL project only requires an OpenAI API key to run. Sign up here:

- OpenAI: https://platform.openai.com/signup

Once you have your API keys, create a `.env` file in the parent directory (`../`) and add the following:

```bash
OPENAI_API_KEY=YOUR_API_KEY
```

## How to Test the HITL Agent

### Option 1: LangGraph Studio (Recommended)

Run the LangGraph development server:

```bash
npx @langchain/langgraph-cli dev
```

Access the Studio UI at: http://localhost:2024 or https://smith.langchain.com/studio?baseUrl=http://localhost:2024

### Option 2: Programmatic Testing

Run the dynamic breakpoints example:

```bash
pnpm run start:dynamic_breakpoints
```

## Example Inputs & Expected Workflow

### Studio JSON Input Examples

**Example 1: Basic refund request**
```json
{
  "messages": [
    {"role": "user", "content": "Can I have a refund for my purchase? Order no. 123"}
  ]
}
```

**Example 2: Defective product**
```json
{
  "messages": [
    {"role": "user", "content": "I need to return product ABC-456, it's defective"}
  ]
}
```

**Example 3: Shipping damage**
```json
{
  "messages": [
    {"role": "user", "content": "My order 789 was damaged in shipping. Can you process a refund?"}
  ]
}
```

### Expected Workflow in Studio

1. **Submit Request**: Use one of the JSON examples above
2. **Graph Interrupts**: Agent processes request → **STOPS** before calling refund tool
3. **Human Authorization Required**: 
   - Graph shows "interrupted" state
   - Update state with: `{"refundAuthorized": true}`
   - Resume execution
4. **Refund Processed**: Graph continues → Processes refund → Returns success message

### Important: Expected "Error" Behavior

If you try to run a second input without authorization, you'll see:
```
Error: Permission to refund is required.
```

**This is expected!** The HITL agent is working correctly - it's preventing unauthorized refund processing. You must authorize through the Studio interface to continue.

### Dynamic Breakpoints Output

When running `pnpm run start:dynamic_breakpoints`, you should see:

<details>
<summary>Show terminal output</summary>

```txt
Event: agent


---INTERRUPTING GRAPH TO UPDATE STATE---


---refundAuthorized value before state update--- undefined
---refundAuthorized value after state update--- true

---CONTINUING GRAPH AFTER STATE UPDATE---


Event: tools
{ role: 'tool', content: 'Successfully processed refund for 123' }

Event: agent
{
  role: 'ai',
  content: 'Your refund for order no. 123 has been successfully processed. If you have any other questions or need further assistance, feel free to ask!'
}
```

</details>

## LangGraph Config

The LangGraph configuration file is located in [`langgraph.json`](langgraph.json). This file defines the HITL graph: `human_in_the_loop`.
