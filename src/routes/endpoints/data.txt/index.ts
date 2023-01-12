import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = ({ request, text }) => {
  text(202, "text " + request.method);
};
