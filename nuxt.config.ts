// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/ui','@nuxtjs/i18n', '@nuxt/image','@pinia/nuxt'],
  buildModules: [
    "@nuxtjs/axios",
    ['@pinia/nuxt', { disableVuex: false }],
],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  i18n: {
    locales: [
      {
        code: 'uz',
        iso: 'uz-UZ',
        name: 'Uzbek',
        file: 'uz.json',
        n:{
          name: 'Uz'
        }
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json',
        n:{
          name: 'En'
        }
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        name: 'Russian',
        file: 'ru.json',
        n:{
          name: 'Ru'
        }
      }
    ],
    strategy: 'prefix_and_default',
    defaultLocale: 'uz',
    lazy: true,
    langDir: 'lang',
  },
  axios: {
    baseURL: '/'
  },
  env: {
    apiUrl: process.env.API_URL || 'http://localhost:4000'
  },
  plugins: [
    { src: '~/plugins/toaster.js', mode: 'client' }
  ]
})


