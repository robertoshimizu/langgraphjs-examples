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

### Status

- ✅ **intro/**: Migrated and tested
- ⏳ **human_in_the_loop/**: Pending
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
- [Human in the Loop](./human_in_the_loop/README.md) - Introduction to Human in the Loop (HITL) concepts.
- [Stockbroker](./stockbroker/README.md) - A full stack stockbroker & financial analyst app, with HITL for purchasing stocks.
- Streaming Messages ([Examples](./streaming_messages/README.md), [Frontend](./streaming_messages_frontend/README.md)) - Next.js web app connected to a LangGraph Cloud deployment to show off different message streaming types.
