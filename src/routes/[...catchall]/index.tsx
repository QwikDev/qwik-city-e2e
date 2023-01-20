import { component$ } from "@builder.io/qwik";
import { RequestHandler } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Catchall</h1>
    </div>
  );
});

export const onGet: RequestHandler = ({ url, exit }) => {
  if (url.pathname === "/catchall/") {
    // special case catchall
    return;
  }

  exit();
};
