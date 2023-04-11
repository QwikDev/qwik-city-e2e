import { component$ } from "@builder.io/qwik";
import { StaticGenerateHandler, useLocation } from "@builder.io/qwik-city";

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return {
    params: [
      {
        doc: "/getting-started",
      },
      {
        doc: "/pages/file-structure",
      },
    ],
  };
};

const DocPage = component$(() => {
  const url = useLocation().url;
  return <h1>{url.pathname}</h1>;
});

export default DocPage;
