import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    imageService: true,
    devImageService: "sharp",
    imagesConfig: {
      sizes: [500, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      domains: ["via.placeholder.com", "app.atelier-jbp.fr"],
      /*       remotePatterns: [
        {
          protocol: "https",
          hostname: "via.placeholder.com",
          pathname: "/500x500/",
        }, 
      ],*/
    },
  }),
});
