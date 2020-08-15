export default {
  mode: 'universal',

  target: 'server',

  head: {
    title: 'Nuxt boilerplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt boilerplate',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [
    '~/plugins/click-outside',
    '~/plugins/currency',
    { src: '~/plugins/vue-carousel', ssr: false },
  ],

  // Auto-Imports all components inside the common components directory
  components: ['~/components/common'],

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/auth'],

  // Axios configurations
  axios: {
    baseURL: 'http://18.222.98.78:6007/',
  },

  // Auth strategies
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/v1/signin',
            method: 'post',
            propertyName: 'token',
          },
          logout: { url: '/api/v1/logout', method: 'post' },
        },
        autoFetchUser: false,
      },
    },
  },

  // Build options
  build: {},

  // Public runtime configurations
  publicRuntimeConfig: {
    appName: 'microfund',
  },

  loading: { color: '#000' },
}
