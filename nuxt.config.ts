export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')
    }
  },
  experimental: {
    appManifest: false
  },
  css: ['~/components/ui/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@pinia/nuxt'],
  nitro: {
    prerender: {
      routes: ['/', '/veladetail']
    }
  },
  app: {
    head: {
      title: 'Memora | Botanica - Sensaciones - Elegancia',
      meta: [
        {
          name: 'description',
          content: 'Catalogo de velas personalizadas Memora.'
        }
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Inter:wght@400;500;600;700&display=swap'
        }
      ]
    }
  }
})
