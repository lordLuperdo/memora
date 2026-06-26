<script setup lang="ts">
const steps = ['Color', 'Forma', 'Aroma']

const featuredCandles = [
  { src: '/images/velas/velacubo-floresrosa.png', alt: 'Vela cubo floral rosa' },
  { src: '/images/velas/velaarbol-floralverde.png', alt: 'Vela árbol floral verde' },
  { src: '/images/velas/velacilindro-corazonescrema.png', alt: 'Vela cilindro de corazones crema' },
  { src: '/images/velas/velaoso-floralazul.png', alt: 'Vela oso floral azul' }
]
</script>

<template>
  <section id="personaliza" class="bg-memora-ink rounded-xl px-4 py-5 text-white md:mx-auto md:max-w-5xl md:px-10 md:py-10 lg:max-w-6xl lg:px-14">
    <h2 class="text-center font-brand text-2xl font-semibold">Personaliza tu vela</h2>
    <div class="mt-3 grid grid-cols-4 gap-2 md:mx-auto md:mt-6 md:max-w-4xl md:gap-4">
      <div
        v-for="candle in featuredCandles"
        :key="candle.src"
        class="h-20 overflow-hidden rounded bg-memora-wax md:h-32 lg:h-40"
      >
        <img
          :src="candle.src"
          :alt="candle.alt"
          class="h-full w-full object-cover transition duration-300 hover:scale-105"
          loading="lazy"
          decoding="async"
        >
      </div>
    </div>
    <p class="mx-auto mt-3 max-w-[240px] text-center font-bold text-lg leading-relaxed text-white/90 md:mt-6 md:max-w-2xl md:text-xl">
      Convierte tu espacio en algo unico, algo que sea solo tuyo.
    </p>
    <div class="mt-3 flex justify-center gap-2 md:mt-5 md:gap-4">
      <span v-for="step in steps" :key="step" class="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold">
        {{ step }}
      </span>
    </div>
    <NuxtLink to="/veladetail" class="mx-auto font-extrabold mt-4 block w-fit rounded bg-memora-mist px-7 py-2 text-lg text-memora-ink md:mt-6 md:px-10 md:py-3 md:text-xl">
      Empieza a personalizar
    </NuxtLink>
  </section>
</template>
