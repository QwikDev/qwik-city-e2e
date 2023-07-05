import { vercelServerlessAdapter } from "@builder.io/qwik-city/adapters/vercel-serverless/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["custom-src/entry.vercel-serverless.tsx", "@qwik-city-plan"],
      },
      outDir: ".vercel/output/functions/_qwik-city.func",
      minify: false,
    },
    plugins: [
      vercelServerlessAdapter({
        ssg: {
          include: ["/static/*"],
          maxWorkers: 2,
          origin: "https://qwik-city-build-serverless.vercel.app",
        },
      }),
    ],
  };
});
