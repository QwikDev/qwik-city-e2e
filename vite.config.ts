import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import { qwikReact } from "@builder.io/qwik-react/vite";
export default defineConfig(() => {
    return {
        plugins: [qwikCity(), qwikVite(), qwikReact()],
        preview: {
            headers: {
                "Cache-Control": "public, max-age=600",
            },
        }
    };
});
