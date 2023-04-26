// import { createQwikCity } from "@builder.io/qwik-city/middleware/node";
// import qwikCityPlan from "@qwik-city-plan";
// import render from "./entry.ssr";
// import express from "express";
// import { fileURLToPath } from "node:url";
// import { join } from "node:path";
// import { manifest } from "@qwik-client-manifest";

// import compression from "compression";

// Allow for dynamic port
const port = Number(Deno.env.get("PORT") ?? 3009);

import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

console.log(`Server starter: http://localhost:${port}/app/`);

await app.listen({ port });

// // Directories where the static assets are located
// const distDir = join(fileURLToPath(import.meta.url), "..", "..", "dist");
// const buildDir = join(distDir, "build");
// const publicDir = join(fileURLToPath(import.meta.url), "..", "..", "public");

// // Allow for dynamic port
// const PORT = process.env.PORT ?? 3009;

// // Create the Qwik City express middleware
// const { router, notFound, staticFile } = createQwikCity({
//   render,
//   qwikCityPlan,
//   manifest,
// });

// // Create the express server
// // https://expressjs.com/
// const app = express();

// // Enable gzip compression
// // app.use(compression());

// // Static asset handlers
// // https://expressjs.com/en/starter/static-files.html
// app.use(`/build`, express.static(buildDir, { immutable: true, maxAge: "1y" }));
// app.use(express.static(publicDir));
// app.use(express.static(distDir, { redirect: false }));

// // Use Qwik City's page and endpoint request handler
// app.use(router);

// // Use Qwik City's 404 handler
// app.use(notFound);

// // Start the express server
// app.listen(PORT, () => {
//   /* eslint-disable */
//   console.log(`Server starter: http://localhost:${PORT}/app/`);
// });
