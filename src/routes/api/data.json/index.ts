import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = ({
  request,
  headers,
  query,
  json,
  html,
  send,
  text,
  getWritableStream,
  status,
}) => {
  const format = query.get("format");

  if (format === "csv") {
    status(203);
    headers.set("Content-Type", "text/plain; charset=utf-8");
    const { writable, readable } = new TextEncoderStream();
    readable.pipeTo(getWritableStream());
    const stream = writable.getWriter();
    stream.write(`stream`);
    setTimeout(() => {
      stream.write(`0`);
      setTimeout(() => {
        stream.write(`1`);
        setTimeout(() => {
          stream.write(`2`);
          stream.close();
        }, 100);
      }, 100);
    }, 100);
    return;
  }

  if (format === "text") {
    text(202, format + " " + request.method);
    return;
  }

  if (format === "html") {
    html(201, format + " " + request.method);
    return;
  }

  if (format === "response") {
    try {
      const response = new Response("responsebody", {
        status: 201,
        headers: {
          "content-type": "text/plain; charset=utf-8",
        },
      });
      send(response);
      return;
    } catch (e) {
      console.log(e);
    }
  }

  json(200, {
    timestamp: new Date().toISOString(),
    method: request.method,
    url: request.url,
  });
};
