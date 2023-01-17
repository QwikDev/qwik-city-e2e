import {
  component$,
  Slot,
  useClientEffect$,
  useStyles$,
} from "@builder.io/qwik";
import { RequestHandler, loader$ } from "@builder.io/qwik-city";
import { Footer } from "../components/footer/footer";
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
  useStyles$(`
    html[data-app] body:before { 
      content: "";
      position: fixed;
      top: 10px;
      right: 10px;
      padding: 3px;
      border-radius: 5px;
      font-size:10px;
      min-width: 30px;
      text-align: center;
      font-family: monospace;
    }
    html[data-app="spa"] body:before { 
      content: "SPA";
      background: #0000FF40;
    }
    html[data-app="mpa"] body:before { 
      content: "MPA";
      background: #00FF0040;
    }
  `);

  useClientEffect$(() => {
    document.documentElement.dataset.app = "spa";
  });

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
