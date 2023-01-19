import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Custom 404</h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Custom 404",
};
