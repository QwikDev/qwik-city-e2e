import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import { qwikReact } from "@builder.io/qwik-react/vite";
import { macroPlugin } from "@builder.io/vite-plugin-macro";

export default defineConfig(() => {
  return {
    base: "/app/",
    optimizeDeps: {
      include: ["@mui/material"],
    },
    plugins: [
      macroPlugin({ preset: "pandacss" }),
      qwikCity({
        routesDir: "custom-src/routes",
      }),
      qwikVite({
        srcDir: "custom-src",
      }),
      qwikReact(),
    ],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
