import { defineStore } from 'pinia'

export type CandleOption = {
  color: string
  forma: string
  fragancia: string
}

export type CartItem = {
  id: string
  nombre: string
  descripcion: string
  precio: number
  cantidad: number
  imagen?: string
  opciones?: CandleOption
}

export const UseDataEstore = defineStore('memora-cart', {
  state: () => ({
    carrito: [] as CartItem[]
  }),

  getters: {
    ventaTotal: (state) =>
      state.carrito.reduce((total, item) => total + item.precio * item.cantidad, 0),
    totalProductos: (state) =>
      state.carrito.reduce((total, item) => total + item.cantidad, 0)
  },

  actions: {
    agregarAlCarrito(producto: Omit<CartItem, 'cantidad'>, cantidad = 1) {
      const itemExistente = this.carrito.find((item) => item.id === producto.id)

      if (itemExistente) {
        itemExistente.cantidad += cantidad
        return
      }

      this.carrito.push({
        ...producto,
        cantidad
      })
    },

    eliminarDelCarrito(id: string) {
      this.carrito = this.carrito.filter((item) => item.id !== id)
    },

    actualizarCantidad(id: string, cantidad: number) {
      const item = this.carrito.find((producto) => producto.id === id)

      if (!item) return

      item.cantidad = Math.max(1, cantidad)
    },

    vaciarCarrito() {
      this.carrito = []
    }
  }
})
