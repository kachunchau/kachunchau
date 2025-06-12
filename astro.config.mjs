import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import yeskunallumami from "@yeskunall/astro-umami";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx(),
    yeskunallumami({
      id: "f8499b20-2a06-48e8-a865-0fa6785a2e87",
    }),
  ],
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
