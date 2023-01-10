import { action$, RequestHandler } from "@builder.io/qwik-city";
import { signIn, signOut } from "~/auth/auth";

export const onGet: RequestHandler = async ({ redirect, cookie }) => {
  signOut(cookie);
  throw redirect(301, "/");
};
