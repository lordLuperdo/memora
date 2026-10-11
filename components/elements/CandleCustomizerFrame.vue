<script setup lang="ts">
import type { CandleOption } from '~/store/store'
import { candleModels, candleColors, candleImage, formatCandlePrice } from '~/store/candles'

type Essence = {
  id: string
  nombre: string
  descripcion: string
  notas: string
  color: string
  icono: string
}

const props = defineProps<{
  essences: Essence[]
}>()

const emit = defineEmits<{
  add: [options: CandleOption & { imagen: string; formaSlug: string }]
}>()

const colors = candleColors
const shapes = candleModels

const selectedColor = ref(colors[3])
const selectedShape = ref(shapes[1])
const selectedEssence = ref<Essence | null>(props.essences[0] ?? null)
const imageHasError = ref(false)
const isFragranceOpen = ref(false)
const shapeScroller = ref<HTMLElement | null>(null)
const canScrollShapesLeft = ref(false)
const canScrollShapesRight = ref(true)

const updateShapeScroll = () => {
  const scroller = shapeScroller.value

  if (!scroller) return

  canScrollShapesLeft.value = scroller.scrollLeft > 2
  canScrollShapesRight.value = scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth - 2
}

const scrollShapes = (direction: -1 | 1) => {
  shapeScroller.value?.scrollBy({
    left: direction * 150,
    behavior: 'smooth'
  })
}

const velachoicen = computed(() => {
  const imageName = candleImage(selectedShape.value.slug, selectedColor.value.slug)

  return {
    color: selectedColor.value.name,
    colorSlug: selectedColor.value.slug,
    forma: selectedShape.value.name,
    formaSlug: selectedShape.value.slug,
    fragancia: selectedEssence.value?.nombre || 'Esencias',
    imageName,
    imageSrc: imageName
  }
})

const selectEssence = (essence: Essence) => {
  selectedEssence.value = essence
  isFragranceOpen.value = false
}

const addToCart = () => {
  if (selectedShape.value.price === null) return
  emit('add', {
    color: velachoicen.value.color,
    forma: velachoicen.value.forma,
    fragancia: velachoicen.value.fragancia,
    imagen: velachoicen.value.imageSrc,
    formaSlug: selectedShape.value.slug
  })
}

watch([selectedColor, selectedShape], () => {
  imageHasError.value = false
})

onMounted(() => {
  nextTick(updateShapeScroll)
  window.addEventListener('resize', updateShapeScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateShapeScroll)
})
</script>

<template>
  <section class="mx-auto w-full max-w-5xl px-4 py-6 md:rounded-lg md:bg-[#F0FAFF] md:px-8 md:py-8 md:shadow-soft lg:max-w-6xl lg:px-12 lg:py-12">
   

    <div class="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
      <div>
        <div class="relative mx-auto mt-5 w-full max-w-[500px] pl-12 md:pl-16">
          <div class="absolute left-0 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center gap-3 rounded-full bg-memora-ink px-2 py-3 md:gap-4">
            <button
              v-for="color in colors"
              :key="color.slug"
              :aria-label="color.name"
              :aria-pressed="selectedColor.slug === color.slug"
              :title="color.name"
              class="h-6 w-6 rounded-full border-2 md:h-7 md:w-7"
              :class="selectedColor.slug === color.slug ? 'border-white' : 'border-transparent'"
              :style="{ backgroundColor: color.value }"
              @click="selectedColor = color"
            />
          </div>
          <div class="flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-200">
            <img
              v-if="!imageHasError"
              :src="velachoicen.imageSrc"
              :alt="`${velachoicen.forma} ${velachoicen.color}`"
              width="627" height="627"
              class="h-full w-full object-contain"
              @error="imageHasError = true"
            >
            <p v-else class="px-6 text-center text-sm">No se pudo cargar la imagen. Prueba otro color.</p>
          </div>
        </div>
      </div>

      <div class="mx-auto w-full max-w-[340px] md:max-w-[380px] lg:max-w-[420px]">
        <h2 class="text-center font-brand text-2xl font-medium text-memora-violet md:text-3xl">Forma</h2>
        <label for="candle-model" class="sr-only">Selecciona un modelo</label>
        <select id="candle-model" v-model="selectedShape" class="mt-3 w-full rounded-lg border border-memora-violet/30 bg-white px-3 py-2 text-memora-deep">
          <option v-for="shape in shapes" :key="shape.slug" :value="shape">{{ shape.name }}</option>
        </select>
        <div class="mt-3 grid grid-cols-[36px_minmax(0,1fr)_36px] items-center gap-1.5">
          <button
            class="flex h-9 w-9 items-center justify-center rounded-full bg-white text-memora-violet shadow-soft transition disabled:cursor-default disabled:opacity-30"
            :disabled="!canScrollShapesLeft"
            aria-label="Ver formas anteriores"
            @click="scrollShapes(-1)"
          >
            <Icon name="ph:caret-left-bold" class="h-5 w-5" />
          </button>

          <div
            ref="shapeScroller"
            class="flex min-w-0 snap-x snap-mandatory gap-3 overflow-x-auto py-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:gap-4"
            @scroll="updateShapeScroll"
          >
            <button
              v-for="shape in shapes"
              :key="shape.slug"
              class="flex h-14 w-14 shrink-0 snap-start items-center justify-center rounded-full border border-[#d9a996] bg-white text-[#c78670]"
              :class="selectedShape.slug === shape.slug ? 'ring-2 ring-memora-violet' : ''"
              :aria-label="shape.name"
              :aria-pressed="selectedShape.slug === shape.slug"
              :title="shape.name"
              @click="selectedShape = shape"
            >
              <img :src="candleImage(shape.slug, 'rosa')" alt="" class="h-12 w-12 rounded-full object-cover" loading="lazy" aria-hidden="true">
            </button>
          </div>

          <button
            class="flex h-9 w-9 items-center justify-center rounded-full bg-white text-memora-violet shadow-soft transition disabled:cursor-default disabled:opacity-30"
            :disabled="!canScrollShapesRight"
            aria-label="Ver formas siguientes"
            @click="scrollShapes(1)"
          >
            <Icon name="ph:caret-right-bold" class="h-5 w-5" />
          </button>
        </div>

        <div class="mt-4 text-center" aria-live="polite">
          <p class="font-bold text-memora-deep">{{ selectedShape.name }}</p>
          <p class="mt-1 text-2xl font-bold text-memora-violet">{{ selectedShape.price === null ? 'Precio por confirmar' : formatCandlePrice(selectedShape.price) }}</p>
          <p v-if="selectedShape.note" class="mt-1 text-sm">{{ selectedShape.note }}</p>
        </div>

        <h2 class="mt-5 text-center font-brand text-2xl font-medium text-memora-violet md:text-3xl">Esencias</h2>
        <div class="relative mt-2">
          <button
            class="flex w-full items-center justify-between rounded-full bg-memora-violet px-4 py-2 text-base font-bold text-white"
            @click="isFragranceOpen = !isFragranceOpen"
          >
            <span>{{ selectedEssence?.nombre || 'Selecciona una esencia' }}</span>
            <Icon name="ph:caret-down-bold" class="h-4 w-4" />
          </button>
          <div v-if="isFragranceOpen" class="absolute left-0 right-0 z-20 rounded-b-2xl bg-memora-violet px-4 pb-3 text-white shadow-soft md:max-h-80 md:overflow-y-auto">
            <button
              v-for="essence in props.essences"
              :key="essence.id"
              class="block w-full border-b border-white/30 py-2 text-left text-lg"
              @click="selectEssence(essence)"
            >
              <span class="font-bold">{{ essence.nombre }}</span>
              <span class="mt-1 block text-sm text-white/80">{{ essence.notas }}</span>
            </button>
          </div>
        </div>

        <button :disabled="selectedShape.price === null" class="mt-4 w-full rounded bg-memora-ink px-4 py-3 text-lg font-bold text-white disabled:cursor-not-allowed disabled:opacity-50" @click="addToCart">
          {{ selectedShape.price === null ? 'Precio pendiente de confirmar' : 'Agregar al carrito' }}
        </button>
      </div>
    </div>
  </section>
</template>
