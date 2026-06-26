<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { UseDataEstore } from '~/store/store'
import { useWhatsappCart } from '~/hooks/whatsapp/useWhatsappCart'

const store = UseDataEstore()
const { carrito, totalProductos, ventaTotal } = storeToRefs(store)
const { enviarCarritoWhatsapp } = useWhatsappCart()
const isOpen = ref(false)

const money = (value: number) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(value)
</script>

<template>
  <div class="fixed right-4 top-4 z-50 md:right-8 md:top-6">
    <button
      class="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-memora-mist bg-memora-violet text-white shadow-soft drop-shadow-md"
      aria-label="Carrito"
      @click="isOpen = true"
    >
      <Icon name="ph:shopping-cart-simple-bold" class="h-6 w-6" />
      <span
        v-if="totalProductos"
        class="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-red-500"
      />
    </button>
  </div>

  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-memora-ink/35 backdrop-blur-sm"
      @click.self="isOpen = false"
    >
      <section class="relative flex h-[60vh] w-[70vw] flex-col overflow-hidden rounded-2xl bg-memora-violet p-5 text-white shadow-soft md:h-[65vh] md:w-[65vw] md:p-8 lg:w-[55vw] xl:max-w-[900px]">
        <button
          class="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-memora-violet"
          aria-label="Cerrar carrito"
          @click="isOpen = false"
        >
          <Icon name="ph:x-bold" class="h-5 w-5" />
        </button>

        <div v-if="!carrito.length" class="flex flex-1 flex-col items-center justify-center text-center">
          <div class="relative flex h-36 w-36 items-center justify-center rounded-full bg-white/15">
            <div class="flex h-24 w-24 items-center justify-center rounded-full bg-white text-memora-violet shadow-soft">
              <Icon name="ph:shopping-bag-open-duotone" class="h-14 w-14" />
            </div>
            <Icon name="ph:sparkle-fill" class="absolute -right-1 top-5 h-7 w-7 text-memora-blush" />
            <Icon name="ph:sparkle-fill" class="absolute bottom-5 left-0 h-5 w-5 text-memora-mist" />
          </div>
          <p class="mt-6 text-3xl font-semibold text-white">Carrito vacío</p>
        </div>

        <div v-else class="flex min-h-0 flex-1 flex-col">
          <h2 class="pr-14 text-3xl font-semibold">Tu carrito</h2>

          <div class="mt-5 min-h-0 flex-1 space-y-3 overflow-y-auto pr-2">
            <article v-for="item in carrito" :key="item.id" class="rounded-lg bg-white/95 p-3 text-memora-ink">
              <div class="grid grid-cols-[76px_1fr_auto] items-center gap-3">
                <div class="flex h-[68px] w-[68px] items-center justify-center overflow-hidden rounded-lg bg-memora-mist">
                  <img v-if="item.imagen" :src="item.imagen" :alt="item.nombre" class="h-full w-full object-cover">
                  <Icon v-else name="ph:flame-duotone" class="h-8 w-8 text-memora-violet" />
                </div>
                <div class="min-w-0">
                  <p class="truncate text-base font-bold">{{ item.nombre }}</p>
                  <div v-if="item.opciones" class="mt-1.5 flex flex-wrap gap-1.5">
                    <span class="rounded-full bg-[#F8D9DF] px-2.5 py-1 text-sm text-[#794052]">{{ item.opciones.color }}</span>
                    <span class="rounded-full bg-[#DDEED8] px-2.5 py-1 text-sm text-[#3F6543]">{{ item.opciones.forma }}</span>
                  </div>
                  <p class="text-sm text-memora-deep/70">{{ item.cantidad }} x {{ money(item.precio) }}</p>
                </div>
                <button class="text-memora-violet" aria-label="Eliminar" @click="store.eliminarDelCarrito(item.id)">
                  <Icon name="ph:x-circle" class="h-6 w-6" />
                </button>
              </div>
            </article>
          </div>

          <div class="mt-5 flex items-center justify-between border-t border-white/30 pt-4 text-xl font-bold">
            <span>Total</span>
            <span>{{ money(ventaTotal) }}</span>
          </div>
          <button
            class="mt-4 w-full rounded-lg bg-white px-4 py-3 text-lg font-bold text-memora-violet"
            @click="enviarCarritoWhatsapp(carrito, ventaTotal)"
          >
            Confirmar compra
          </button>
        </div>
      </section>
    </div>
  </Teleport>
</template>
