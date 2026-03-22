import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://mnkndn.github.io",
  base: "/lile",
  integrations: [tailwind()],
});
