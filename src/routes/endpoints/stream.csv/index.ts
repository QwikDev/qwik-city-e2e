import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = ({
  headers,
  getWritableStream,
  status,
}) => {
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
};
