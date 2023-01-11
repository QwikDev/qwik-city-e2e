import { component$, Slot } from "@builder.io/qwik";
import { RequestHandler, loader$ } from "@builder.io/qwik-city";
import { Footer } from "~/components/footer/footer";
import { isUserAuthenticated } from "../auth/auth";

export const rootLoader = loader$(() => {
  return {
    serverTime: new Date().toISOString(),
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
      <Footer />
    </main>
  );
});

export const onRequest: RequestHandler = ({ headers }) => {
  headers.set("x-robots-tag", "noindex, nofollow");
};
