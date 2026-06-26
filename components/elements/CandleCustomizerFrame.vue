<script setup lang="ts">
import type { CandleOption } from '~/store/store'
import BrandLogo from '~/components/elements/BrandLogo.vue'

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
  add: [options: CandleOption & { imagen: string }]
}>()

const colors = [
  { name: 'Rosa', slug: 'rosa', value: '#f4b4a8' },
  { name: 'Verde', slug: 'verde', value: '#8faf72' },
  { name: 'Crema', slug: 'crema', value: '#f7d99e' },
  { name: 'Azul', slug: 'azul', value: '#9fc9dc' }
]

const shapes = [
  { name: 'Quemador clásico', slug: 'quemador-clasico', iconSrc: '/images/velas/icons/quemador-clasico.svg' },
  { name: 'Cilindro de burbujas', slug: 'cilindro-burbujas', iconSrc: '/images/velas/icons/cilindro-burbujas.svg' },
  { name: 'Quemador curvo', slug: 'quemador-curvo', iconSrc: '/images/velas/icons/quemador-curvo.svg' },
  { name: 'Cilindro de corazones', slug: 'cilindro-corazones', iconSrc: '/images/velas/icons/cilindro-corazones.svg' },
  { name: 'Árbol floral', slug: 'arbol-floral', iconSrc: '/images/velas/icons/arbol-floral.svg' },
  { name: 'Quemador cuadrado', slug: 'quemador-cuadrado', iconSrc: '/images/velas/icons/quemador-cuadrado.svg' },
  { name: 'Cubo de burbujas', slug: 'cubo-burbujas', iconSrc: '/images/velas/icons/cubo-burbujas.svg' },
  { name: 'Caja de rosas', slug: 'caja-rosas', iconSrc: '/images/velas/icons/caja-rosas.svg' },
  { name: 'Oso floral', slug: 'oso-floral', iconSrc: '/images/velas/icons/oso-floral.svg' },
  { name: 'Cubo de flores', slug: 'cubo-flores', iconSrc: '/images/velas/icons/cubo-flores.svg' }
]

const selectedColor = ref(colors[3])
const selectedShape = ref(shapes[0])
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
  const imageName = `/images/velas/vela${selectedShape.value.slug}${selectedColor.value.slug}.png`

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
  emit('add', {
    color: velachoicen.value.color,
    forma: velachoicen.value.forma,
    fragancia: velachoicen.value.fragancia,
    imagen: velachoicen.value.imageSrc
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
        <div class="relative mx-auto mt-5 h-[235px] max-w-[300px] md:h-[430px] md:max-w-[430px] lg:h-[500px] lg:max-w-[520px]">
          <div class="absolute left-1 top-8 z-10 flex w-10 flex-col items-center gap-3 rounded-full bg-memora-ink px-2 py-3 md:left-2 md:top-20 md:w-12 md:gap-4 lg:left-4 lg:top-24 lg:w-14 lg:py-5">
            <button
              v-for="color in colors"
              :key="color.slug"
              :aria-label="color.name"
              class="h-5 w-5 rounded-full border-2 md:h-7 md:w-7 lg:h-8 lg:w-8"
              :class="selectedColor.slug === color.slug ? 'border-white' : 'border-transparent'"
              :style="{ backgroundColor: color.value }"
              @click="selectedColor = color"
            />
          </div>

          <div class="absolute bg-slate-400 -left-2 top-0 flex h-52 w-full items-center justify-center rounded-lg md:left-14 md:h-[390px] md:w-[360px] lg:left-20 lg:h-[460px] lg:w-[420px]">
            <img
              v-if="!imageHasError"
              :src="velachoicen.imageSrc"
              :alt="`${velachoicen.forma} ${velachoicen.color}`"
              class="object-contain  rounded-lg md:h-[350px] md:w-[330px] lg:h-[420px] lg:w-[390px]"
              @error="imageHasError = true"
            >
            <div v-else class="h-[170px] w-[185px] rounded-lg bg-neutral-200 md:h-[320px] md:w-[300px]" />
          </div>
        </div>
      </div>

      <div class="mx-auto w-full max-w-[340px] md:max-w-[380px] lg:max-w-[420px]">
        <h2 class="text-center font-brand text-2xl font-medium text-memora-violet md:text-3xl">Forma</h2>
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
              @click="selectedShape = shape"
            >
              <img :src="shape.iconSrc" alt="" class="h-8 w-8" aria-hidden="true">
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

        <button class="mt-4 w-full rounded bg-memora-ink px-4 py-3 text-lg font-bold text-white" @click="addToCart">
          Agregar al carrito
        </button>
      </div>
    </div>
  </section>
</template>
