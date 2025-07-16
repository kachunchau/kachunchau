import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
  image: {
    responsiveStyles: true,
    layout: "constrained",
  },
  experimental: {
    fonts: [
      {
        name: "Bricolage Grotesque",
        cssVariable: "--font-bricolage-grotesque",
        provider: fontProviders.fontsource(),
        weights: [300, 600],
        fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
      },
    ],
  },
});
