import { denoServerAdapter } from "@builder.io/qwik-city/adapters/deno-server/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["custom-src/entry.deno.tsx", "@qwik-city-plan"],
      },
      outDir: ".deno",
      minify: false,
    },
    plugins: [
      denoServerAdapter({
        ssg: {
          include: ["/static/*"],
          origin: "https://deno.qwik.dev",
        },
      }),
    ],
  };
});
