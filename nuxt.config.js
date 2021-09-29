export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Qlip - Africa’s No.1 cross-chain NFT platform",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "description",
        name: "description",
        content:
          "QLIP provides value for creators, collectors, mainstream artists and decentralized store users.",
      },
      { hid: "author", name: "author", content: "Qlip" },
      { hid: "theme-color", name: "theme-color", content: "#2A2A3C" },
      {
        hid: "msapplication-navbutton-color",
        name: "msapplication-navbutton-color",
        content: "#2A2A3C",
      },
      {
        hid: "apple-mobile-web-app-status-bar-style",
        name: "apple-mobile-web-app-status-bar-style",
        content: "#2A2A3C",
      },
      { property: "og:title", name: "og:title", content: "Qlip" },
      { property: "og:type", name: "og:type", content: "website" },
      { property: "og:site_name", name: "og:site_name", content: "Qlip" },
      {
        property: "og:description",
        name: "og:description",
        content:
          "QLIP provides value for creators, collectors, mainstream artists and decentralized store users.",
      },
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/icon.png" },
      { rel: "shortcut icon", href: "/icon.png" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "./assets/fonts/DM Sans/stylesheet.css",
    "./assets/fonts/Gilroy/stylesheet.css",
    "./assets/fonts/Unione Typeface/stylesheet.css",
    "./scss/style.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    // https://google-fonts.nuxtjs.org/setup
    // "@nuxtjs/google-fonts",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
      name: "Qlip - Africa’s No.1 cross-chain NFT platform",
      short_name: "Qlip",
      description:
        "QLIP provides value for creators, collectors, mainstream artists and decentralized store users.",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
