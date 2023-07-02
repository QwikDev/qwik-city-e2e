import {
  component$,
  Slot,
  useVisibleTask$,
  useStyles$,
} from "@builder.io/qwik";
import type { RequestHandler} from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Footer } from "../components/footer/footer";
import { isUserAuthenticated } from "../auth/auth";

export const useRootLoader = routeLoader$(({url}) => {
  return {
    serverTime: new Date().toISOString(),
    origin: url.origin,
  };
});

export const userLoader = routeLoader$(async ({ cookie }) => {
  return {
    isAuthenticated: await isUserAuthenticated(cookie),
  };
});

export default component$(() => {
  useStyles$(`
    body {
      margin: 0;
    }
    main {
      padding: 20px;
    }
    html[data-app] body:before {
      content: "";
      position: fixed;
      top: 20px;
      right: 10px;
      padding: 3px;
      border-radius: 5px;
      font-size:14px;
      min-width: 50px;
      text-align: center;
      font-family: monospace;
    }
    html[data-app="spa"] body:before {
      content: "SPA";
      background: #0000FF50;
    }
    html[data-app="spa"] body {
      border-top: 10px solid #0000FF50;
    }
    html[data-app="mpa"] body:before {
      content: "MPA";
      background: #00FF0070;
    }
    html[data-app="mpa"] body {
      border-top: 10px solid #00FF0070;
    }
  `);

  useVisibleTask$(() => {
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
