// packages/qwik-city/middleware/netlify-edge/index.ts
import {
  mergeHeadersCookies,
  requestHandler,
} from "../request-handler/index.mjs";
import { getNotFound } from "@qwik-city-not-found-paths";
import { isStaticPath } from "@qwik-city-static-paths";
function createQwikCity(opts) {
  console.log("createQwikCity(opts)", opts);

  async function onNetlifyEdgeRequest(request, context) {
    try {
      const url = new URL(request.url);

      if (
        isStaticPath(request.method, url) ||
        url.pathname.startsWith("/.netlify")
      ) {
        // console.log("static", url.href);
        return context.next();
      }

      console.log("ssr request", url.href);

      const serverRequestEv = {
        mode: "server",
        locale: void 0,
        url,
        env: Deno.env,
        request,
        getWritableStream: (status, headers, cookies, resolve) => {
          try {
            console.log("getWritableStream", url.href);
            const { readable, writable } = new TransformStream();
            const response = new Response(readable, {
              status,
              headers: mergeHeadersCookies(headers, cookies),
            });
            console.log("getWritableStream resolve", url.href);
            resolve(response);
            return writable;
          } catch (e) {
            console.error("getWritableStream error", String(e));
          }
        },
        platform: context,
      };
      const handledResponse = await requestHandler(serverRequestEv, opts);
      if (handledResponse) {
        console.log("handledResponse", url.href);
        const response = await handledResponse.response;
        if (response) {
          return response;
        }
        console.log("handledResponse no response", url.href);
      }
      console.log("404", url.href);
      const notFoundHtml = getNotFound(url.pathname);
      return new Response(notFoundHtml, {
        status: 404,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "X-Not-Found": url.pathname,
        },
      });
    } catch (e) {
      console.error(e);
      return new Response(String(e || "Error"), {
        status: 500,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "X-Error": "netlify-edge",
        },
      });
    }
  }
  return onNetlifyEdgeRequest;
}
export { createQwikCity };
