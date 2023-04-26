import { createQwikCity } from "/Users/adambradley/git/qwik/packages/qwik-city/lib/middleware/deno/index";
import qwikCityPlan from "@qwik-city-plan";
import { manifest } from "@qwik-client-manifest";
import render from "./entry.ssr";

const port = Number(Deno.env.get("PORT") ?? 3009);

const qwikCity = createQwikCity({ render, qwikCityPlan, manifest });

const server = Deno.listen({ port });

console.log(`Server starter: http://localhost:${port}/app/`);

for await (const conn of server) {
  serveHttp(conn);
}

async function serveHttp(conn) {
  const httpConn = Deno.serveHttp(conn);

  for await (const requestEvent of httpConn) {
    const response = await qwikCity(requestEvent.request);
    requestEvent.respondWith(response);
  }
}

declare const Deno: any;
