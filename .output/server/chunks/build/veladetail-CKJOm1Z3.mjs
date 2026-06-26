import { _ as __nuxt_component_0 } from './nuxt-link-ynl9qrS-.mjs';
import __nuxt_component_1 from './index-DwcbW_k1.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, unref, ref, computed, watch, useSSRContext } from 'file://C:/Users/ACER/Documents/yo/memora/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrIncludeBooleanAttr, ssrInterpolate } from 'file://C:/Users/ACER/Documents/yo/memora/node_modules/vue/server-renderer/index.mjs';
import { U as UseDataEstore, u as useEssenceStore, _ as _sfc_main$2 } from './FloatingCartPopup-Bvp2-c9H.mjs';
import { storeToRefs } from 'file://C:/Users/ACER/Documents/yo/memora/node_modules/pinia/dist/pinia.prod.cjs';
import '../_/nitro.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CandleCustomizerFrame",
  __ssrInlineRender: true,
  props: {
    essences: {}
  },
  emits: ["add"],
  setup(__props, { emit: __emit }) {
    var _a;
    const props = __props;
    const colors = [
      { name: "Rosa", slug: "rosa", value: "#f4b4a8" },
      { name: "Verde", slug: "verde", value: "#8faf72" },
      { name: "Crema", slug: "crema", value: "#f7d99e" },
      { name: "Azul", slug: "azul", value: "#9fc9dc" }
    ];
    const shapes = [
      { name: "Quemador cl\xE1sico", slug: "quemador-clasico", iconSrc: "/images/velas/icons/quemador-clasico.svg" },
      { name: "Cilindro de burbujas", slug: "cilindro-burbujas", iconSrc: "/images/velas/icons/cilindro-burbujas.svg" },
      { name: "Quemador curvo", slug: "quemador-curvo", iconSrc: "/images/velas/icons/quemador-curvo.svg" },
      { name: "Cilindro de corazones", slug: "cilindro-corazones", iconSrc: "/images/velas/icons/cilindro-corazones.svg" },
      { name: "\xC1rbol floral", slug: "arbol-floral", iconSrc: "/images/velas/icons/arbol-floral.svg" },
      { name: "Quemador cuadrado", slug: "quemador-cuadrado", iconSrc: "/images/velas/icons/quemador-cuadrado.svg" },
      { name: "Cubo de burbujas", slug: "cubo-burbujas", iconSrc: "/images/velas/icons/cubo-burbujas.svg" },
      { name: "Caja de rosas", slug: "caja-rosas", iconSrc: "/images/velas/icons/caja-rosas.svg" },
      { name: "Oso floral", slug: "oso-floral", iconSrc: "/images/velas/icons/oso-floral.svg" },
      { name: "Cubo de flores", slug: "cubo-flores", iconSrc: "/images/velas/icons/cubo-flores.svg" }
    ];
    const selectedColor = ref(colors[3]);
    const selectedShape = ref(shapes[0]);
    const selectedEssence = ref((_a = props.essences[0]) != null ? _a : null);
    const imageHasError = ref(false);
    const isFragranceOpen = ref(false);
    ref(null);
    const canScrollShapesLeft = ref(false);
    const canScrollShapesRight = ref(true);
    const velachoicen = computed(() => {
      var _a2;
      const imageName = `/images/velas/vela${selectedShape.value.slug}${selectedColor.value.slug}.png`;
      return {
        color: selectedColor.value.name,
        colorSlug: selectedColor.value.slug,
        forma: selectedShape.value.name,
        formaSlug: selectedShape.value.slug,
        fragancia: ((_a2 = selectedEssence.value) == null ? void 0 : _a2.nombre) || "Esencias",
        imageName,
        imageSrc: imageName
      };
    });
    watch([selectedColor, selectedShape], () => {
      imageHasError.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_Icon = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mx-auto w-full max-w-5xl px-4 py-6 md:rounded-lg md:bg-[#F0FAFF] md:px-8 md:py-8 md:shadow-soft lg:max-w-6xl lg:px-12 lg:py-12" }, _attrs))}><div class="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14"><div><div class="relative mx-auto mt-5 h-[235px] max-w-[300px] md:h-[430px] md:max-w-[430px] lg:h-[500px] lg:max-w-[520px]"><div class="absolute left-1 top-8 z-10 flex w-10 flex-col items-center gap-3 rounded-full bg-memora-ink px-2 py-3 md:left-2 md:top-20 md:w-12 md:gap-4 lg:left-4 lg:top-24 lg:w-14 lg:py-5"><!--[-->`);
      ssrRenderList(colors, (color) => {
        _push(`<button${ssrRenderAttr("aria-label", color.name)} class="${ssrRenderClass([unref(selectedColor).slug === color.slug ? "border-white" : "border-transparent", "h-5 w-5 rounded-full border-2 md:h-7 md:w-7 lg:h-8 lg:w-8"])}" style="${ssrRenderStyle({ backgroundColor: color.value })}"></button>`);
      });
      _push(`<!--]--></div><div class="absolute bg-slate-400 -left-2 top-0 flex h-52 w-full items-center justify-center rounded-lg md:left-14 md:h-[390px] md:w-[360px] lg:left-20 lg:h-[460px] lg:w-[420px]">`);
      if (!unref(imageHasError)) {
        _push(`<img${ssrRenderAttr("src", unref(velachoicen).imageSrc)}${ssrRenderAttr("alt", `${unref(velachoicen).forma} ${unref(velachoicen).color}`)} class="object-contain rounded-lg md:h-[350px] md:w-[330px] lg:h-[420px] lg:w-[390px]">`);
      } else {
        _push(`<div class="h-[170px] w-[185px] rounded-lg bg-neutral-200 md:h-[320px] md:w-[300px]"></div>`);
      }
      _push(`</div></div></div><div class="mx-auto w-full max-w-[340px] md:max-w-[380px] lg:max-w-[420px]"><h2 class="text-center font-brand text-2xl font-medium text-memora-violet md:text-3xl">Forma</h2><div class="mt-3 grid grid-cols-[36px_minmax(0,1fr)_36px] items-center gap-1.5"><button class="flex h-9 w-9 items-center justify-center rounded-full bg-white text-memora-violet shadow-soft transition disabled:cursor-default disabled:opacity-30"${ssrIncludeBooleanAttr(!unref(canScrollShapesLeft)) ? " disabled" : ""} aria-label="Ver formas anteriores">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:caret-left-bold",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</button><div class="flex min-w-0 snap-x snap-mandatory gap-3 overflow-x-auto py-1 [scrollbar-width:none] [-ms-overflow-style:none] [&amp;::-webkit-scrollbar]:hidden md:gap-4"><!--[-->`);
      ssrRenderList(shapes, (shape) => {
        _push(`<button class="${ssrRenderClass([unref(selectedShape).slug === shape.slug ? "ring-2 ring-memora-violet" : "", "flex h-14 w-14 shrink-0 snap-start items-center justify-center rounded-full border border-[#d9a996] bg-white text-[#c78670]"])}"${ssrRenderAttr("aria-label", shape.name)}><img${ssrRenderAttr("src", shape.iconSrc)} alt="" class="h-8 w-8" aria-hidden="true"></button>`);
      });
      _push(`<!--]--></div><button class="flex h-9 w-9 items-center justify-center rounded-full bg-white text-memora-violet shadow-soft transition disabled:cursor-default disabled:opacity-30"${ssrIncludeBooleanAttr(!unref(canScrollShapesRight)) ? " disabled" : ""} aria-label="Ver formas siguientes">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:caret-right-bold",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</button></div><h2 class="mt-5 text-center font-brand text-2xl font-medium text-memora-violet md:text-3xl">Esencias</h2><div class="relative mt-2"><button class="flex w-full items-center justify-between rounded-full bg-memora-violet px-4 py-2 text-base font-bold text-white"><span>${ssrInterpolate(((_a2 = unref(selectedEssence)) == null ? void 0 : _a2.nombre) || "Selecciona una esencia")}</span>`);
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
      _push(`</div><button class="mt-4 w-full rounded bg-memora-ink px-4 py-3 text-lg font-bold text-white"> Agregar al carrito </button></div></div></section>`);
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
      const formaSlug = opciones.forma.toLowerCase().replaceAll(" ", "-");
      const colorSlug = opciones.color.toLowerCase();
      store.agregarAlCarrito({
        id: `vela-personalizada-${formaSlug}-${colorSlug}-${opciones.fragancia.toLowerCase().replaceAll(" ", "-")}`,
        nombre: `Vela + ${opciones.fragancia}`,
        descripcion: "Personaliza tu vela",
        precio: 36e3,
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
      _push(`<section class="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-12 lg:px-10 lg:py-16"><div class="mb-6 max-w-2xl md:mb-10 lg:max-w-3xl"><p class="text-base font-bold uppercase tracking-[0.22em] text-memora-violet">Color \xB7 Forma \xB7 Aroma</p><h1 class="mt-3 font-brand text-4xl font-bold text-memora-ink md:text-6xl"> Personaliza tu vela </h1></div>`);
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

export { _sfc_main as default };
//# sourceMappingURL=veladetail-CKJOm1Z3.mjs.map
