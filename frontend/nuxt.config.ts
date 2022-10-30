// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["vuetify/lib/styles/main.sass", "mdi/css/materialdesignicons.min.css"],
  build: {
    transpile: ["vuetify"],
    loaders:  {
      vue: {
         prettify: false
      }
    },
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    /*build: true,
    ssr: false, // enable unstable server-side rendering for development (false by default)
    server: {
      watch: {
        usePolling: true,
      },
    },*/
  }
})
