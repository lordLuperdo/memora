import { c as buildAssetsURL } from '../_/nitro.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-ynl9qrS-.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'file://C:/Users/ACER/Documents/yo/memora/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'file://C:/Users/ACER/Documents/yo/memora/node_modules/vue/server-renderer/index.mjs';
import { U as UseDataEstore, u as useEssenceStore, _ as _sfc_main$4 } from './FloatingCartPopup-Bvp2-c9H.mjs';
import { storeToRefs } from 'file://C:/Users/ACER/Documents/yo/memora/node_modules/pinia/dist/pinia.prod.cjs';
import __nuxt_component_1 from './index-DwcbW_k1.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/ACER/Documents/yo/memora/node_modules/@iconify/utils/lib/index.mjs';
import 'node:crypto';
import 'file://C:/Users/ACER/Documents/yo/memora/node_modules/consola/dist/index.mjs';
import 'node:path';
import './server.mjs';
import 'file://C:/Users/ACER/Documents/yo/memora/node_modules/vue-router/vue-router.node.mjs';
import 'file://C:/Users/ACER/Documents/yo/memora/node_modules/@iconify/vue/dist/iconify.mjs';
import '../routes/renderer.mjs';
import 'file://C:/Users/ACER/Documents/yo/memora/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/ACER/Documents/yo/memora/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/ACER/Documents/yo/memora/node_modules/devalue/index.js';
import 'file://C:/Users/ACER/Documents/yo/memora/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/ACER/Documents/yo/memora/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/ACER/Documents/yo/memora/node_modules/@iconify/utils/lib/css/icon.mjs';
import 'file://C:/Users/ACER/Documents/yo/memora/node_modules/perfect-debounce/dist/index.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "EssenceCard",
  __ssrInlineRender: true,
  props: {
    nombre: {},
    descripcion: {},
    notas: {},
    color: {},
    icono: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "overflow-hidden rounded-lg bg-white shadow-soft md:flex md:h-full md:flex-col" }, _attrs))}><div class="flex h-36 items-center justify-center md:h-44 lg:h-48" style="${ssrRenderStyle({ backgroundColor: `${__props.color}22` })}"><div class="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm" style="${ssrRenderStyle({ color: __props.color })}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: __props.icono,
        class: "h-10 w-10"
      }, null, _parent));
      _push(`</div></div><div class="p-5 md:flex md:flex-1 md:flex-col md:p-6"><p class="text-sm font-semibold uppercase text-memora-violet">${ssrInterpolate(__props.notas)}</p><h3 class="mt-2 text-2xl font-bold text-memora-ink">${ssrInterpolate(__props.nombre)}</h3><p class="mt-3 text-lg leading-relaxed text-memora-deep/70">${ssrInterpolate(__props.descripcion)}</p></div></article>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/EssenceCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const vela = "" + buildAssetsURL("memorahh1.B915DiRk.png");
const moras = "" + buildAssetsURL("moras.CpA5oUiD.png");
const logo = "" + buildAssetsURL("logo.QdU6F2XL.png");
const cereza = "" + buildAssetsURL("cerezas.B872_Fdr.png");
const granos = "" + buildAssetsURL("granos.ZT66zk_6.png");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "OfferCard",
  __ssrInlineRender: true,
  props: {
    price: {}
  },
  emits: ["add"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative h-full w-full overflow-hidden bg-gradient-to-b from-memora-mist via-[#E5F4F8] to-[#F0FAFF] px-4 pb-10 pt-5 sm:px-6 md:min-h-screen md:px-10 md:py-10 lg:px-14" }, _attrs))}><div class="pointer-events-none absolute -left-40 -top-40 h-63 w-63 rounded-full"><img${ssrRenderAttr("src", unref(moras))} class="" alt=""></div><div class="pointer-events-none absolute -right-40 -top-40 h-63 w-63 rounded-full"><img${ssrRenderAttr("src", unref(moras))} class="scale-x-[-1]" alt=""></div><div class="md:mx-auto md:min-h-[calc(100vh-5rem)] md:max-w-6xl md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-x-10 lg:gap-x-16"><div class="flex justify-center items-center px-24 md:col-start-1 md:row-start-1 md:px-10 lg:px-16"><img${ssrRenderAttr("src", unref(logo))} class="max-w-full lg:w-60" alt=""></div><div class="mx-auto mt-4 w-fit rounded bg-memora-violet px-5 py-1 text-center text-2xl text-memora-mist font-semibold md:col-start-1 md:row-start-2 md:text-3xl lg:text-6xl"> Oferta de la semana </div><p class="mx-auto mt-2 max-w-[260px] text-center text-lg font-bold text-memora-deep md:col-start-1 md:row-start-3 md:max-w-md md:text-xl"> Nuestra vela memora esta al alcance no te la pierdas. </p><div class="relative mx-auto mt-4 flex h-64 max-w-[300px] items-center justify-center md:col-start-2 md:row-span-4 md:row-start-1 md:mt-0 md:h-[400px] md:max-w-[440px] lg:h-[460px]"><div class="absolute left-1/2 top-7 z-0 h-44 w-44 -translate-x-1/2 rounded-full bg-memora-ink md:top-16 md:h-60 md:w-60"></div><img${ssrRenderAttr("src", unref(granos))} alt="" class="pointer-events-none absolute left-16 -top-0 z-0 w-20 -rotate-12 md:-left-10 md:top-16 md:w-28"><div class="absolute -left-4 -rotate-12 top-14 h-22 w-22 rounded-full bg-mmora-rose z-20 md:-left-10 md:top-56 md:h-32 md:w-32"><img${ssrRenderAttr("src", unref(cereza))} alt="" class=""></div><div class="absolute right-5 top-10 h-10 w-10 rounded-full bg-memora-ose z-0 md:-right-10 md:top-28 md:h-20 md:w-20"><img${ssrRenderAttr("src", unref(cereza))} alt="" class=""></div><div class="relative z-10 h-56 rounded-b-3xl rounded-t-lg"><img${ssrRenderAttr("src", unref(vela))} class="relative h-48 -rotate-12 md:h-64" alt=""></div><span class="absolute bottom-16 -right-0 rounded-full z-20 bg-memora-blush px-3 py-1 text-lg font-bold text-memora-violet md:bottom-16 md:-right-20 md:px-5 md:py-2 md:text-2xl">${ssrInterpolate(new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(__props.price))}</span></div><div class="mt-4 flex justify-center gap-2 md:col-start-1 md:row-start-4 md:mt-8 md:flex-wrap"><button class="rounded bg-memora-violet px-4 py-2 text-lg font-bold text-white"> Agregar al carrito </button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/veladetail",
        class: "rounded border border-memora-violet px-4 py-2 text-lg font-bold text-memora-violet"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Conocer m\xE1s `);
          } else {
            return [
              createTextVNode(" Conocer m\xE1s ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/OfferCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PersonalizerCard",
  __ssrInlineRender: true,
  setup(__props) {
    const steps = ["Color", "Forma", "Aroma"];
    const featuredCandles = [
      { src: "/images/velas/velacubo-floresrosa.png", alt: "Vela cubo floral rosa" },
      { src: "/images/velas/velaarbol-floralverde.png", alt: "Vela \xE1rbol floral verde" },
      { src: "/images/velas/velacilindro-corazonescrema.png", alt: "Vela cilindro de corazones crema" },
      { src: "/images/velas/velaoso-floralazul.png", alt: "Vela oso floral azul" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "personaliza",
        class: "bg-memora-ink rounded-xl px-4 py-5 text-white md:mx-auto md:max-w-5xl md:px-10 md:py-10 lg:max-w-6xl lg:px-14"
      }, _attrs))}><h2 class="text-center font-brand text-2xl font-semibold">Personaliza tu vela</h2><div class="mt-3 grid grid-cols-4 gap-2 md:mx-auto md:mt-6 md:max-w-4xl md:gap-4"><!--[-->`);
      ssrRenderList(featuredCandles, (candle) => {
        _push(`<div class="h-20 overflow-hidden rounded bg-memora-wax md:h-32 lg:h-40"><img${ssrRenderAttr("src", candle.src)}${ssrRenderAttr("alt", candle.alt)} class="h-full w-full object-cover transition duration-300 hover:scale-105" loading="lazy" decoding="async"></div>`);
      });
      _push(`<!--]--></div><p class="mx-auto mt-3 max-w-[240px] text-center font-bold text-lg leading-relaxed text-white/90 md:mt-6 md:max-w-2xl md:text-xl"> Convierte tu espacio en algo unico, algo que sea solo tuyo. </p><div class="mt-3 flex justify-center gap-2 md:mt-5 md:gap-4"><!--[-->`);
      ssrRenderList(steps, (step) => {
        _push(`<span class="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold">${ssrInterpolate(step)}</span>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/veladetail",
        class: "mx-auto font-extrabold mt-4 block w-fit rounded bg-memora-mist px-7 py-2 text-lg text-memora-ink md:mt-6 md:px-10 md:py-3 md:text-xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Empieza a personalizar `);
          } else {
            return [
              createTextVNode(" Empieza a personalizar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/PersonalizerCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const store = UseDataEstore();
    const essenceStore = useEssenceStore();
    const { essences } = storeToRefs(essenceStore);
    const selectedCategory = ref("Todas");
    const essenceCategories = computed(() => [
      "Todas",
      ...new Set(essences.value.map((essence) => essence.categoria))
    ]);
    const filteredEssences = computed(() => {
      if (selectedCategory.value === "Todas") return essences.value;
      return essences.value.filter((essence) => essence.categoria === selectedCategory.value);
    });
    const oferta = {
      id: "vela-cereza-semana",
      nombre: "Oferta de la semana",
      descripcion: "Nuestra vela memora esta al alcance no te la pierdas.",
      precio: 3e4
    };
    const agregarOferta = () => {
      store.agregarAlCarrito(oferta);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#F0FAFF] text-memora-deep" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`<section class="relative w-full overflow-hidden bg-[#F0FAFF] md:min-h-screen"><div class="grid w-full items-center gap-10 md:min-h-screen md:block"><div id="oferta" class="w-full max-w-full md:min-h-screen">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        price: oferta.precio,
        onAdd: agregarOferta
      }, null, _parent));
      _push(`</div></div></section><section id="personaliza" class="-mt-px bg-[#F0FAFF] px-4 md:px-8 md:py-12 lg:px-12 lg:py-16">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</section><section id="catalogo" class="-mt-px bg-[#F0FAFF] py-14"><div class="mx-auto max-w-6xl px-5 md:px-8 lg:px-12"><div class="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p class="text-base font-bold uppercase tracking-[0.22em] text-memora-violet">MEMORA</p><h2 class="mt-3 font-brand text-4xl font-bold text-memora-ink md:text-6xl"> Conoce nuestras esencias </h2></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/veladetail",
        class: "w-fit rounded border border-memora-ink px-5 py-3 text-base font-bold text-memora-ink"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Empieza a personalizar `);
          } else {
            return [
              createTextVNode(" Empieza a personalizar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-8 flex snap-x gap-3 overflow-x-auto pb-3 md:flex-wrap md:justify-center md:overflow-visible"><!--[-->`);
      ssrRenderList(unref(essenceCategories), (category) => {
        _push(`<button class="${ssrRenderClass([unref(selectedCategory) === category ? "border-memora-violet bg-memora-violet text-white" : "border-memora-violet bg-white text-memora-violet", "shrink-0 snap-start rounded-full border px-5 py-2 text-base font-bold transition-colors"])}">${ssrInterpolate(category)}</button>`);
      });
      _push(`<!--]--></div><div class="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"><!--[-->`);
      ssrRenderList(unref(filteredEssences), (essence) => {
        _push(ssrRenderComponent(_sfc_main$3, {
          key: essence.id,
          nombre: essence.nombre,
          descripcion: essence.descripcion,
          notas: essence.notas,
          color: essence.color,
          icono: essence.icono
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index--VhRM2HG.mjs.map
