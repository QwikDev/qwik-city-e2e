import { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({
  getWritableStream,
  headers,
  cacheControl,
}) => {
  const url = 'https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png';
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
