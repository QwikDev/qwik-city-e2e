import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Dashboard",
};
