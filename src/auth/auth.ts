/**
 * Simple Auth For Testing Only!!!
 */
import type { Cookie } from "@builder.io/qwik-city";

export const isUserAuthenticated = async (cookie: Cookie) => {
  return cookie.has(AUTHTOKEN_COOKIE_NAME);
};

export const AUTHTOKEN_COOKIE_NAME = "qwikcity-e2e-auth-token";
export const USER_COOKIE_NAME = "user-id";
