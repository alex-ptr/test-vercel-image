import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    imageService: true,
    devImageService: "sharp",
    imagesConfig: {
      //domains: ["localhost", "placeholder.com"],
      sizes: [500, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "^via\\.placeholder\\.com$",
          pathname: "^/500x500/.*$",
        },
        {
          protocol: "http",
          hostname: "localhost",
          port: 8055,
        },
        ,
        {
          protocol: "https",
          hostname: "app.atelier-jbp.fr",
        },
      ],
    },
  }),
});
