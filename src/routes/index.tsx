import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { rootLoader } from "./layout";

export default component$(() => {
  const rootData = rootLoader.use();
  return (
    <div>
      <h1>Homepage</h1>
      <p>{rootData.value.serverTime}</p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Homepage",
};
