import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link, loader$ } from "@builder.io/qwik-city";

export const getEnv = loader$(({env}) => {
  return {
    platform: env.get('PLATFORM_NAME'),
    importMetaEnv: import.meta.env.VITE_HELLO_WORLD,
    processEnv: process.env.HELLO_WORLD,
  }
});

export default component$(() => {
  const env = getEnv.use();
  return (
    <>
      <h1>Environment variables</h1>
      <ul>
        <li>env.value.platform: {env.value.platform}</li>
        <li>env.value.importMetaEnv: {env.value.importMetaEnv}</li>
        <li>env.value.processEnv: {env.value.processEnv}</li>
        <li>import.meta.env.VITE_HELLO_WORLD: {import.meta.env.VITE_HELLO_WORLD}</li>
        <li>process.env.HELLO_WORLD: {process.env.HELLO_WORLD}</li>
      </ul>
    </>
  );
});

export const head: DocumentHead = {
  title: "Homepage",
};
