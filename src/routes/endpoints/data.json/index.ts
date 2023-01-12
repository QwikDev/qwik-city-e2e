import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = ({ request, json }) => {
  json(200, {
    timestamp: new Date().toISOString(),
    method: request.method,
    url: request.url,
  });
};
