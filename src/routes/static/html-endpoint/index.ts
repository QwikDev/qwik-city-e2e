import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = ({ html }) => {
  html(200, "html-endpoint");
};
