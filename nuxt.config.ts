// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/',
  app: {
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
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: 'https://dev.studiocontra.co/admin/wp-json/wp/v2'
    }
  },
  modules: [
    ['@funken-studio/sitemap-nuxt-3', {
      hostname: 'https://studiocontra.co',
      cacheTime: 1,
      routes: async () => {
        const projects = await $fetch('https://dev.studiocontra.co/admin/wp-json/wp/v2/projects');
        const updates = await $fetch('https://dev.studiocontra.co/admin/wp-json/wp/v2/updates');

        const projectsUrl = projects.map((project) => `/proyectos/${project.slug}`);
        const updatesUrl = updates.map((update) => `/updates/${update.slug}`);

        return [...projectsUrl, ...updatesUrl];
      },
      defaults: {
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date().toISOString(),
      },
    }]
  ],
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
