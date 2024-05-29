import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel({
    imageService: true,
    /*     devImageService: "sharp", */
    imagesConfig: {
      sizes: [500, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      domains: ["via.placeholder.com", "app.atelier-jbp.fr", "localhost:8055"],
      remotePatterns: [
        {
          protocol: "http",
          hostname: "localhost",
          port: "8055",
        },
        {
          protocol: "https",
          hostname: "via.placeholder.com",
        },
      ],
    },
  }),
});
