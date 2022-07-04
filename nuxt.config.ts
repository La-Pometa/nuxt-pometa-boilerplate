import { defineNuxtConfig } from 'nuxt'
import Icons from 'unplugin-icons/vite'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'Landing Name',
    link: [{ rel: 'icon', type: 'image/x-icon', href: './favicon.png' }],
  },

  vite: {
    plugins: [Icons({})],
  },

  experimental: {
    reactivityTransform: true,
    // viteNode: true,
  },

  srcDir: 'src',

  css: ['~/assets/styles/main.scss'],

  buildModules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss'],

  tailwindcss: {
    configPath: '~~/tailwind.config.js',
  },

  vueuse: {
    ssrHandlers: true,
  },

  build: {
    extractCSS: true,
    optimizeCSS: true,
    html: {
      minify: {
        minifyCSS: true,
        minifyJS: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
      },
    },
  },
})
