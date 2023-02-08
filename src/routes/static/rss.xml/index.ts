import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ headers, send }) => {
  headers.set("Content-Type", "text/xml");

  const body = `<?xml version="1.0" encoding="windows-1252"?>
    <rss version="2.0">
      <channel>
        <title>My Feed</title>
        <description>RSS is fascinating</description>
      </channel>
    </rss>
  `;

  send(200, body);
};
