// @ts-check
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    // Static Home page: transform any images at build time. Do not provision
    // Cloudflare Images or session KV for this marketing site.
    imageService: "compile",
  }),
  session: false,
  fonts: [
    {
      name: "Inter",
      cssVariable: "--font-inter",
      provider: fontProviders.fontsource(),
      weights: [400, 500, 600],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
