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
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        {
          hid: 'maze',
          innerHTML: `
          (function (m, a, z, e) {
            var s, t;
            try {
              t = m.sessionStorage.getItem('maze-us');
            } catch (err) {}
          
            if (!t) {
              t = new Date().getTime();
              try {
                m.sessionStorage.setItem('maze-us', t);
              } catch (err) {}
            }
          
            s = a.createElement('script');
            s.src = z + '?t=' + t + '&apiKey=' + e;
            s.async = true;
            a.getElementsByTagName('head')[0].appendChild(s);
            m.mazeUniversalSnippetApiKey = e;
          })(window, document, 'https://snippet.maze.co/maze-universal-loader.js', '12eafcde-25e9-4899-9587-62628cc601e8');
          `,
          type: 'text/javascript',
          defer: true
        }
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  runtimeConfig: {
    public: {
      PAYLOAD_PUBLIC_URL: process.env.PAYLOAD_PUBLIC_URL
    }
  },

  modules: [
    'nuxt-purgecss',
    '@nuxt/image-edge',
    ['@funken-studio/sitemap-nuxt-3', {
      hostname: 'https://studiocontra.co',
      cacheTime: 1,
      routes: async () => {
        const proyectos = await $fetch(`${process.env.PAYLOAD_PUBLIC_URL}/projects`);
        const projects = await $fetch(`${process.env.PAYLOAD_PUBLIC_URL}/projects?locale=en`);
        const updates = await $fetch(`${process.env.PAYLOAD_PUBLIC_URL}/updates`);
        const updatesEn = await $fetch(`${process.env.PAYLOAD_PUBLIC_URL}/updates?locale=en`);

        const proyectosUrl = proyectos.docs.map((project) => `/proyectos/${project.slug}`);
        const projectsUrl = projects.docs.map((project) => `/en/projects/${project.slug}`);
        const updatesUrl = updates.docs.map((update) => `/updates/${update.slug}`);
        const updatesUrlEn = updatesEn.docs.map((update) => `/en/updates/${update.slug}`);

        return [...proyectosUrl, ...updatesUrl, ...projectsUrl, ...updatesUrlEn];
      },
      defaults: {
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date().toISOString(),
      },
    }],
  ],

  purgecss: {
    enabled: false, // Always enable purgecss
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
  },
})
