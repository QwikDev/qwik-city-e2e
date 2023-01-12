# Qwik City E2E Test App 🌃

Commits to this repo will trigger each [workflow](https://github.com/BuilderIO/qwik-city-e2e/tree/main/.github/workflows), which will build and test on each server. The Node workflow tests the dev, preview and express servers.

The [package.json](https://github.com/BuilderIO/qwik-city-e2e/blob/main/package.json) npm installs the build artifacts committed to [qwik-build](https://github.com/BuilderIO/qwik-build) and [qwik-city-build](https://github.com/BuilderIO/qwik-city-build). Update the commit hash in version for the `dependencies` of `@builder.io/qwik` and `@builder.io/qwik-city`.

## Node Servers

### Dev

    npm run dev
    http://127.0.0.1:3000/

### Preview

    npm run build.client
    npm run build.preview
    npm run serve.express
    http://127.0.0.1:3001/

### Express

    npm run build.client
    npm run build.preview
    npm run serve.preview
    http://127.0.0.1:3002/

## External Servers

### Azure

    todo

### Cloudflare Pages

    todo

### Netlify Edge

    todo

### Vercel Edge

https://qwik-city-e2e.vercel.app/
