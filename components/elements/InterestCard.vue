<script setup lang="ts">
defineProps<{
  title: string
  note: string
  color: string
  price: number
}>()
</script>

<template>
  <article class="grid grid-cols-[76px_1fr] gap-3 rounded bg-white p-2 shadow-sm">
    <div class="h-20 rounded" :style="{ backgroundColor: color }" />
    <div class="flex min-w-0 flex-col justify-center">
      <h3 class="truncate text-base font-bold text-memora-ink">{{ title }}</h3>
      <p class="mt-1 line-clamp-2 text-lg text-memora-deep/70">{{ note }}</p>
      <p class="mt-2 text-lg font-bold text-memora-violet">
        {{ new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(price) }}
      </p>
    </div>
  </article>
</template>
