import { component$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Catchall</h1>
    </>
  );
});

export const onGet: RequestHandler = ({ url, exit }) => {
  if (url.pathname === "/app/catchall/") {
    // special case catchall
    return;
  }

  exit();
};
