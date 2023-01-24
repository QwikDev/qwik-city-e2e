import { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({
  request,
  getWritableStream,
  headers,
  cacheControl,
}) => {
  const url = new URL("/example.png", request.url);
  const req = await fetch(url);
  req.headers.forEach((value, key) => {
    headers.append(key, value);
  });
  cacheControl({
    maxAge: 60 * 60 * 24 * 365,
    public: true,
    immutable: true,
    staleWhileRevalidate: 60 * 60 * 24 * 365,
  });
  await req.body?.pipeTo(getWritableStream());
};
