# Qwik City E2E Test App 🌃⚡️

![Qwik Logo](https://user-images.githubusercontent.com/452425/215131129-0ae8d7d8-3612-4fca-bdba-42137d8da75c.png)

Commits to this repo will trigger each [workflow](https://github.com/BuilderIO/qwik-city-e2e/tree/main/.github/workflows), which will build and test on each server. The Node workflow tests the `dev`, `preview` and `express` Nodejs servers.

The [package.json](https://github.com/BuilderIO/qwik-city-e2e/blob/main/package.json) pnpm installs the build artifacts committed to [qwik-build](https://github.com/BuilderIO/qwik-build) and [qwik-city-build](https://github.com/BuilderIO/qwik-city-build). Update the commit hash in version for the `dependencies` of `@builder.io/qwik` and `@builder.io/qwik-city`.

## External Servers

### Azure SWA

https://blue-smoke-0a7cdfe10.2.azurestaticapps.net/app/

### Cloudflare Pages

https://qwik-city-e2e.pages.dev/app/

### Fastly

https://qwik-city-e2e.edgecompute.app/app/

### Netlify Edge

https://qwik-city-e2e.netlify.app/app/

### Vercel Edge

https://qwik-city-e2e.vercel.app/app/

### Vercel Serverless

https://qwik-city-build-serverless.vercel.app/app/

## Node Servers

### Dev

    pnpm dev
    http://127.0.0.1:3000/app/

### Preview

    pnpm build.preview
    pnpm serve.preview
    http://127.0.0.1:3001/app/

### Express

    pnpm build.express
    pnpm serve.express
    http://127.0.0.1:3002/app/

## Fastly JS Compute

Fastly's [CLI](https://github.com/fastly/cli) can be used to preview a production build locally. To start a local server, run:

```
pnpm serve
```

Then visit [http://localhost:7676/](http://localhost:7676/)

### Deployments

[Fastly's JS Compute](https://js-compute-reference-docs.edgecompute.app/) projects are deployable through their [CLI](https://github.com/fastly/cli).

If you don't already have an account, then [create a Fastly account here](https://www.fastly.com/signup/). Next go to your dashboard and follow the [Fastly deployment guide](https://developer.fastly.com/learning/compute#deploy-to-a-fastly-service).
