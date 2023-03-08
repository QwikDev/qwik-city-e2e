import { netifyEdgeAdapter } from "@builder.io/qwik-city/adapters/netlify-edge/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["custom-src/entry.netlify-edge.tsx", "@qwik-city-plan"],
      },
      outDir: ".netlify/edge-functions/entry.netlify-edge",
      minify: false,
    },
    plugins: [
      netifyEdgeAdapter({
        ssg: {
          include: ["/static/*"],
          origin: "https://qwik-city-e2e.netlify.app",
        },
      }),
    ],
  };
});
