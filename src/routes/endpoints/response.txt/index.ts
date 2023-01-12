import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = ({ send }) => {
  const response = new Response("responsetext", {
    status: 201,
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });

  console.log("response", response.status, response.statusText);
  response.headers.forEach((value, key) => {
    console.log("header", key, value);
  });

  send(response);
};
