import { _ as __nuxt_component_0 } from "./nuxt-link-ynl9qrS-.js";
import __nuxt_component_1 from "./index-DwcbW_k1.js";
import { defineComponent, ref, computed, watch, mergeProps, unref, useSSRContext, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { U as UseDataEstore, u as useEssenceStore, _ as _sfc_main$2 } from "./FloatingCartPopup-Bvp2-c9H.js";
import { storeToRefs } from "pinia";
import "C:/Users/ACER/Documents/yo/memora/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "C:/Users/ACER/Documents/yo/memora/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/ACER/Documents/yo/memora/node_modules/hookable/dist/index.mjs";
import "C:/Users/ACER/Documents/yo/memora/node_modules/unctx/dist/index.mjs";
import "C:/Users/ACER/Documents/yo/memora/node_modules/h3/dist/index.mjs";
import "C:/Users/ACER/Documents/yo/memora/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "C:/Users/ACER/Documents/yo/memora/node_modules/klona/dist/index.mjs";
import "@iconify/vue";
import "C:/Users/ACER/Documents/yo/memora/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/utils/lib/css/icon";
import "C:/Users/ACER/Documents/yo/memora/node_modules/perfect-debounce/dist/index.mjs";
const candleModels = [
  {
    "name": "Quemador clásico",
    "slug": "quemador-clasico",
    "price": null
  },
  {
    "name": "Cilindro de burbujas",
    "slug": "cilindro-burbujas",
    "price": 39e3
  },
  {
    "name": "Quemador curvo",
    "slug": "quemador-curvo",
    "price": null
  },
  {
    "name": "Cilindro de corazones",
    "slug": "cilindro-corazones",
    "price": 22e3
  },
  {
    "name": "Árbol floral",
    "slug": "arbol-floral",
    "price": 23e3
  },
  {
    "name": "Quemador cuadrado",
    "slug": "quemador-cuadrado",
    "price": null
  },
  {
    "name": "Cubo de burbujas",
    "slug": "cubo-burbujas",
    "price": null
  },
  {
    "name": "Caja de rosas",
    "slug": "caja-rosas",
    "price": 22e3
  },
  {
    "name": "Oso floral con moño",
    "slug": "oso-floral",
    "price": 19e3
  },
  {
    "name": "Cubo de flores",
    "slug": "cubo-flores",
    "price": 22e3
  },
  {
    "name": "Virgen con Niño",
    "slug": "virgen-con-nino",
    "price": 75e3
  },
  {
    "name": "Sagrada Familia doble",
    "slug": "sagrada-familia-doble",
    "price": 4e4
  },
  {
    "name": "Sagrada Familia católica",
    "slug": "sagrada-familia-catolica",
    "price": 21e3
  },
  {
    "name": "Ramo margarita girasol",
    "slug": "ramo-margarita-girasol",
    "price": 15e3
  },
  {
    "name": "Ramo de tulipanes",
    "slug": "ramo-tulipanes",
    "price": 11e3
  },
  {
    "name": "Ramo de tulipanes grande",
    "slug": "ramo-tulipanes-grande",
    "price": 22e3
  },
  {
    "name": "Pastel de crema",
    "slug": "pastel-crema",
    "price": 12e3
  },
  {
    "name": "Corazones apilados",
    "slug": "corazones-apilados",
    "price": 12e3
  },
  {
    "name": "Flor de loto",
    "slug": "flor-loto",
    "price": 23e3
  },
  {
    "name": "Burbujas redondo",
    "slug": "burbujas-redondo",
    "price": 28e3
  },
  {
    "name": "Burbujas mediana",
    "slug": "burbujas-mediana",
    "price": 28e3
  },
  {
    "name": "Virgen María rezando",
    "slug": "virgen-rezando",
    "price": 13e3
  },
  {
    "name": "Ovejita con corbatín",
    "slug": "ovejita-corbatin",
    "price": 18e3
  },
  {
    "name": "Oso floral con corazón",
    "slug": "oso-corazon",
    "price": 19e3
  },
  {
    "name": "Oso con globos",
    "slug": "oso-globos",
    "price": 12e3
  },
  {
    "name": "Balón de fútbol",
    "slug": "balon-futbol",
    "price": 12e3
  },
  {
    "name": "Jardín de suculentas",
    "slug": "jardin-suculentas",
    "price": 35e3
  },
  {
    "name": "Ramo de peonías",
    "slug": "ramo-peonias",
    "price": 45e3
  },
  {
    "name": "Papá Noel manzana",
    "slug": "papa-noel-manzana",
    "price": 42e3
  },
  {
    "name": "Gnomo tímido",
    "slug": "gnomo-timido",
    "price": 4e4
  },
  {
    "name": "Gnomo con regalos",
    "slug": "gnomo-regalos",
    "price": 4e4
  },
  {
    "name": "Cesta de hortensia",
    "slug": "cesta-hortensia",
    "price": 42e3
  },
  {
    "name": "Calabaza Halloween",
    "slug": "calabaza-halloween",
    "price": 16e3
  },
  {
    "name": "Flor de frangipani triple",
    "slug": "frangipani-triple",
    "price": 3e3,
    "note": "Decoración aromatizada sin mecha."
  },
  {
    "name": "Geométrica flor alta",
    "slug": "geometrica-flor-alta",
    "price": 21e3
  },
  {
    "name": "Geométrica flor mediana",
    "slug": "geometrica-flor-mediana",
    "price": 21e3
  },
  {
    "name": "Geométrica luna alta",
    "slug": "geometrica-luna-alta",
    "price": 21e3
  },
  {
    "name": "Geométrica estrella alta",
    "slug": "geometrica-estrella-alta",
    "price": 21e3
  },
  {
    "name": "Geométrica estrella baja",
    "slug": "geometrica-estrella-baja",
    "price": 21e3
  },
  {
    "name": "Geométrica pirámide",
    "slug": "geometrica-piramide",
    "price": 21e3
  },
  {
    "name": "Geométrica cristal",
    "slug": "geometrica-cristal",
    "price": 21e3
  },
  {
    "name": "Geométrica luna baja",
    "slug": "geometrica-luna-baja",
    "price": 21e3
  },
  {
    "name": "Vaso grande · 5,5 × 6 cm",
    "slug": "vaso-grande",
    "price": 2e4
  },
  {
    "name": "Vaso mediano · 4,5 × 4 cm",
    "slug": "vaso-mediano",
    "price": 10500
  },
  {
    "name": "Vaso pequeño · 4 × 2,5 cm",
    "slug": "vaso-pequeno",
    "price": 6e3
  },
  {
    "name": "Vaso mini · 3,5 × 1,8 cm",
    "slug": "vaso-mini",
    "price": 4e3
  }
];
const candleColors = [
  {
    "name": "Rosa",
    "slug": "rosa",
    "value": "#f4b4a8"
  },
  {
    "name": "Verde",
    "slug": "verde",
    "value": "#8faf72"
  },
  {
    "name": "Crema",
    "slug": "crema",
    "value": "#f7d99e"
  },
  {
    "name": "Azul",
    "slug": "azul",
    "value": "#9fc9dc"
  },
  {
    "name": "Rojo",
    "slug": "rojo",
    "value": "#d43f3a"
  },
  {
    "name": "Naranja",
    "slug": "naranja",
    "value": "#ef9848"
  }
];
const candleImage = (modelSlug, colorSlug) => `/images/velas/vela${modelSlug}${colorSlug}.png`;
const formatCandlePrice = (price) => new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0
}).format(price);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CandleCustomizerFrame",
  __ssrInlineRender: true,
  props: {
    essences: {}
  },
  emits: ["add"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const colors = candleColors;
    const shapes = candleModels;
    const selectedColor = ref(colors[3]);
    const selectedShape = ref(shapes[1]);
    const selectedEssence = ref(props.essences[0] ?? null);
    const imageHasError = ref(false);
    const isFragranceOpen = ref(false);
    ref(null);
    const canScrollShapesLeft = ref(false);
    const canScrollShapesRight = ref(true);
    const velachoicen = computed(() => {
      const imageName = candleImage(selectedShape.value.slug, selectedColor.value.slug);
      return {
        color: selectedColor.value.name,
        colorSlug: selectedColor.value.slug,
        forma: selectedShape.value.name,
        formaSlug: selectedShape.value.slug,
        fragancia: selectedEssence.value?.nombre || "Esencias",
        imageName,
        imageSrc: imageName
      };
    });
    watch([selectedColor, selectedShape], () => {
      imageHasError.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mx-auto w-full max-w-5xl px-4 py-6 md:rounded-lg md:bg-[#F0FAFF] md:px-8 md:py-8 md:shadow-soft lg:max-w-6xl lg:px-12 lg:py-12" }, _attrs))}><div class="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14"><div><div class="relative mx-auto mt-5 w-full max-w-[500px] pl-12 md:pl-16"><div class="absolute left-0 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center gap-3 rounded-full bg-memora-ink px-2 py-3 md:gap-4"><!--[-->`);
      ssrRenderList(unref(colors), (color) => {
        _push(`<button${ssrRenderAttr("aria-label", color.name)}${ssrRenderAttr("aria-pressed", unref(selectedColor).slug === color.slug)}${ssrRenderAttr("title", color.name)} class="${ssrRenderClass([unref(selectedColor).slug === color.slug ? "border-white" : "border-transparent", "h-6 w-6 rounded-full border-2 md:h-7 md:w-7"])}" style="${ssrRenderStyle({ backgroundColor: color.value })}"></button>`);
      });
      _push(`<!--]--></div><div class="flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-200">`);
      if (!unref(imageHasError)) {
        _push(`<img${ssrRenderAttr("src", unref(velachoicen).imageSrc)}${ssrRenderAttr("alt", `${unref(velachoicen).forma} ${unref(velachoicen).color}`)} width="627" height="627" class="h-full w-full object-contain">`);
      } else {
        _push(`<p class="px-6 text-center text-sm">No se pudo cargar la imagen. Prueba otro color.</p>`);
      }
      _push(`</div></div></div><div class="mx-auto w-full max-w-[340px] md:max-w-[380px] lg:max-w-[420px]"><h2 class="text-center font-brand text-2xl font-medium text-memora-violet md:text-3xl">Forma</h2><label for="candle-model" class="sr-only">Selecciona un modelo</label><select id="candle-model" class="mt-3 w-full rounded-lg border border-memora-violet/30 bg-white px-3 py-2 text-memora-deep"><!--[-->`);
      ssrRenderList(unref(shapes), (shape) => {
        _push(`<option${ssrRenderAttr("value", shape)}${ssrIncludeBooleanAttr(Array.isArray(unref(selectedShape)) ? ssrLooseContain(unref(selectedShape), shape) : ssrLooseEqual(unref(selectedShape), shape)) ? " selected" : ""}>${ssrInterpolate(shape.name)}</option>`);
      });
      _push(`<!--]--></select><div class="mt-3 grid grid-cols-[36px_minmax(0,1fr)_36px] items-center gap-1.5"><button class="flex h-9 w-9 items-center justify-center rounded-full bg-white text-memora-violet shadow-soft transition disabled:cursor-default disabled:opacity-30"${ssrIncludeBooleanAttr(!unref(canScrollShapesLeft)) ? " disabled" : ""} aria-label="Ver formas anteriores">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:caret-left-bold",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</button><div class="flex min-w-0 snap-x snap-mandatory gap-3 overflow-x-auto py-1 [scrollbar-width:none] [-ms-overflow-style:none] [&amp;::-webkit-scrollbar]:hidden md:gap-4"><!--[-->`);
      ssrRenderList(unref(shapes), (shape) => {
        _push(`<button class="${ssrRenderClass([unref(selectedShape).slug === shape.slug ? "ring-2 ring-memora-violet" : "", "flex h-14 w-14 shrink-0 snap-start items-center justify-center rounded-full border border-[#d9a996] bg-white text-[#c78670]"])}"${ssrRenderAttr("aria-label", shape.name)}${ssrRenderAttr("aria-pressed", unref(selectedShape).slug === shape.slug)}${ssrRenderAttr("title", shape.name)}><img${ssrRenderAttr("src", unref(candleImage)(shape.slug, "rosa"))} alt="" class="h-12 w-12 rounded-full object-cover" loading="lazy" aria-hidden="true"></button>`);
      });
      _push(`<!--]--></div><button class="flex h-9 w-9 items-center justify-center rounded-full bg-white text-memora-violet shadow-soft transition disabled:cursor-default disabled:opacity-30"${ssrIncludeBooleanAttr(!unref(canScrollShapesRight)) ? " disabled" : ""} aria-label="Ver formas siguientes">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:caret-right-bold",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</button></div><div class="mt-4 text-center" aria-live="polite"><p class="font-bold text-memora-deep">${ssrInterpolate(unref(selectedShape).name)}</p><p class="mt-1 text-2xl font-bold text-memora-violet">${ssrInterpolate(unref(selectedShape).price === null ? "Precio por confirmar" : unref(formatCandlePrice)(unref(selectedShape).price))}</p>`);
      if (unref(selectedShape).note) {
        _push(`<p class="mt-1 text-sm">${ssrInterpolate(unref(selectedShape).note)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><h2 class="mt-5 text-center font-brand text-2xl font-medium text-memora-violet md:text-3xl">Esencias</h2><div class="relative mt-2"><button class="flex w-full items-center justify-between rounded-full bg-memora-violet px-4 py-2 text-base font-bold text-white"><span>${ssrInterpolate(unref(selectedEssence)?.nombre || "Selecciona una esencia")}</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:caret-down-bold",
        class: "h-4 w-4"
      }, null, _parent));
      _push(`</button>`);
      if (unref(isFragranceOpen)) {
        _push(`<div class="absolute left-0 right-0 z-20 rounded-b-2xl bg-memora-violet px-4 pb-3 text-white shadow-soft md:max-h-80 md:overflow-y-auto"><!--[-->`);
        ssrRenderList(props.essences, (essence) => {
          _push(`<button class="block w-full border-b border-white/30 py-2 text-left text-lg"><span class="font-bold">${ssrInterpolate(essence.nombre)}</span><span class="mt-1 block text-sm text-white/80">${ssrInterpolate(essence.notas)}</span></button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button${ssrIncludeBooleanAttr(unref(selectedShape).price === null) ? " disabled" : ""} class="mt-4 w-full rounded bg-memora-ink px-4 py-3 text-lg font-bold text-white disabled:cursor-not-allowed disabled:opacity-50">${ssrInterpolate(unref(selectedShape).price === null ? "Precio pendiente de confirmar" : "Agregar al carrito")}</button></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/CandleCustomizerFrame.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "veladetail",
  __ssrInlineRender: true,
  setup(__props) {
    const store = UseDataEstore();
    const essenceStore = useEssenceStore();
    const { essences } = storeToRefs(essenceStore);
    const agregarPersonalizada = (opciones) => {
      const model = candleModels.find((item) => item.slug === opciones.formaSlug);
      if (!model || model.price === null) return;
      const formaSlug = model.slug;
      const colorSlug = opciones.color.toLowerCase();
      store.agregarAlCarrito({
        id: `vela-personalizada-${formaSlug}-${colorSlug}-${opciones.fragancia.toLowerCase().replaceAll(" ", "-")}`,
        nombre: `${model.name} + ${opciones.fragancia}`,
        descripcion: "Personaliza tu vela",
        precio: model.price,
        imagen: opciones.imagen,
        opciones: {
          color: opciones.color,
          forma: opciones.forma,
          fragancia: opciones.fragancia
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-memora-mist text-memora-deep" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "fixed left-4 top-4 z-50 flex h-11 items-center gap-2 rounded-full bg-white px-4 font-bold text-memora-violet shadow-soft transition hover:bg-memora-violet hover:text-white md:left-8 md:top-6",
        "aria-label": "Volver al inicio"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:arrow-left-bold",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Volver</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:arrow-left-bold",
                class: "h-5 w-5"
              }),
              createVNode("span", null, "Volver")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<section class="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-12 lg:px-10 lg:py-16"><div class="mb-6 max-w-2xl md:mb-10 lg:max-w-3xl"><p class="text-base font-bold uppercase tracking-[0.22em] text-memora-violet">Color · Forma · Aroma</p><h1 class="mt-3 font-brand text-4xl font-bold text-memora-ink md:text-6xl"> Personaliza tu vela </h1></div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        essences: unref(essences),
        onAdd: agregarPersonalizada
      }, null, _parent));
      _push(`</section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/veladetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=veladetail-6Iq6c5Na.js.map
