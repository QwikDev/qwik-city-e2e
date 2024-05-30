import {
  createQwikCity,
  type PlatformVercelServerless,
} from "../adapters/vercel-serverless/index";
import qwikCityPlan from "@qwik-city-plan";
import { manifest } from "@qwik-client-manifest";
import render from "./entry.ssr";

declare global {
  interface QwikCityPlatform extends PlatformVercelServerless {}
}

export default createQwikCity({
  render,
  qwikCityPlan,
  manifest,
});