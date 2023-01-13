import { Locator, Page, Request, Response } from "@playwright/test";

export async function appNavigationClick(args: {
  page: Page;
  clickElm: Locator;
  waitForPathResponse: string;
}) {
  const result: AppNavigationClickResult = {
    app: process.env.APP!,
    status: 0,
    headers: {} as { [key: string]: string },
    url: null as any,
    method: "",
  };

  const nav = new Promise<void>((resolve, reject) => {
    let requestTimeout: NodeJS.Timeout;
    let responseTimeout: NodeJS.Timeout;

    const requestListener = (request: Request) => {
      result.url = new URL(request.url());

      if (isPagePath(result.url, args.waitForPathResponse)) {
        result.method = request.method();
        clearTimeout(requestTimeout);
        args.page.removeListener("request", requestListener);
      }
    };
    args.page.addListener("request", requestListener);

    requestTimeout = setTimeout(() => {
      args.page.removeListener("request", requestListener);
      args.page.removeListener("response", responseListener);
      clearTimeout(responseTimeout);
      reject(new Error(`Request timed out: ${args.waitForPathResponse}`));
    }, 15000);

    const responseListener = (response: Response) => {
      const responseUrl = new URL(response.url());

      if (isPagePath(responseUrl, args.waitForPathResponse)) {
        clearTimeout(responseTimeout);
        args.page.removeListener("response", responseListener);

        result.status = response.status();
        result.headers = response.headers();
        setTimeout(resolve, 500);
      }
    };
    args.page.addListener("response", responseListener);

    responseTimeout = setTimeout(() => {
      args.page.removeListener("response", responseListener);
      reject(new Error(`Response timed out: ${args.waitForPathResponse}`));
    }, 20000);
  });

  await Promise.all([nav, args.clickElm.click()]);

  return result;
}

function isPagePath(request: URL, expectedPathname: string) {
  if (expectedPathname === request.pathname) {
    // MPA
    return true;
  }

  if (request.pathname.startsWith(expectedPathname)) {
    if (request.pathname.includes("q-data.json")) {
      // SPA
      return true;
    }
  }
  return false;
}

interface AppNavigationClickResult {
  app: string;
  status: number;
  headers: { [key: string]: string };
  url: URL;
  method: string;
}
