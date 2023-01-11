import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Server testing</p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Homepage",
};
