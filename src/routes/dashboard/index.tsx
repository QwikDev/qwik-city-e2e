import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link href="/sign-out/">Sign out</Link>
        </li>
      </ul>
    </>
  );
});

export const head: DocumentHead = {
  title: "Dashboard",
};
