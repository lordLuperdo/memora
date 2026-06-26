<script setup lang="ts">
import BrandLogo from '~/components/elements/BrandLogo.vue'
import vela from '~/components/ui/imgs/memorahh1.png'
import moras from '~/components/ui/imgs/moras.png'
import logo from '~/components/ui/imgs/logo.png'
import cereza from '~/components/ui/imgs/cerezas.png'
import granos from '~/components/ui/imgs/granos.png'

defineProps<{
  price: number
}>()

const emit = defineEmits<{
  add: []
}>()
</script>

<template>
  <section class="relative h-full w-full overflow-hidden bg-gradient-to-b from-memora-mist via-[#E5F4F8] to-[#F0FAFF] px-4 pb-10 pt-5 sm:px-6 md:min-h-screen md:px-10 md:py-10 lg:px-14">
    <div class="pointer-events-none absolute -left-40 -top-40 h-63 w-63 rounded-full" >
      <img :src="moras" class="" alt="">
    </div>
    <div class="pointer-events-none absolute -right-40  -top-40 h-63 w-63 rounded-full" >
      <img :src="moras" class="scale-x-[-1]" alt="">
    </div>

    <div class="md:mx-auto  md:min-h-[calc(100vh-5rem)] md:max-w-6xl md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-x-10 lg:gap-x-16">
    <div class="flex justify-center items-center px-24 md:col-start-1 md:row-start-1 md:px-10 lg:px-16">
    <img :src="logo" class="max-w-full lg:w-60 " alt="">  
    </div>
    

    <div class="mx-auto mt-4 w-fit rounded bg-memora-violet px-5 py-1 text-center text-2xl text-memora-mist font-semibold md:col-start-1 md:row-start-2 md:text-3xl lg:text-6xl">
      Oferta de la semana
    </div>
    <p class="mx-auto mt-2 max-w-[260px] text-center text-lg font-bold text-memora-deep md:col-start-1 md:row-start-3 md:max-w-md md:text-xl">
      Nuestra vela memora esta al alcance no te la pierdas.
    </p>

    <div class="relative mx-auto mt-4 flex h-64 max-w-[300px] items-center justify-center md:col-start-2 md:row-span-4 md:row-start-1 md:mt-0 md:h-[400px] md:max-w-[440px] lg:h-[460px]">
      <div class="absolute left-1/2 top-7 z-0 h-44 w-44 -translate-x-1/2 rounded-full bg-memora-ink md:top-16 md:h-60 md:w-60" />
      <img
        :src="granos"
        alt=""
        class="pointer-events-none absolute left-16 -top-0 z-0 w-20 -rotate-12 md:-left-10 md:top-16 md:w-28"
      >
      <div class="absolute -left-4 -rotate-12 top-14 h-22 w-22 rounded-full bg-mmora-rose z-20 md:-left-10 md:top-56  md:h-32 md:w-32" >
          <img :src="cereza" alt="" class="">
        </div>
      <div class="absolute right-5 top-10 h-10 w-10 rounded-full bg-memora-ose z-0 md:-right-10 md:top-28 md:h-20 md:w-20" >
          <img :src="cereza" alt="" class="">
        </div>
             
            <div class="relative z-10 h-56 rounded-b-3xl rounded-t-lg">
               <img :src="vela" class="relative h-48 -rotate-12 md:h-64" alt="">
            </div>

      <span class="absolute bottom-16 -right-0 rounded-full z-20 bg-memora-blush px-3 py-1 text-lg font-bold text-memora-violet md:bottom-16 md:-right-20 md:px-5 md:py-2 md:text-2xl">
        {{ new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(price) }}
      </span>
    </div>

    <div class="mt-4 flex justify-center gap-2 md:col-start-1 md:row-start-4 md:mt-8 md:flex-wrap">
      <button class="rounded bg-memora-violet px-4 py-2 text-lg font-bold text-white" @click="emit('add')">
        Agregar al carrito
      </button>
      <NuxtLink to="/veladetail" class="rounded border border-memora-violet px-4 py-2 text-lg font-bold text-memora-violet">
        Conocer más
      </NuxtLink>
    </div>
    </div>
  </section>
</template>
