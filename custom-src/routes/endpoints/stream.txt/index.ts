import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = async ({
  headers,
  getWritableStream,
  status,
}) => {
  status(203);
  headers.set("Content-Type", "text/plain; charset=utf-8");
  const { writable, readable } = new TextEncoderStream();
  readable.pipeTo(getWritableStream());
  const stream = writable.getWriter();

  await stream.write(`stream`);
  setTimeout(async () => {
    await stream.write(`0`);
    setTimeout(async () => {
      await stream.write(`1`);
      setTimeout(async () => {
        await stream.write(`2`);
        await stream.close();
      }, 100);
    }, 100);
  }, 100);
};
