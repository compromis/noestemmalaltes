// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'https://compromis.net/sub/icons/favicon.ico',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: 'https://compromis.net/sub/icons/favicon32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: 'https://compromis.net/sub/icons/favicon192.png',
        },
        {
          rel: 'stylesheet',
          href: 'https://compromis.net/sub/fonts/manrope.css?variable',
        },
      ],
      script: [
        { type: 'text/javascript', src: '//js-eu1.hsforms.net/forms/embed/v2.js', charset: 'utf-8' }
      ]
    }
  },

  css: [
    '@compromis/blobby/scss/blobby.scss',
    '~/assets/scss/main.scss'
  ],

  modules: [
    '@vueuse/motion/nuxt',
    '@vueuse/nuxt',
    'nuxt-cloudflare-analytics',
    '@nuxt/icon',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import '@compromis/blobby/scss/variables';
            @import 'bootstrap/scss/functions';
            @import 'bootstrap/scss/variables';
            @import 'bootstrap/scss/mixins';
          `
        }
      }
    }
  },

  cloudflareAnalytics: {
    token: '4f0bbe7ec8634572b785479f6b3ef626'
  }
})