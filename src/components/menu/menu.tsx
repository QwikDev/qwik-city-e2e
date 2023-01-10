import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { userLoader } from "../../routes/layout";

export const Menu = component$(() => {
  const userData = userLoader.use();

  return (
    <ul data-test="menu">
      {userData.value.isAuthenticated ? (
        <>
          <li data-test="menu-dashboard">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li data-test="menu-sign-out">
            <Link href="/sign-out">Sign out</Link>
          </li>
        </>
      ) : (
        <li data-test="menu-sign-in">
          <Link href="/sign-in">Sign In</Link>
        </li>
      )}
      <li data-test="menu-homepage">
        <Link href="/">Homepage</Link>
      </li>
    </ul>
  );
});
