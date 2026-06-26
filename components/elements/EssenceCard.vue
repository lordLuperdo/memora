<script setup lang="ts">
defineProps<{
  nombre: string
  descripcion: string
  notas: string
  color: string
  icono: string
}>()
</script>

<template>
  <article class="overflow-hidden rounded-lg bg-white shadow-soft md:flex md:h-full md:flex-col">
    <div class="flex h-36 items-center justify-center md:h-44 lg:h-48" :style="{ backgroundColor: `${color}22` }">
      <div class="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm" :style="{ color }">
        <Icon :name="icono" class="h-10 w-10" />
      </div>
    </div>
    <div class="p-5 md:flex md:flex-1 md:flex-col md:p-6">
      <p class="text-sm font-semibold uppercase text-memora-violet">{{ notas }}</p>
      <h3 class="mt-2 text-2xl font-bold text-memora-ink">{{ nombre }}</h3>
      <p class="mt-3 text-lg leading-relaxed text-memora-deep/70">{{ descripcion }}</p>
    </div>
  </article>
</template>
