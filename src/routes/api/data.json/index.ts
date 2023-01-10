import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = ({
  request,
  headers,
  query,
  json,
  html,
  send,
  getWritableStream,
  status,
}) => {
  const format = query.get("format");

  if (format === "csv") {
    status(203);
    headers.set("Content-Type", "text/plain");
    const { writable, readable } = new TextEncoderStream();
    readable.pipeTo(getWritableStream());
    const stream = writable.getWriter();
    setTimeout(() => {
      stream.write(csvLine(0));
      setTimeout(() => {
        stream.write(csvLine(1));
        setTimeout(() => {
          stream.write(csvLine(2));
          stream.close();
        }, 500);
      }, 500);
    }, 500);
    return;
  }

  if (format === "text") {
    headers.set("Content-Type", "text/plain");
    send(202, format + " " + request.method + " " + new Date().toISOString());
    return;
  }

  if (format === "html") {
    html(201, format + " " + request.method + " " + new Date().toISOString());
    return;
  }

  json(200, {
    timestamp: new Date().toISOString(),
    method: request.method,
    url: request.url,
  });
};

function csvLine(num: number) {
  let l = String(num);
  while (l.length < 18000) {
    l += "," + new Date().toISOString();
  }
  return l + "\n";
}
