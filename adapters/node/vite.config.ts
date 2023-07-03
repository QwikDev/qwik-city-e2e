import { nodeServerAdapter } from "@builder.io/qwik-city/adapters/node-server/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["custom-src/entry.node.tsx", "@qwik-city-plan"],
      },
      outDir: ".node",
      minify: false,
    },
    plugins: [
      nodeServerAdapter({
        ssg: {
          include: ["/static/*"],
          origin: "https://node.qwik.dev",
        },
      }),
    ],
  };
});
