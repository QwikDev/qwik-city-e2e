import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useOriginLoader = routeLoader$(({ url }) => {
  return {
    origin: url.origin,
  };
});

export default component$(() => {
  const originData = useOriginLoader();

  return (
    <>
      <h1>Static</h1>
      <p>
        <span>origin: </span>
        <span data-origin>{originData.value.origin}</span>
      </p>
      <p>{new Date().toISOString()}</p>
      <ul>
        <li>
          <a href="/app/static/rss.xml">Static rss.xml feed</a>
        </li>
        <li>
          <a href="/app/sitemap.xml">sitemap.xml</a>
        </li>
      </ul>
    </>
  );
});

export const head: DocumentHead = {
  title: "Static",
};
