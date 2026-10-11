export type CandleModel = {
  name: string
  slug: string
  price: number | null
  note?: string
}

// Precios COP del catálogo Memora consultado el 11 de octubre de 2026.
// null indica un modelo sin precio publicado; no se aplica un precio inventado.
export const candleModels: CandleModel[] = [
  {
    "name": "Quemador clásico",
    "slug": "quemador-clasico",
    "price": null
  },
  {
    "name": "Cilindro de burbujas",
    "slug": "cilindro-burbujas",
    "price": 39000
  },
  {
    "name": "Quemador curvo",
    "slug": "quemador-curvo",
    "price": null
  },
  {
    "name": "Cilindro de corazones",
    "slug": "cilindro-corazones",
    "price": 22000
  },
  {
    "name": "Árbol floral",
    "slug": "arbol-floral",
    "price": 23000
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
    "price": 22000
  },
  {
    "name": "Oso floral con moño",
    "slug": "oso-floral",
    "price": 19000
  },
  {
    "name": "Cubo de flores",
    "slug": "cubo-flores",
    "price": 22000
  },
  {
    "name": "Virgen con Niño",
    "slug": "virgen-con-nino",
    "price": 75000
  },
  {
    "name": "Sagrada Familia doble",
    "slug": "sagrada-familia-doble",
    "price": 40000
  },
  {
    "name": "Sagrada Familia católica",
    "slug": "sagrada-familia-catolica",
    "price": 21000
  },
  {
    "name": "Ramo margarita girasol",
    "slug": "ramo-margarita-girasol",
    "price": 15000
  },
  {
    "name": "Ramo de tulipanes",
    "slug": "ramo-tulipanes",
    "price": 11000
  },
  {
    "name": "Ramo de tulipanes grande",
    "slug": "ramo-tulipanes-grande",
    "price": 22000
  },
  {
    "name": "Pastel de crema",
    "slug": "pastel-crema",
    "price": 12000
  },
  {
    "name": "Corazones apilados",
    "slug": "corazones-apilados",
    "price": 12000
  },
  {
    "name": "Flor de loto",
    "slug": "flor-loto",
    "price": 23000
  },
  {
    "name": "Burbujas redondo",
    "slug": "burbujas-redondo",
    "price": 28000
  },
  {
    "name": "Burbujas mediana",
    "slug": "burbujas-mediana",
    "price": 28000
  },
  {
    "name": "Virgen María rezando",
    "slug": "virgen-rezando",
    "price": 13000
  },
  {
    "name": "Ovejita con corbatín",
    "slug": "ovejita-corbatin",
    "price": 18000
  },
  {
    "name": "Oso floral con corazón",
    "slug": "oso-corazon",
    "price": 19000
  },
  {
    "name": "Oso con globos",
    "slug": "oso-globos",
    "price": 12000
  },
  {
    "name": "Balón de fútbol",
    "slug": "balon-futbol",
    "price": 12000
  },
  {
    "name": "Jardín de suculentas",
    "slug": "jardin-suculentas",
    "price": 35000
  },
  {
    "name": "Ramo de peonías",
    "slug": "ramo-peonias",
    "price": 45000
  },
  {
    "name": "Papá Noel manzana",
    "slug": "papa-noel-manzana",
    "price": 42000
  },
  {
    "name": "Gnomo tímido",
    "slug": "gnomo-timido",
    "price": 40000
  },
  {
    "name": "Gnomo con regalos",
    "slug": "gnomo-regalos",
    "price": 40000
  },
  {
    "name": "Cesta de hortensia",
    "slug": "cesta-hortensia",
    "price": 42000
  },
  {
    "name": "Calabaza Halloween",
    "slug": "calabaza-halloween",
    "price": 16000
  },
  {
    "name": "Flor de frangipani triple",
    "slug": "frangipani-triple",
    "price": 3000,
    "note": "Decoración aromatizada sin mecha."
  },
  {
    "name": "Geométrica flor alta",
    "slug": "geometrica-flor-alta",
    "price": 21000
  },
  {
    "name": "Geométrica flor mediana",
    "slug": "geometrica-flor-mediana",
    "price": 21000
  },
  {
    "name": "Geométrica luna alta",
    "slug": "geometrica-luna-alta",
    "price": 21000
  },
  {
    "name": "Geométrica estrella alta",
    "slug": "geometrica-estrella-alta",
    "price": 21000
  },
  {
    "name": "Geométrica estrella baja",
    "slug": "geometrica-estrella-baja",
    "price": 21000
  },
  {
    "name": "Geométrica pirámide",
    "slug": "geometrica-piramide",
    "price": 21000
  },
  {
    "name": "Geométrica cristal",
    "slug": "geometrica-cristal",
    "price": 21000
  },
  {
    "name": "Geométrica luna baja",
    "slug": "geometrica-luna-baja",
    "price": 21000
  },
  {
    "name": "Vaso grande · 5,5 × 6 cm",
    "slug": "vaso-grande",
    "price": 20000
  },
  {
    "name": "Vaso mediano · 4,5 × 4 cm",
    "slug": "vaso-mediano",
    "price": 10500
  },
  {
    "name": "Vaso pequeño · 4 × 2,5 cm",
    "slug": "vaso-pequeno",
    "price": 6000
  },
  {
    "name": "Vaso mini · 3,5 × 1,8 cm",
    "slug": "vaso-mini",
    "price": 4000
  }
]

export const candleColors = [
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
]

export const candleImage = (modelSlug: string, colorSlug: string) =>
  `/images/velas/vela${modelSlug}${colorSlug}.png`

export const formatCandlePrice = (price: number) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency', currency: 'COP', maximumFractionDigits: 0
  }).format(price)
