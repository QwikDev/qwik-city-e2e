import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = ({ send }) => {
  const response = new Response("responsetext", {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
  send(response);
};
