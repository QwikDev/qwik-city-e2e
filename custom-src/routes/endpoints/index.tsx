import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Endpoints</h1>
      <ul>
        <li>
          <a href="/app/endpoints/data.html">/endpoints/data.html</a>
        </li>
        <li>
          <a href="/app/endpoints/data.json">/endpoints/data.json</a>
        </li>
        <li>
          <a href="/app/endpoints/data.txt">/endpoints/data.txt</a>
        </li>
        <li>
          <a href="/app/endpoints/image.png">/endpoints/image.png</a>
        </li>
        <li>
          <a href="/app/endpoints/redirect?url=/">/endpoints/redirect?url=/</a>
        </li>
        <li>
          <a href="/app/endpoints/response.txt">/endpoints/response.txt</a>
        </li>
        <li>
          <a href="/app/endpoints/stream.txt">/endpoints/stream.txt</a>
        </li>
      </ul>
      <p>
        <a href="/app/endpoints/image.png" target="_blank">
          <img src={`/app/endpoints/image.png?v=${Math.random()}`} width="256" height="79" />
        </a>
      </p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Endpoints",
};
