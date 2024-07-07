import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://lzadhito.github.io",
  base: "lzadhito",
  integrations: [mdx(), tailwind(), solidJs()],
});
