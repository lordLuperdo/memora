import { defineStore } from 'pinia'

const categoryStyles = {
  Caballero: { color: '#3D6670', icono: 'ph:compass' },
  Florales: { color: '#B287A3', icono: 'ph:flower-lotus' },
  Mujer: { color: '#C47791', icono: 'ph:crown' },
  Goutmant: { color: '#B88455', icono: 'ph:cookie' },
  Frutales: { color: '#D17A68', icono: 'ph:orange-slice' }
}

const createEssence = (id, nombre, categoria) => ({
  id,
  nombre,
  categoria,
  descripcion: `Esencia ${nombre} de la familia ${categoria}.`,
  notas: categoria,
  color: categoryStyles[categoria].color,
  icono: categoryStyles[categoria].icono
})

export const useEssenceStore = defineStore('memora-essences', {
  state: () => ({
    essences: [
      createEssence('todoterreno', 'Todoterreno', 'Caballero'),
      createEssence('senda-salvaje', 'Senda salvaje', 'Caballero'),

      createEssence('agua-de-rossi', 'Agua de Rossi', 'Florales'),
      createEssence('lavanda-inglesa', 'Lavanda inglesa', 'Florales'),

      createEssence('reina', 'Reina', 'Mujer'),
      createEssence('dulce-carnaval', 'Dulce carnaval', 'Mujer'),

      createEssence('canela', 'Canela', 'Goutmant'),
      createEssence('yogurt-de-fresa', 'Yogurt de fresa', 'Goutmant'),
      createEssence('coffe-toffee', 'Coffe toffee', 'Goutmant'),
      createEssence('crema-de-limon', 'Crema de limón', 'Goutmant'),
      createEssence('arequipe', 'Arequipe', 'Goutmant'),
      createEssence('honey-love', 'Honey Love', 'Goutmant'),
      createEssence('pop-corn', 'Pop Corn', 'Goutmant'),

      createEssence('banana-split', 'Banana split', 'Frutales'),
      createEssence('dulce-tentacion', 'Dulce tentación', 'Frutales'),
      createEssence('fruto-salvaje', 'Fruto salvaje', 'Frutales'),
      createEssence('cherry-amour', 'Cherry Amour', 'Frutales'),
      createEssence('limon-siciliano', 'Limón Siciliano', 'Frutales'),
      createEssence('naranja-radiante', 'Naranja radiante', 'Frutales'),
      createEssence('pineapple-candy', 'Pineapple candy', 'Frutales')
    ]
  }),

  getters: {
    essencesByCategory: (state) =>
      state.essences.reduce((groups, essence) => {
        if (!groups[essence.categoria]) groups[essence.categoria] = []
        groups[essence.categoria].push(essence)
        return groups
      }, {})
  }
})
