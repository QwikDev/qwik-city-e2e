import { staticAdapter } from "@builder.io/qwik-city/adapters/static/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["src/entry.static.tsx", "@qwik-city-plan"],
      },
      outDir: ".static",
      minify: false,
    },
    plugins: [
      staticAdapter({
        origin: "https://qwik-city-e2e.static.qwik.dev",
        maxWorkers: 1,
      }),
    ],
  };
});
