import { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({
  getWritableStream,
  headers,
  cacheControl,
  text,
}) => {
  // image from this repo's README.md
  const url =
    "https://user-images.githubusercontent.com/452425/215131129-0ae8d7d8-3612-4fca-bdba-42137d8da75c.png";
  const req = await fetch(url);

  if (!req.ok) {
    text(req.status, `${req.status}`);
    return;
  }

  req.headers.forEach((value, key) => {
    headers.append(key, value);
  });
  cacheControl({
    maxAge: 10,
    public: true,
    staleWhileRevalidate: 10,
  });
  await req.body?.pipeTo(getWritableStream());
};
