import { component$ } from "@builder.io/qwik";
import {
  action$,
  DocumentHead,
  Form,
  RequestHandler,
} from "@builder.io/qwik-city";
import { isUserAuthenticated, signIn } from "../../auth/auth";

export const onGet: RequestHandler = async ({ redirect, cookie }) => {
  if (await isUserAuthenticated(cookie)) {
    throw redirect(302, "/dashboard/");
  }
};

export const signinAction = action$(
  async ({ username, password }, { cookie, redirect, fail }) => {
    const result = await signIn(username as string, password as string, cookie);

    if (result.status === "signed-in") {
      throw redirect(301, "/dashboard/");
    }

    return fail(403, {
      message: "Invalid username or password",
    });
  }
);

export const resetPasswordAction = action$(async () => {
  console.warn("resetPasswordAction");
});

export default component$(() => {
  const signIn = signinAction.use();
  const resetPassword = resetPasswordAction.use();

  return (
    <>
      <h1>Sign In</h1>

      <Form action={signIn} data-test="sign-in">
        {signIn.fail?.message && <p style="color:red">{signIn.fail.message}</p>}
        <p>
          <span>Username: </span>
          <input name="username" type="text" autoComplete="username" required />
        </p>
        <p>
          <span>Password: </span>
          <input
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </p>
        <p>
          <button type="submit">Sign In</button>
        </p>
        <p>(Username: qwik, Password: dev)</p>
      </Form>

      <hr />

      <h2>Reset Password</h2>

      <form
        method="post"
        action={resetPassword.actionPath}
        data-test="reset-password"
      >
        <p>
          <span>Email: </span>
          <input name="email" type="text" required />
        </p>
        <p>
          <button data-test-reset-password>Reset Password</button>
        </p>
      </form>
    </>
  );
});

export const head: DocumentHead = {
  title: "Sign In",
};
