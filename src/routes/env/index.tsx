import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link, loader$ } from "@builder.io/qwik-city";

export const getEnv = loader$(({env}) => {
  return {
    platform: env.get('PLATFORM_NAME'),
    importMetaEnv: import.meta.env.VITE_HELLO_WORLD,
  }
});

export default component$(() => {
  const env = getEnv.use();
  const importMeta = import.meta.env.VITE_HELLO_WORLD;
  return (
    <>
      <h1>Environment variables</h1>
      <ul>
        <li>env.value.platform: {env.value.platform}</li>
        <li>env.value.importMetaEnv: {env.value.importMetaEnv}</li>
        <li>importmeta.env.VITE_HELLO_WORLD: {importMeta}</li>
      </ul>
    </>
  );
});

export const head: DocumentHead = {
  title: "Homepage",
};
