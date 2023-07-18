import { createQwikCity } from "@builder.io/qwik-city/middleware/node";
import qwikCityPlan from "@qwik-city-plan";
import { manifest } from "@qwik-client-manifest";
import render from "./entry.ssr";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const { router, notFound, staticFile } = createQwikCity({
  render,
  qwikCityPlan,
  manifest,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  staticFile(req, res, () => {
    router(req, res, () => {
      notFound(req, res, () => {
        res.status(400);
      });
    });
  });
}
