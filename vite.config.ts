import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import { qwikReact } from "@builder.io/qwik-react/vite";

export default defineConfig(() => {
  return {
    base: "/app/",
    optimizeDeps: {
      include: ["@mui/material"],
    },
    plugins: [
      qwikCity({
        routesDir: "custom-src/routes",
      }),
      qwikVite({
        srcDir: "custom-src",
        client: {
          outDir: "dist/app",
        },
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
