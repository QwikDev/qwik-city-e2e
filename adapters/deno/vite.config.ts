import { nodeServerAdapter } from "@builder.io/qwik-city/adapters/node-server/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["custom-src/entry.express.tsx", "@qwik-city-plan"],
      },
      outDir: ".express",
      minify: false,
    },
    plugins: [
      nodeServerAdapter({
        ssg: {
          include: ["/static/*"],
          origin: "https://express.qwik.dev",
        },
      }),
    ],
  };
});
