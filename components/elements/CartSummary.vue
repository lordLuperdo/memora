<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { UseDataEstore } from '~/store/store'
import { useWhatsappCart } from '~/hooks/whatsapp/useWhatsappCart'

const store = UseDataEstore()
const { carrito, ventaTotal, totalProductos } = storeToRefs(store)
const { enviarCarritoWhatsapp } = useWhatsappCart()

const money = (value: number) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(value)
</script>

<template>
  <aside class="memora-panel rounded-lg p-4">
    <div class="flex items-center justify-between gap-3">
      <div>
        <p class="text-lg font-semibold uppercase text-memora-violet">Carrito</p>
        <h2 class="font-brand text-2xl font-bold text-memora-ink">{{ totalProductos }} productos</h2>
      </div>
      <Icon name="ph:shopping-bag-duotone" class="h-8 w-8 text-memora-ink" />
    </div>

    <div class="mt-4 space-y-3">
      <p v-if="!carrito.length" class="rounded bg-memora-mist/70 px-3 py-4 text-base text-memora-deep/70">
        Tu carrito esta listo para guardar velas.
      </p>

      <div v-for="item in carrito" :key="item.id" class="rounded border border-memora-ink/10 bg-white p-3">
        <div class="flex items-start justify-between gap-3">
          <div class="flex min-w-0 gap-3">
            <div class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-memora-mist">
              <img v-if="item.imagen" :src="item.imagen" :alt="item.nombre" class="h-full w-full object-cover">
              <Icon v-else name="ph:flame-duotone" class="h-8 w-8 text-memora-violet" />
            </div>
            <div class="min-w-0">
            <h3 class="text-base font-bold text-memora-ink">{{ item.nombre }}</h3>
            <div v-if="item.opciones" class="mt-1.5 flex flex-wrap gap-1.5">
              <span class="rounded-full bg-[#F8D9DF] px-2.5 py-1 text-sm text-[#794052]">{{ item.opciones.color }}</span>
              <span class="rounded-full bg-[#DDEED8] px-2.5 py-1 text-sm text-[#3F6543]">{{ item.opciones.forma }}</span>
            </div>
            <p class="text-lg text-memora-deep/70">Cantidad: {{ item.cantidad }}</p>
            </div>
          </div>
          <button class="text-memora-violet" aria-label="Eliminar" @click="store.eliminarDelCarrito(item.id)">
            <Icon name="ph:x-circle" class="h-5 w-5" />
          </button>
        </div>
        <p class="mt-2 text-base font-bold text-memora-violet">{{ money(item.precio * item.cantidad) }}</p>
      </div>
    </div>

    <div class="mt-4 border-t border-memora-ink/10 pt-4">
      <div class="flex items-center justify-between text-base font-bold">
        <span>Total</span>
        <span>{{ money(ventaTotal) }}</span>
      </div>
      <button
        class="mt-4 flex w-full items-center justify-center gap-2 rounded bg-memora-ink px-4 py-3 text-base font-bold text-white disabled:opacity-50"
        :disabled="!carrito.length"
        @click="enviarCarritoWhatsapp(carrito, ventaTotal)"
      >
        <Icon name="ph:whatsapp-logo" class="h-5 w-5" />
        Enviar por WhatsApp
      </button>
    </div>
  </aside>
</template>
