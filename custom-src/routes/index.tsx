import { component$ } from "@builder.io/qwik";
import type { DocumentHead} from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { useRootLoader, userLoader } from "./layout";

export default component$(() => {
  const rootData = useRootLoader();
  const userData = userLoader();
  return (
    <>
      <h1>Homepage</h1>
      <p>{rootData.value.serverTime}</p>
      <ul>
        {userData.value.isAuthenticated ? (
          <>
            <li>
              <Link href="/app/dashboard/">Dashboard</Link>
            </li>
            <li>
              <Link href="/app/sign-out/">Sign out</Link>
            </li>
            <li>
              <Link href="/app/sign-in/">
                Sign In (should redirect to dashboard)
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link href="/app/sign-in/">Sign In</Link>
          </li>
        )}
      </ul>
    </>
  );
});

export const head: DocumentHead = {
  title: "Homepage",
};
