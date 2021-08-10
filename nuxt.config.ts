import { NuxtConfig } from "@nuxt/types";

export default {
  /* ビルド設定 */
  components: true,
  server: {
    host: "0.0.0.0"
  },
  build: {
    babel: {
      plugins: [["@babel/plugin-proposal-private-property-in-object", { loose: true }]]
    }
  },
  buildModules: ["@nuxt/typescript-build"],
  plugins: [],

  /* ページ設定 */
  head: {
    title: "Nuxt.js x TypeScript",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  },
  css: [],

  /* モジュール設定 */
  modules: []
} as NuxtConfig;
