import { nodeServerAdapter } from "@builder.io/qwik-city/adapters/node-server/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["custom-src/entry.fastify.tsx", "@qwik-city-plan"],
      },
      outDir: ".fastify",
      minify: false,
    },
    plugins: [
      nodeServerAdapter({
        name: "fastify-server",
        ssg: {
          include: ["/static/*"],
          origin: "https://fastify.qwik.dev",
        },
      }),
    ],
  };
});
