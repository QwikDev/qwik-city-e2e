import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = ({ query, redirect }) => {
  const url = query.get("url");
  throw redirect(301, url!);
};
