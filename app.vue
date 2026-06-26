<script setup lang="ts">
const config = useRuntimeConfig()
const siteUrl = String(config.public.siteUrl).replace(/\/$/, '')
const socialImage = `${siteUrl}/images/social/memora-catalogo.jpg`

useSeoMeta({
  title: 'Memora | Velas personalizadas',
  description: 'Descubre el catálogo de velas Memora y personaliza el color, la forma y el aroma.',
  ogTitle: 'Memora | Velas que guardan momentos',
  ogDescription: 'Personaliza el color, la forma y el aroma de tu vela Memora.',
  ogType: 'website',
  ogUrl: `${siteUrl}/`,
  ogImage: socialImage,
  ogImageSecureUrl: socialImage,
  ogImageType: 'image/jpeg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Catálogo de velas personalizadas Memora',
  ogSiteName: 'Memora',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Memora | Velas que guardan momentos',
  twitterDescription: 'Personaliza el color, la forma y el aroma de tu vela Memora.',
  twitterImage: socialImage
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: `${siteUrl}/`
    }
  ]
})
</script>

<template>
  <NuxtPage />
</template>
