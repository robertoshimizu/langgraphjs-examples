interface StreamMessage {
  type?: string;
  content?: string;
  tool_calls?: Array<unknown>;
}

interface StreamResponse {
  event: string;
  data: StreamMessage[] | unknown;
}

export const logMessageEvent = (
  response: StreamResponse,
  extra: {
    toolCallLogged: boolean;
    contentLogged: boolean;
  }
) => {
  const { event, data } = response;
  let { toolCallLogged, contentLogged } = extra;
  if (
    !Array.isArray(data) ||
    data.length === 0 ||
    !("content" in data[0] || "type" in data[0])
  ) {
    console.log("Non message event:", event);
    console.log("\n---\n");
  } else {
    (data as StreamMessage[]).forEach((msg) => {
      if (!msg.content && msg.tool_calls?.length) {
        if (!toolCallLogged) {
          console.log("\n---TOOL CALL---\n");
          toolCallLogged = true;
        }
        console.dir({
          type: msg.type,
          tool_calls: msg.tool_calls[0],
        });
      } else if (msg.content && msg.tool_calls?.length) {
        if (!toolCallLogged) {
          console.log("\n---TOOL CALL---\n");
          toolCallLogged = true;
        }
        if (!contentLogged) {
          console.log("\n---CONTENT---\n");
          contentLogged = true;
        }
        console.dir({
          type: msg.type,
          content: msg.content,
          tool_calls: msg.tool_calls[0],
        });
      } else if (msg.content) {
        if (!contentLogged) {
          console.log("\n---CONTENT---\n");
          contentLogged = true;
        }
        console.dir({
          type: msg.type,
          content: msg.content,
        });
      }
    });
    console.log("\n---\n");
  }

  return {
    toolCallLogged,
    contentLogged,
  };
};

export const logUpdateEvent = (response: { event: string; data: Record<string, unknown> }) => {
  const { event, data } = response;
  if (event !== "updates") {
    console.log("Event: ", event);
    return;
  }
  const node = Object.keys(data)[0];
  const nodeReturnData = data[node];
  if (typeof nodeReturnData !== 'object' || nodeReturnData === null || !("messages" in nodeReturnData)) {
    return;
  }
  const { messages } = nodeReturnData as { messages: StreamMessage[] };
  console.log("\nUpdate from node:", node);
  logMessageEvent(
    {
      event,
      data: messages,
    },
    {
      toolCallLogged: true, // Don't log these extras
      contentLogged: true,
    }
  );
};

export const logValuesEvent = (response: { event: string; data: Record<string, unknown> }) => {
  const { event, data } = response;
  if (event !== "values") {
    console.log("Event: ", event);
    return;
  }
  if (typeof data !== 'object' || data === null || !("messages" in data)) {
    return;
  }
  const { messages } = data as { messages: StreamMessage[] };
  console.log("\n---NEW VALUES---\n");
  logMessageEvent(
    {
      event,
      data: messages,
    },
    {
      toolCallLogged: true, // Don't log these extras
      contentLogged: true,
    }
  );
};
