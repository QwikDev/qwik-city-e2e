import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Footer = component$(() => {
  return (
    <footer>
      <hr />
      <ul>
        <li>
          <Link href="/endpoints/">Endpoints</Link>
        </li>
        <li>
          <Link href="/static/">Static</Link>
        </li>
        <li>
          <Link href="/idk/">Root Directory 404</Link>
        </li>
        <li>
          <Link href="/static/idk/">Static Directory 404</Link>
        </li>
        <li>
          <Link href="/catchall/">Catchall</Link>
        </li>
        <li>
          <Link href="/endpoints">No trailing slash - redirected</Link>
        </li>
        <li>
          <Link href="/">Homepage</Link>
        </li>
      </ul>
    </footer>
  );
});
