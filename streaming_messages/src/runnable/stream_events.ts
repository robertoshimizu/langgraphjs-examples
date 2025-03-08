import { graph } from "./graph.js";

const input = {
  messages: {
    role: "user",
    content: "What is the current stock price of $AAPL?",
  },
};

const config = {
  configurable: {
    thread_id: "stream_events",
  },
  version: "v2" as const,
};

const stream = graph.streamEvents(input, config);

for await (const event of stream) {
  if ((event.event === "on_chain_start") || (event.event === "on_chain_end")) {
    console.dir(
      {
        event: event.event,
        data: event.data,
      },
      { depth: 5 }
    );
    continue;
  }
  
}
