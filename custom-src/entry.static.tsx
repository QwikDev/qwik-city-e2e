import express from "express";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import compression from "compression";

// Directories where the static assets are located
const distDir = join(fileURLToPath(import.meta.url), "..", "..", "dist");
const buildDir = join(distDir, "build");
const publicDir = join(fileURLToPath(import.meta.url), "..", "..", "public");

// Allow for dynamic port
const PORT = process.env.PORT ?? 3003;

// Create the express server
// https://expressjs.com/
const app = express();

// Enable gzip compression
app.use(compression());

// Static asset handlers
// https://expressjs.com/en/starter/static-files.html
app.use(`/build`, express.static(buildDir, { immutable: true, maxAge: "1y" }));
app.use(express.static(publicDir));
app.use(express.static(distDir, { redirect: false }));

// Start the express server
app.listen(PORT, () => {
  /* eslint-disable */
  console.log(`Server starter: http://localhost:${PORT}/app/`);
});
