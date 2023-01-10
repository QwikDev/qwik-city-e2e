import { component$ } from "@builder.io/qwik";
import { action$, DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import { isUserAuthenticated, signIn } from "~/auth/auth";

export const onGet: RequestHandler = async ({ redirect, cookie }) => {
  if (await isUserAuthenticated(cookie)) {
    throw redirect(302, "/dashboard/");
  }
};

export const signinAction = action$(
  async (formData, { cookie, redirect, fail }) => {
    const result = await signIn(formData, cookie);

    if (result.status === "signed-in") {
      throw redirect(301, "/dashboard/");
    }

    return fail(403, {
      message: "Invalid username or password",
    });
  }
);

export default component$(() => {
  return (
    <>
      <h1>Sign In</h1>

      <form data-test="sign-in">
        <p>
          <span>Username:</span>
          <input name="sign-in-username" />
        </p>
        <p>
          <span>Password:</span>
          <input name="sign-in-password" type="password" />
        </p>
        <p>
          <button data-test="sign-in">Sign In</button>
        </p>
        <p>(Username: qwik, Password: div)</p>
      </form>

      <hr />
    </>
  );
});

export const head: DocumentHead = {
  title: "Sign In",
};
