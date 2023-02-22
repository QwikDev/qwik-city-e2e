import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = ({ request, html }) => {
  html(201, "html " + request.method);
};
