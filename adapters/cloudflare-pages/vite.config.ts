import { cloudflarePagesAdapter } from "@builder.io/qwik-city/adapters/cloudflare-pages/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["custom-src/entry.cloudflare-pages.tsx", "@qwik-city-plan"],
      },
      minify: false,
    },
    plugins: [
      cloudflarePagesAdapter({
        ssg: {
          include: ["/static/*"],
          origin: "https://qwik-city-e2e.pages.dev",
        },
      }),
    ],
  };
});
