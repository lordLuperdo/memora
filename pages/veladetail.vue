<script setup lang="ts">
import CandleCustomizerFrame from '~/components/elements/CandleCustomizerFrame.vue'
import FloatingCartPopup from '~/components/elements/FloatingCartPopup.vue'
import { UseDataEstore } from '~/store/store'
import { useEssenceStore } from '~/store/data'
import { storeToRefs } from 'pinia'

const store = UseDataEstore()
const essenceStore = useEssenceStore()
const { essences } = storeToRefs(essenceStore)

const agregarPersonalizada = (opciones: { color: string; forma: string; fragancia: string; imagen: string }) => {
  const formaSlug = opciones.forma.toLowerCase().replaceAll(' ', '-')
  const colorSlug = opciones.color.toLowerCase()

  store.agregarAlCarrito({
    id: `vela-personalizada-${formaSlug}-${colorSlug}-${opciones.fragancia.toLowerCase().replaceAll(' ', '-')}`,
    nombre: `Vela + ${opciones.fragancia}`,
    descripcion: 'Personaliza tu vela',
    precio: 36000,
    imagen: opciones.imagen,
    opciones: {
      color: opciones.color,
      forma: opciones.forma,
      fragancia: opciones.fragancia
    }
  })
}
</script>

<template>
  <main class="min-h-screen bg-memora-mist  text-memora-deep">
    <NuxtLink
      to="/"
      class="fixed left-4 top-4 z-50 flex h-11 items-center gap-2 rounded-full bg-white px-4 font-bold text-memora-violet shadow-soft transition hover:bg-memora-violet hover:text-white md:left-8 md:top-6"
      aria-label="Volver al inicio"
    >
      <Icon name="ph:arrow-left-bold" class="h-5 w-5" />
      <span>Volver</span>
    </NuxtLink>

    <FloatingCartPopup />

    

    <section class="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-12 lg:px-10 lg:py-16">
      <div class="mb-6 max-w-2xl md:mb-10 lg:max-w-3xl">
        <p class="text-base font-bold uppercase tracking-[0.22em] text-memora-violet">Color · Forma · Aroma</p>
        <h1 class="mt-3 font-brand text-4xl font-bold text-memora-ink md:text-6xl">
          Personaliza tu vela
        </h1>
      </div>

      <CandleCustomizerFrame :essences="essences" @add="agregarPersonalizada" />
    </section>
  </main>
</template>
