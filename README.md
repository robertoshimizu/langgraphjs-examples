# LangGraph.js Examples

This repository contains a series of example TypeScript projects which implement LangGraph.js agents.
Each directory focuses on a different problem which LangGraph.js aims to solve/enable solutions for.

## Prerequisites

The following projects all use [LangSmith](https://smith.langchain.com/), LangGraph [Studio](https://github.com/langchain-ai/langgraph-studio) and [Cloud](https://langchain-ai.github.io/langgraph/cloud/), as well as the [LangGraph.js](https://langchain-ai.github.io/langgraphjs/) and [LangChain.js](https://js.langchain.com/v0.2/docs/introduction/) libraries.

Before jumping into any of the projects, you should create a LangSmith account [here](https://smith.langchain.com/), and download the latest LangGraph Studio version [here](https://github.com/langchain-ai/langgraph-studio/releases/latest).

Running LangGraph Studio locally requires [Docker](https://www.docker.com/), so ensure you have it installed _and_ running before starting the Studio (I personally use [OrbStack](https://orbstack.dev/) to manage my Docker containers, which is free to use for personal use).


## Langgraph Server Locally

https://github.com/langchain-ai/langgraph-studio

https://langchain-ai.github.io/langgraph/tutorials/langgraph-platform/local-server/

```
npx @langchain/langgraph-cli dev
```

- 🚀 API: http://localhost:2024
- 🎨 Studio UI: https://smith.langchain.com/studio?baseUrl=http://localhost:2024


## Package Updates & ESLint v9 Migration

### Overview

This repository has been updated to use the latest versions of key dependencies. The most significant change is the migration from ESLint v8 to v9, which requires a new configuration format.

### Key Updates

#### Package Versions
- **ESLint**: v8.57.1 → v9.27.0
- **TypeScript ESLint**: v5.62.0 → v8.32.1
- **Prettier**: v2.8.8 → v3.5.3
- **LangChain packages**: Updated to latest versions
  - `@langchain/core`: 0.2.31 → 0.3.57
  - `@langchain/community`: 0.2.33 → 0.3.44
  - `@langchain/openai`: 0.2.11 → 0.5.11
  - `@langchain/langgraph-checkpoint`: Added ~0.0.16 (required by CLI)

#### ESLint v9 Migration

ESLint v9 introduces a **flat config format** that replaces the legacy `.eslintrc.*` files. All projects in this repository need to migrate to `eslint.config.js`.

### Migration Steps for Each Project

1. **Update packages**:
   ```bash
   pnpm update @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint@latest prettier@latest
   ```

2. **Update LangChain packages** (critical for CLI compatibility):
   ```bash
   # Remove any version pinning in package.json resolutions
   pnpm update @langchain/core@latest @langchain/community@latest @langchain/openai@latest
   pnpm add @langchain/langgraph-checkpoint@~0.0.16
   ```

3. **Install required dependencies**:
   ```bash
   pnpm add -D @eslint/js typescript-eslint
   ```

4. **Create `eslint.config.js`** (replace any existing `.eslintrc.*` files):
   ```javascript
   import js from '@eslint/js';
   import tsEslint from 'typescript-eslint';
   import prettierConfig from 'eslint-config-prettier';
   import unusedImports from 'eslint-plugin-unused-imports';

   export default [
     js.configs.recommended,
     ...tsEslint.configs.recommended,
     prettierConfig,
     {
       files: ['**/*.ts', '**/*.tsx'],
       plugins: {
         'unused-imports': unusedImports,
       },
       rules: {
         'unused-imports/no-unused-imports': 'error',
         'unused-imports/no-unused-vars': [
           'warn',
           {
             vars: 'all',
             varsIgnorePattern: '^_',
             args: 'after-used',
             argsIgnorePattern: '^_',
           },
         ],
       },
     },
   ];
   ```

5. **Test the migration**:
   ```bash
   pnpm run build  # Should pass
   pnpm run lint   # Should work with new config
   npx @langchain/langgraph-cli dev  # Should start without errors
   ```

### Expected Warnings

After migration, you may see peer dependency warnings for packages not yet updated for ESLint v9:
- `eslint-config-airbnb-base`: Expects ESLint v7-8
- `eslint-plugin-unused-imports`: Expects ESLint v8

These warnings don't affect functionality and will resolve as the ecosystem updates.

### Common Issues

#### LangGraph CLI Errors
If you see `SyntaxError: The requested module '@langchain/core/messages' does not provide an export named 'isToolMessage'`:

1. **Remove version pinning**: Delete any `resolutions` section in `package.json` that pins `@langchain/core`
2. **Update to compatible versions**: Use the LangChain package versions listed above
3. **Add checkpoint dependency**: `pnpm add @langchain/langgraph-checkpoint@~0.0.16`

This occurs when LangGraph CLI dependencies expect newer `@langchain/core` versions than what's installed.

#### Studio Input Format Changes
After the package upgrades, **LangGraph Studio now requires explicit JSON message format** instead of accepting plain text:

**Required format:**
```json
{
  "messages": [
    {"role": "user", "content": "Your message here"}
  ]
}
```

**Note**: This is **not a breaking API change** in `MessagesAnnotation` itself, but rather a **CLI/Studio interface design decision** to be more explicit about input structure. The underlying LangGraph library still supports flexible input formats, but the Studio UI now requires structured JSON input for better control and debugging.

*Investigation findings: No evidence of breaking changes in LangGraph CLI/MessagesAnnotation auto-conversion functionality was found in official documentation, GitHub releases, or migration guides. The change appears to be specific to the Studio UI interface requirements.*

### Status

- ✅ **intro/**: Migrated and tested
- ✅ **human_in_the_loop/**: Migrated and tested
- ⏳ **stockbroker/**: Pending  
- ⏳ **streaming_messages/**: Pending
- ⏳ **streaming_messages_frontend/**: Pending

### Notes

- Build processes remain unchanged
- Prettier formatting rules are maintained
- TypeScript strict typing preserved
- The flat config provides better performance and simpler maintenance

## Projects

- [Intro](./intro/README.md) - Introduction to LangGraph.js, Studio, and Cloud.
  - **Simple Agent**: Basic ReAct agent with web search capabilities
  - **React Agent**: Standard React pattern implementation  
  - **Self-RAG Agent**: Self-Reflective Retrieval-Augmented Generation with quality control loops
- [Human in the Loop](./human_in_the_loop/README.md) - Introduction to Human in the Loop (HITL) concepts.
- [Stockbroker](./stockbroker/README.md) - A full stack stockbroker & financial analyst app, with HITL for purchasing stocks.
- Streaming Messages ([Examples](./streaming_messages/README.md), [Frontend](./streaming_messages_frontend/README.md)) - Next.js web app connected to a LangGraph Cloud deployment to show off different message streaming types.

## Featured: Self-RAG Agent

**Self-Reflective Retrieval-Augmented Generation** - An intelligent question-answering system that retrieves documents, reflects on their quality, and self-corrects to provide better answers. It's like a researcher that double-checks their sources and rewrites their queries when needed.

### Key Innovation: Self-Reflection

Unlike basic RAG that just retrieves → generates, Self-RAG adds **quality control loops**:
- **Document Relevance Grading**: "Are these documents actually relevant?"
- **Answer Grounding Check**: "Is my answer supported by the documents?"
- **Answer Usefulness Check**: "Does this actually answer the question?"
- **Query Transformation**: "Can I ask a better question?"

### How It Works

#### 1. Initial Retrieval
```
User: "What are AI agents?"
↓
• Scrapes content from 3 URLs (Lilian Weng's blog posts)
• Splits into chunks, creates embeddings
• Retrieves relevant documents
```

#### 2. Document Quality Control
```
For each retrieved document:
• LLM grades: "Is this relevant to the question?" (yes/no)
• Filters out irrelevant documents
• If no good documents → transform query and retry
```

#### 3. Answer Generation
```
If good documents found:
• Generate answer using RAG prompt
• Uses retrieved context + original question

If failed 3+ times:
• Fall back to Tavily web search
• Generate answer from web results
```

#### 4. Answer Quality Checks

**Check 1: Document Grounding**
```
• "Is this answer supported by the retrieved documents?"
• If NO → regenerate answer
```

**Check 2: Question Usefulness**
```
• "Does this answer actually address the user's question?"
• If NO → transform query and start over
```

#### 5. Self-Correction Loops

The agent can:
- **Retry retrieval** with better queries (up to 3 times)
- **Regenerate answers** if not grounded in documents
- **Fall back to web search** if retrieval consistently fails

### Workflow Diagram

```
User Question
      ↓
   Retrieve Docs
      ↓
   Grade Docs ──→ Bad docs? ──→ Transform Query ──┐
      ↓                                           │
   Good docs                                      │
      ↓                                           │
   Generate Answer ←──────────────────────────────┘
      ↓
   Check: Grounded in docs? ──→ No ──→ Regenerate
      ↓ Yes
   Check: Answers question? ──→ No ──→ Transform Query
      ↓ Yes
   Final Answer
```

### Real-World Example

**User**: "How do AI agents plan their actions?"

**Self-RAG Process**:
1. **Retrieve**: Gets documents about AI planning
2. **Grade**: "Document 1: YES, Document 2: NO" → Keeps only relevant ones
3. **Generate**: Creates answer from good documents  
4. **Check Grounding**: "Is this answer supported?" → YES
5. **Check Usefulness**: "Does this answer the planning question?" → YES
6. **Return**: High-quality, verified answer

### Why It's Better Than Basic RAG

| Basic RAG | Self-RAG |
|-----------|----------|
| Retrieve → Generate | Retrieve → Grade → Generate → Verify |
| No quality control | Multiple quality checks |
| Static queries | Adaptive query improvement |
| Can hallucinate | Self-corrects hallucinations |
| One-shot process | Iterative refinement |

### Key Components in Code

- **`gradeDocuments`**: LLM judges document relevance
- **`generateGenerationVDocumentsGrade`**: Checks answer grounding
- **`generateGenerationVQuestionGrade`**: Checks answer usefulness
- **`transformQuery`**: Improves questions for better retrieval
- **`shouldContinue`**: Controls the self-correction loops

**Example execution trace**: [View Self-RAG in LangSmith](https://smith.langchain.com/public/68a08335-9e04-407d-a7a6-70d2212df14a/r)

This creates a **self-improving research assistant** that produces higher-quality, more reliable answers by continuously checking and correcting its own work!

## Repository Structure & Configurations

### Package Management
- **Package Manager**: `pnpm` (preferred) / `yarn` / `npm`
- **Node Version**: 20 (specified in langgraph.json)
- **TypeScript**: Strict typing enabled, ES2021 target

### Environment Setup
```bash
# Global environment file location
/langgraphjs-examples/.env

# Required API Keys
OPENAI_API_KEY=your_openai_api_key
TAVILY_API_KEY=your_tavily_api_key  # For web search functionality
LANGCHAIN_API_KEY=your_langsmith_api_key  # For LangSmith tracing
```

### Git Configuration
- **Origin**: `robertoshimizu/langgraphjs-examples` (your fork)
- **Upstream**: `bracesproul/langgraphjs-examples` (original repo)
- **Current Branch**: `my-changes`

### Completed Implementations

#### intro/ 
- **Agents**: simple_agent, react_agent, self_rag_agent
- **Dependencies**: All required packages installed (langchain, cheerio, etc.)
- **Configuration**: Updated langgraph.json with all 3 agents
- **Status**: ✅ Fully migrated, tested, and operational

#### human_in_the_loop/
- **Agent**: Customer refund authorization system with HITL patterns
- **Key Feature**: `interruptBefore: ["tools"]` for human authorization
- **Authorization**: Requires `{"refundAuthorized": true}` state update
- **Status**: ✅ Fully migrated, tested, and operational

### Pending Migrations

#### stockbroker/
- **Status**: ⏳ Needs ESLint v9 migration
- **Expected Issues**: Package updates, eslint.config.js creation
- **Dependencies**: Likely needs additional LangChain packages

#### streaming_messages/ & streaming_messages_frontend/
- **Status**: ⏳ Need migration
- **Type**: Next.js frontend + LangGraph backend
- **Complexity**: Full-stack application with streaming

## Development Workflow

### Starting Development
```bash
# 1. Navigate to project
cd /path/to/langgraphjs-examples/[project]

# 2. Install dependencies (if needed)
pnpm install

# 3. Start LangGraph server
npx @langchain/langgraph-cli dev

# 4. Access Studio
# API: http://localhost:2024
# UI: https://smith.langchain.com/studio?baseUrl=http://localhost:2024
```

### Testing Input Formats
**For MessagesAnnotation graphs:**
```json
{
  "messages": [
    {"role": "user", "content": "Your message here"}
  ]
}
```

**For custom text input graphs:**
```json
{
  "input": "Your message here"
}
```

### Migration Checklist
For each new project migration:
- [ ] Update ESLint/Prettier/TypeScript packages
- [ ] Update LangChain packages to latest versions
- [ ] Remove `resolutions` from package.json
- [ ] Add `@langchain/langgraph-checkpoint@~0.0.16`
- [ ] Install `@eslint/js typescript-eslint`
- [ ] Create `eslint.config.js` with flat config
- [ ] Test build: `pnpm run build`
- [ ] Test lint: `pnpm run lint`
- [ ] Test CLI: `npx @langchain/langgraph-cli dev`
- [ ] Update README status

## Troubleshooting Quick Reference

### Common CLI Errors
```bash
# Missing isToolMessage export
→ Update @langchain/core to 0.3.57+

# Permission to refund required (HITL)
→ Expected behavior, authorize via Studio UI

# ESLint flat config not found
→ Create eslint.config.js file

# Peer dependency warnings
→ Expected with ESLint v9, ignore safely
```

### File Locations
- **LangGraph configs**: `[project]/langgraph.json`
- **Environment**: `/langgraphjs-examples/.env`
- **ESLint configs**: `[project]/eslint.config.js`
- **Package files**: `[project]/package.json`

This README now serves as both migration documentation and complete resumption guide for the repository modernization work.
