import {
  vercelServerlessAdapter,
  FUNCTION_DIRECTORY,
} from "./middleware";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["custom-src/entry.vercel-serverless.tsx", "@qwik-city-plan"],
      },
      outDir: `.vercel/output/functions/${FUNCTION_DIRECTORY}.func`,
      minify: false,
    },
    plugins: [
      vercelServerlessAdapter({
        ssg: {
          include: ["/static/*"],
          maxWorkers: 2,
          origin: "https://qwik-vercel-serverless-for-e2e.vercel.app",
        },
      }),
    ],
  };
});