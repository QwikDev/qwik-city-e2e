import { component$ } from "@builder.io/qwik";
import { DocumentHead, loader$ } from "@builder.io/qwik-city";

export const getEnv = loader$(({ env }) => {
  console.log('process.env', process.env);
  return {
    platform: env.get("PLATFORM_NAME"),
    importMetaEnv: import.meta.env.VITE_HELLO_WORLD,
  };
});

export default component$(() => {
  const env = getEnv.use();
  const importMeta = import.meta.env.VITE_HELLO_WORLD;
  return (
    <>
      <h1>Environment variables</h1>
      <ul>
        <li>env.value.platform: <span id="env-value-platform">{env.value.platform}</span></li>
        <li>env.value.importMetaEnv: <span id="env-value-importMetaEnv">{env.value.importMetaEnv}</span></li>
        <li>importmeta.env.VITE_HELLO_WORLD: <span id="importmeta-env-VITE_HELLO_WORLD">{importMeta}</span></li>
      </ul>
    </>
  );
});

export const head: DocumentHead = {
  title: "Homepage",
};
