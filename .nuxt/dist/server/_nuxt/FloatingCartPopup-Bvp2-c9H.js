import { defineStore, storeToRefs } from "pinia";
import __nuxt_component_1 from "./index-DwcbW_k1.js";
import { defineComponent, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderTeleport, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const UseDataEstore = defineStore("memora-cart", {
  state: () => ({
    carrito: []
  }),
  getters: {
    ventaTotal: (state) => state.carrito.reduce((total, item) => total + item.precio * item.cantidad, 0),
    totalProductos: (state) => state.carrito.reduce((total, item) => total + item.cantidad, 0)
  },
  actions: {
    agregarAlCarrito(producto, cantidad = 1) {
      const itemExistente = this.carrito.find((item) => item.id === producto.id);
      if (itemExistente) {
        itemExistente.cantidad += cantidad;
        return;
      }
      this.carrito.push({
        ...producto,
        cantidad
      });
    },
    eliminarDelCarrito(id) {
      this.carrito = this.carrito.filter((item) => item.id !== id);
    },
    actualizarCantidad(id, cantidad) {
      const item = this.carrito.find((producto) => producto.id === id);
      if (!item) return;
      item.cantidad = Math.max(1, cantidad);
    },
    vaciarCarrito() {
      this.carrito = [];
    }
  }
});
const categoryStyles = {
  Caballero: { color: "#3D6670", icono: "ph:compass" },
  Florales: { color: "#B287A3", icono: "ph:flower-lotus" },
  Mujer: { color: "#C47791", icono: "ph:crown" },
  Goutmant: { color: "#B88455", icono: "ph:cookie" },
  Frutales: { color: "#D17A68", icono: "ph:orange-slice" }
};
const createEssence = (id, nombre, categoria) => ({
  id,
  nombre,
  categoria,
  descripcion: `Esencia ${nombre} de la familia ${categoria}.`,
  notas: categoria,
  color: categoryStyles[categoria].color,
  icono: categoryStyles[categoria].icono
});
const useEssenceStore = defineStore("memora-essences", {
  state: () => ({
    essences: [
      createEssence("todoterreno", "Todoterreno", "Caballero"),
      createEssence("senda-salvaje", "Senda salvaje", "Caballero"),
      createEssence("agua-de-rossi", "Agua de Rossi", "Florales"),
      createEssence("lavanda-inglesa", "Lavanda inglesa", "Florales"),
      createEssence("reina", "Reina", "Mujer"),
      createEssence("dulce-carnaval", "Dulce carnaval", "Mujer"),
      createEssence("canela", "Canela", "Goutmant"),
      createEssence("yogurt-de-fresa", "Yogurt de fresa", "Goutmant"),
      createEssence("coffe-toffee", "Coffe toffee", "Goutmant"),
      createEssence("crema-de-limon", "Crema de limón", "Goutmant"),
      createEssence("arequipe", "Arequipe", "Goutmant"),
      createEssence("honey-love", "Honey Love", "Goutmant"),
      createEssence("pop-corn", "Pop Corn", "Goutmant"),
      createEssence("banana-split", "Banana split", "Frutales"),
      createEssence("dulce-tentacion", "Dulce tentación", "Frutales"),
      createEssence("fruto-salvaje", "Fruto salvaje", "Frutales"),
      createEssence("cherry-amour", "Cherry Amour", "Frutales"),
      createEssence("limon-siciliano", "Limón Siciliano", "Frutales"),
      createEssence("naranja-radiante", "Naranja radiante", "Frutales"),
      createEssence("pineapple-candy", "Pineapple candy", "Frutales")
    ]
  }),
  getters: {
    essencesByCategory: (state) => state.essences.reduce((groups, essence) => {
      if (!groups[essence.categoria]) groups[essence.categoria] = [];
      groups[essence.categoria].push(essence);
      return groups;
    }, {})
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FloatingCartPopup",
  __ssrInlineRender: true,
  setup(__props) {
    const store = UseDataEstore();
    const { carrito, totalProductos, ventaTotal } = storeToRefs(store);
    const isOpen = ref(false);
    const money = (value) => new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0
    }).format(value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<!--[--><div class="fixed right-4 top-4 z-50 md:right-8 md:top-6"><button class="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-memora-mist bg-memora-violet text-white shadow-soft drop-shadow-md" aria-label="Carrito">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:shopping-cart-simple-bold",
        class: "h-6 w-6"
      }, null, _parent));
      if (unref(totalProductos)) {
        _push(`<span class="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-red-500"></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(isOpen)) {
          _push2(`<div class="fixed inset-0 z-[100] flex items-center justify-center bg-memora-ink/35 backdrop-blur-sm"><section class="relative flex h-[60vh] w-[70vw] flex-col overflow-hidden rounded-2xl bg-memora-violet p-5 text-white shadow-soft md:h-[65vh] md:w-[65vw] md:p-8 lg:w-[55vw] xl:max-w-[900px]"><button class="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-memora-violet" aria-label="Cerrar carrito">`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: "ph:x-bold",
            class: "h-5 w-5"
          }, null, _parent));
          _push2(`</button>`);
          if (!unref(carrito).length) {
            _push2(`<div class="flex flex-1 flex-col items-center justify-center text-center"><div class="relative flex h-36 w-36 items-center justify-center rounded-full bg-white/15"><div class="flex h-24 w-24 items-center justify-center rounded-full bg-white text-memora-violet shadow-soft">`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:shopping-bag-open-duotone",
              class: "h-14 w-14"
            }, null, _parent));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:sparkle-fill",
              class: "absolute -right-1 top-5 h-7 w-7 text-memora-blush"
            }, null, _parent));
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:sparkle-fill",
              class: "absolute bottom-5 left-0 h-5 w-5 text-memora-mist"
            }, null, _parent));
            _push2(`</div><p class="mt-6 text-3xl font-semibold text-white">Carrito vacío</p></div>`);
          } else {
            _push2(`<div class="flex min-h-0 flex-1 flex-col"><h2 class="pr-14 text-3xl font-semibold">Tu carrito</h2><div class="mt-5 min-h-0 flex-1 space-y-3 overflow-y-auto pr-2"><!--[-->`);
            ssrRenderList(unref(carrito), (item) => {
              _push2(`<article class="rounded-lg bg-white/95 p-3 text-memora-ink"><div class="grid grid-cols-[76px_1fr_auto] items-center gap-3"><div class="flex h-[68px] w-[68px] items-center justify-center overflow-hidden rounded-lg bg-memora-mist">`);
              if (item.imagen) {
                _push2(`<img${ssrRenderAttr("src", item.imagen)}${ssrRenderAttr("alt", item.nombre)} class="h-full w-full object-cover">`);
              } else {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ph:flame-duotone",
                  class: "h-8 w-8 text-memora-violet"
                }, null, _parent));
              }
              _push2(`</div><div class="min-w-0"><p class="truncate text-base font-bold">${ssrInterpolate(item.nombre)}</p>`);
              if (item.opciones) {
                _push2(`<div class="mt-1.5 flex flex-wrap gap-1.5"><span class="rounded-full bg-[#F8D9DF] px-2.5 py-1 text-sm text-[#794052]">${ssrInterpolate(item.opciones.color)}</span><span class="rounded-full bg-[#DDEED8] px-2.5 py-1 text-sm text-[#3F6543]">${ssrInterpolate(item.opciones.forma)}</span></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<p class="text-sm text-memora-deep/70">${ssrInterpolate(item.cantidad)} x ${ssrInterpolate(money(item.precio))}</p></div><button class="text-memora-violet" aria-label="Eliminar">`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:x-circle",
                class: "h-6 w-6"
              }, null, _parent));
              _push2(`</button></div></article>`);
            });
            _push2(`<!--]--></div><div class="mt-5 flex items-center justify-between border-t border-white/30 pt-4 text-xl font-bold"><span>Total</span><span>${ssrInterpolate(money(unref(ventaTotal)))}</span></div><button class="mt-4 w-full rounded-lg bg-white px-4 py-3 text-lg font-bold text-memora-violet"> Confirmar compra </button></div>`);
          }
          _push2(`</section></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/FloatingCartPopup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  UseDataEstore as U,
  _sfc_main as _,
  useEssenceStore as u
};
//# sourceMappingURL=FloatingCartPopup-Bvp2-c9H.js.map
