import { expressAdapter } from "@builder.io/qwik-city/adapters/express/vite";
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
      expressAdapter({
        ssg: {
          include: ["/static/*"],
        },
      }),
    ],
  };
});
