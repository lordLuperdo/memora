import type { CartItem } from '~/store/store'

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(value)

export const useWhatsappCart = () => {
  const crearMensajeCarrito = (carrito: CartItem[], ventaTotal: number) => {
    const detalle = carrito
      .map((item, index) => {
        const nombre = item.opciones ? 'Vela personalizada' : item.nombre
        const opciones = item.opciones
          ? [
              `Forma: ${item.opciones.forma}`,
              `Aroma: ${item.opciones.fragancia}`,
              `Color: ${item.opciones.color}`
            ]
          : []

        return [
          `${index + 1}. ${nombre}`,
          ...opciones,
          `Cantidad: ${item.cantidad}`,
          `Costo: ${formatCurrency(item.precio * item.cantidad)}`
        ].join('\n')
      })
      .join('\n\n')

    return `Hola Memora, quiero hacer este pedido:\n\n${detalle}\n\nCosto total: ${formatCurrency(ventaTotal)}`
  }

  const enviarCarritoWhatsapp = (
    carrito: CartItem[],
    ventaTotal: number,
    telefono = '573112359766'
  ) => {
    if (!carrito.length) return

    const mensaje = encodeURIComponent(crearMensajeCarrito(carrito, ventaTotal))
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank')
  }

  return {
    crearMensajeCarrito,
    enviarCarritoWhatsapp
  }
}
