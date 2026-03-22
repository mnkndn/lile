import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://mnkndn.github.io",
  integrations: [tailwind()],
});
