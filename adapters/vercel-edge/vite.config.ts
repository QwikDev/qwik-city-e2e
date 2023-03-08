import { vercelEdgeAdapter } from "@builder.io/qwik-city/adapters/vercel-edge/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["custom-src/entry.vercel-edge.tsx", "@qwik-city-plan"],
      },
      outDir: ".vercel/output/functions/_qwik-city.func",
      minify: false,
    },
    plugins: [
      vercelEdgeAdapter({
        ssg: {
          include: ["/static/*"],
          maxWorkers: 2,
          origin: "https://qwik-city-e2e.vercel.app",
        },
      }),
    ],
  };
});
