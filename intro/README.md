# LangGraph.js Examples - Intro

This directory contains multiple LangGraph.js examples showcasing different agent architectures and patterns, from simple agents to complex medical research systems.

## Available Agents

### 1. Simple Agent (`simple_agent`)
- **Location**: `src/agents/simple/index.ts`
- **Description**: Basic agent with web search capabilities using Tavily
- **Features**: Text input processing, tool calling, simple workflow

### 2. React Agent (`react_agent`) 
- **Location**: `src/agents/react/react_agent.ts`
- **Description**: ReAct (Reasoning + Acting) pattern implementation
- **Features**: Message-based state, tool integration, reasoning loop

### 3. Self-RAG Agent (`self_rag_agent`)
- **Location**: `src/agents/self_rag/self-rag_agent.ts`
- **Description**: Self-correcting Retrieval Augmented Generation agent
- **Features**: Document retrieval, relevance grading, query transformation, answer validation

### 4. Medical Researcher Agent (`researcher_agent`) ⭐
- **Location**: `src/agents/researcher/researcher_agent.ts` 
- **Description**: Production-ready medical AI assistant providing evidence-based healthcare information
- **Purpose**: A sophisticated medical research system that acts as a medical librarian + fact-checker + content generator
- **Core Workflow** (6-step process):
  1. **Route Medicine** - Classifies healthcare queries using Gemini
  2. **Topic Router** - Orchestrates research with intelligent caching  
  3. **Research Sources** - Parallel searches across medical databases
  4. **Final Redaktor** - Generates 400-800 word responses with citations
  5. **Text Revisor** - AI-powered fact-checking for hallucination detection
  6. **Finalize** - Caches results and state cleanup
- **Advanced Features**:
  - **Multi-source research**: Medical protocols, drug databases, clinical guidelines
  - **Intelligent caching**: Similarity matching (0.85 threshold) prevents duplicate research
  - **Hallucination prevention**: Source verification with retry mechanisms (max 2 attempts)
  - **Multi-model orchestration**: GPT-4o (reasoning), Gemini 2.0 (validation), Gemma 3-27B (generation)
  - **Medical domain expertise**: Brazilian healthcare tools (TUSS, DUT, ICD-11)
  - **Production-grade**: 936 lines with comprehensive error handling and structured logging
- **Architecture**: Enterprise-level LangGraph.js patterns with modular services, conditional routing, and parallel execution

## Project Structure

```
src/
├── agents/                    # All agent implementations
│   ├── simple/               # Simple agent example
│   ├── react/                # ReAct agent example  
│   ├── self_rag/             # Self-RAG agent example
│   └── researcher/           # Medical researcher agent
│       ├── services/         # External service integrations
│       │   ├── cache/        # Caching implementations
│       │   ├── google/       # Google services
│       │   └── vector/       # Vector search services
│       ├── utils/            # Agent-specific utilities
│       ├── data/             # Medical protocols and data
│       └── types/            # Type definitions
└── shared/                   # Shared utilities and libraries
    └── lib/                  # Common libraries and models
```

## Setup

Install dependencies:

```bash
pnpm install
# or
yarn install
```

## Environment Variables

Create a `.env` file in the parent directory with the following keys:

### Required for all agents:
```bash
OPENAI_API_KEY=your_openai_api_key
TAVILY_API_KEY=your_tavily_api_key
```

### Additional for researcher agent:
```bash
# Redis/Upstash (optional - falls back to in-memory cache)
REDIS_URL=your_redis_url

# Google Services (optional)
GOOGLE_API_KEY=your_google_api_key
GOOGLE_SEARCH_ENGINE_ID=your_search_engine_id

# Pinecone (optional)
PINECONE_API_KEY=your_pinecone_api_key

# AWS Bedrock (optional)
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=your_aws_region
```

## API Key Sources

- **OpenAI**: https://platform.openai.com/signup
- **Tavily**: https://tavily.com/
- **Google Custom Search**: https://developers.google.com/custom-search
- **Pinecone**: https://www.pinecone.io/
- **Upstash Redis**: https://upstash.com/
- **AWS Bedrock**: https://aws.amazon.com/bedrock/

## Development Commands

```bash
# Lint code
pnpm lint

# Format code  
pnpm format

# Build project
pnpm build

# Run development server
pnpm dev
```

## LangGraph Configuration

The [`langgraph.json`](langgraph.json) file defines all available graphs:

- `simple_agent` - Basic web search agent
- `react_agent` - ReAct pattern agent  
- `self_rag_agent` - Self-correcting RAG agent
- `researcher_agent` - Medical research agent

## Usage Examples

Each agent can be invoked through the LangGraph API or Studio interface. The agents accept different input formats:

- **Simple Agent**: Plain string input
- **React/Self-RAG**: Message-based input
- **Researcher**: Medical query with context parameters

## Architecture Notes

This project demonstrates progressive complexity in LangGraph.js applications:

1. **Simple patterns** - Basic tool calling and state management
2. **Advanced workflows** - Multi-step reasoning and validation
3. **Production systems** - Caching, error handling, service integration
4. **Domain expertise** - Medical knowledge integration and specialized tooling

The modular structure allows for easy extension and maintenance while showcasing best practices for LangGraph.js development.