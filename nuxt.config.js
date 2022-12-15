import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Contra Studio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-2BD9F8LG00'
      },
      {
        children: 'window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "G-2BD9F8LG00");',
      }
    ]
  },
  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/_grid.scss',
    '@/assets/scss/_base.scss',
    '@/assets/scss/_transitions.scss',
    '@/assets/scss/_text.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "sass:math";
          @import "@/assets/scss/_mixins.scss";`,
        },
      },
    },
  },
  build: {
    transpile: ['gsap'],
  }
})
