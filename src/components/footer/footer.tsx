import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { userLoader } from "../../routes/layout";

export const Footer = component$(() => {
  const userData = userLoader.use();

  return (
    <footer>
      <hr />
      <p>
        {userData.value.isAuthenticated ? (
          <>
            <Link href="/dashboard" data-test="footer-dashboard">
              Dashboard
            </Link>
            <span> - </span>
            <Link href="/sign-out" data-test="footer-sign-out">
              Sign out
            </Link>
          </>
        ) : (
          <Link href="/sign-in/" data-test="footer-sign-in">
            Sign In
          </Link>
        )}
        <span> - </span>
        <Link href="/endpoints/" data-test="footer-homepage">
          Endpoints
        </Link>
        <span> - </span>
        <Link href="/static/" data-test="footer-static">
          Static
        </Link>
        <span> - </span>
        <Link href="/" data-test="footer-homepage">
          Homepage
        </Link>
      </p>
    </footer>
  );
});
