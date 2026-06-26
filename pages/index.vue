<script setup lang="ts">
import { UseDataEstore } from '~/store/store'
import { useEssenceStore } from '~/store/data'
import { storeToRefs } from 'pinia'
import BrandLogo from '~/components/elements/BrandLogo.vue'
import EssenceCard from '~/components/elements/EssenceCard.vue'
import FloatingCartPopup from '~/components/elements/FloatingCartPopup.vue'
import OfferCard from '~/components/elements/OfferCard.vue'
import PersonalizerCard from '~/components/elements/PersonalizerCard.vue'


const store = UseDataEstore()
const essenceStore = useEssenceStore()
const { essences } = storeToRefs(essenceStore)
const selectedCategory = ref('Todas')

const essenceCategories = computed(() => [
  'Todas',
  ...new Set(essences.value.map((essence) => essence.categoria))
])

const filteredEssences = computed(() => {
  if (selectedCategory.value === 'Todas') return essences.value

  return essences.value.filter((essence) => essence.categoria === selectedCategory.value)
})

const oferta = {
  id: 'vela-cereza-semana',
  nombre: 'Oferta de la semana',
  descripcion: 'Nuestra vela memora esta al alcance no te la pierdas.',
  precio: 30000
}

const agregarOferta = () => {
  store.agregarAlCarrito(oferta)
}
</script>

<template>
  <main class="min-h-screen bg-[#F0FAFF] text-memora-deep">
    <FloatingCartPopup />

    

    <section class="relative w-full overflow-hidden bg-[#F0FAFF] md:min-h-screen">
      <div class="grid w-full items-center gap-10 md:min-h-screen md:block">
       

        <div id="oferta" class="w-full max-w-full md:min-h-screen">
          <OfferCard :price="oferta.precio" @add="agregarOferta" />
        </div>
      </div>
    </section>

    <section id="personaliza" class="-mt-px bg-[#F0FAFF] px-4 md:px-8 md:py-12 lg:px-12 lg:py-16">
        <PersonalizerCard />
        
     
    </section>

    <section id="catalogo" class="-mt-px bg-[#F0FAFF] py-14">
      <div class="mx-auto max-w-6xl px-5 md:px-8 lg:px-12">
        <div class="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p class="text-base font-bold uppercase tracking-[0.22em] text-memora-violet">MEMORA</p>
            <h2 class="mt-3 font-brand text-4xl font-bold text-memora-ink md:text-6xl">
              Conoce nuestras esencias
            </h2>
          </div>
          <NuxtLink to="/veladetail" class="w-fit rounded border border-memora-ink px-5 py-3 text-base font-bold text-memora-ink">
            Empieza a personalizar
          </NuxtLink>
        </div>

        <div class="mt-8 flex snap-x gap-3 overflow-x-auto pb-3 md:flex-wrap md:justify-center md:overflow-visible">
          <button
            v-for="category in essenceCategories"
            :key="category"
            class="shrink-0 snap-start rounded-full border px-5 py-2 text-base font-bold transition-colors"
            :class="selectedCategory === category
              ? 'border-memora-violet bg-memora-violet text-white'
              : 'border-memora-violet bg-white text-memora-violet'"
            @click="selectedCategory = category"
          >
            {{ category }}
          </button>
        </div>

        <div class="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          <EssenceCard
            v-for="essence in filteredEssences"
            :key="essence.id"
            :nombre="essence.nombre"
            :descripcion="essence.descripcion"
            :notas="essence.notas"
            :color="essence.color"
            :icono="essence.icono"
          />
        </div>
      </div>
    </section>
  </main>
</template>
