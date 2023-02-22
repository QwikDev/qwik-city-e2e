import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Root Directory 404</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Root Directory 404",
};
