import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Footer = component$(() => {
  return (
    <footer>
      <hr />
      <ul>
        <li>
          <Link href="/app/env/">Env</Link>
        </li>
        <li>
          <Link href="/app/endpoints/">Endpoints</Link>
        </li>
        <li>
          <Link href="/app/media/">Media</Link>
        </li>
        <li>
          <Link href="/app/static/">Static</Link>
        </li>
        <li>
          <Link href="/app/idk/">Root Directory 404</Link>
        </li>
        <li>
          <Link href="/app/static/idk/">Static Directory 404</Link>
        </li>
        <li>
          <a href="/errors/component/">Errors Component</a>
        </li>
        <li>
          <a href="/errors/loader/">Errors Loader</a>
        </li>
        <li>
          <Link href="/app/functions/">Functions</Link>
        </li>
        <li>
          <Link href="/app/catchall/">Catchall</Link>
        </li>
        <li>
          <Link href="/app/endpoints">No trailing slash - redirected</Link>
        </li>
        <li>
          <Link href="/app/react/">Qwik React</Link>
        <li>
          <Link href="/app/styling">Styling</Link>
        </li>
        </li>
        <li>
          <Link href="/app/">Homepage</Link>
        </li>
      </ul>
    </footer>
  );
});
