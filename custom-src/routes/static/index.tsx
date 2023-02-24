import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Static</h1>
      <p>{new Date().toISOString()}</p>
      <p>
        <a href="/app/static/rss.xml">Static rss.xml feed</a>
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Static",
};
