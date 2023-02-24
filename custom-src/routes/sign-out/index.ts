import { RequestHandler } from "@builder.io/qwik-city";
import { AUTHTOKEN_COOKIE_NAME, USER_COOKIE_NAME } from "../../auth/auth";

export const onGet: RequestHandler = async ({ redirect, cookie }) => {
  cookie.delete(AUTHTOKEN_COOKIE_NAME, { path: "/" });
  cookie.delete(USER_COOKIE_NAME, { path: "/" });
  throw redirect(301, "/app/");
};
