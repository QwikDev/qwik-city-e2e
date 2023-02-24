import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import { qwikReact } from "@builder.io/qwik-react/vite";

export default defineConfig(() => {
  return {
    base: "/app/",
    build: {
      outDir: "dist/app",
    },
    optimizeDeps: {
      include: ["@mui/material"],
    },
    plugins: [
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
