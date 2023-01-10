import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { userLoader } from "../../routes/layout";

export const Menu = component$(() => {
  const userData = userLoader.use();

  return (
    <footer>
      <Link href="/">Homepage</Link>
    </footer>
  );
});
