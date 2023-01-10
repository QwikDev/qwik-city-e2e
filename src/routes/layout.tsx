import { component$, Slot } from "@builder.io/qwik";
import { RequestHandler, loader$ } from "@builder.io/qwik-city";
import { Menu } from "~/components/menu/menu";
import { isUserAuthenticated } from "../auth/auth";

export const rootLoader = loader$(() => {
  return {
    serverTime: new Date().toISOString(),
    nodeVersion: process.version,
  };
});

export const userLoader = loader$(async ({ cookie }) => {
  return {
    isAuthenticated: await isUserAuthenticated(cookie),
  };
});

export default component$(() => {
  return (
    <main>
      <Slot />
      <Menu />
    </main>
  );
});

export const onRequest: RequestHandler = ({ headers }) => {
  headers.set("X-Robots-Tag", "noindex, nofollow");
};
