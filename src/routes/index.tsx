import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";
import { rootLoader, userLoader } from "./layout";

export default component$(() => {
  const rootData = rootLoader.use();
  const userData = userLoader.use();
  return (
    <>
      <h1>Homepage</h1>
      <p>{rootData.value.serverTime}</p>
      <img src="/endpoints/image.png" />
      <ul>
        {userData.value.isAuthenticated ? (
          <>
            <li>
              <Link href="/dashboard/">Dashboard</Link>
            </li>
            <li>
              <Link href="/sign-out/">Sign out</Link>
            </li>
          </>
        ) : (
          <li>
            <Link href="/sign-in/">Sign In</Link>
          </li>
        )}
      </ul>
    </>
  );
});

export const head: DocumentHead = {
  title: "Homepage",
};
