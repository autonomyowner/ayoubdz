// Shoe product data structure
export interface Shoe {
  id: string
  name: string
  nameAr: string
  description: string
  descriptionAr: string
  image: string
  images: string[]
  price: number
  originalPrice?: number
  discount?: number
  category: string
  features: string[]
  featuresAr: string[]
  tags: string[]
  brand: string
  size: string
  colors: string[]
}

export const shoes: Shoe[] = [
  {
    id: 'chaussures-slides-noir-blanc',
    name: 'Slides Premium Noir & Blanc',
    nameAr: 'سلايدز بريميوم أسود وأبيض',
    description: 'Chaussures slides élégantes avec boucle dorée et design moderne',
    descriptionAr: 'حذاء سلايدز أنيق مع إبزيم ذهبي وتصميم عصري',
    image: '/pics/replacementimages/1.jpg',
    images: [
      '/pics/replacementimages/1.jpg'
    ],
    price: 4500,
    originalPrice: 5500,
    discount: 18,
    category: 'Casual',
    brand: 'AyoubDz',
    size: '36-45',
    colors: ['Noir', 'Blanc'],
    features: [
      'Design moderne et élégant',
      'Boucle dorée premium',
      'Confort optimal',
      'Matériaux de qualité',
      'Style polyvalent'
    ],
    featuresAr: [
      'تصميم عصري وأنيق',
      'إبزيم ذهبي فاخر',
      'راحة مثالية',
      'مواد عالية الجودة',
      'أسلوب متعدد الاستخدامات'
    ],
    tags: ['slides', 'casual', 'premium', 'doré']
  },
  {
    id: 'sandales-denim-embellies',
    name: 'Sandales Denim Brodées',
    nameAr: 'صندل دينيم مطرز',
    description: 'Sandales décontractées en denim avec broderies florales et détails dorés',
    descriptionAr: 'صندل عادي من الدنيم مع تطريزات زهرية وتفاصيل ذهبية',
    image: '/pics/replacementimages/2.jpg',
    images: [
      '/pics/replacementimages/2.jpg'
    ],
    price: 3800,
    originalPrice: 4500,
    discount: 16,
    category: 'Casual',
    brand: 'AyoubDz',
    size: '36-42',
    colors: ['Bleu Denim'],
    features: [
      'Brodé à la main',
      'Détails dorés',
      'Style décontracté',
      'Confortable',
      'Unique'
    ],
    featuresAr: [
      'مطرز يدوياً',
      'تفاصيل ذهبية',
      'أسلوب عادي',
      'مريح',
      'فريد'
    ],
    tags: ['denim', 'brodé', 'casual', 'unique']
  },
  {
    id: 'sandales-couronne-royale',
    name: 'Sandales Couronne Royale',
    nameAr: 'صندل التاج الملكي',
    description: 'Sandales élégantes avec motif couronne et détails dorés pour un look royal',
    descriptionAr: 'صندل أنيق مع تصميم تاج وتفاصيل ذهبية لمظهر ملكي',
    image: '/pics/replacementimages/3.jpg',
    images: [
      '/pics/replacementimages/3.jpg'
    ],
    price: 5200,
    originalPrice: 6200,
    discount: 16,
    category: 'Luxury',
    brand: 'AyoubDz',
    size: '36-42',
    colors: ['Noir'],
    features: [
      'Design couronne royal',
      'Détails dorés premium',
      'Style sophistiqué',
      'Qualité luxueuse',
      'Look royal'
    ],
    featuresAr: [
      'تصميم تاج ملكي',
      'تفاصيل ذهبية فاخرة',
      'أسلوب متطور',
      'جودة فاخرة',
      'مظهر ملكي'
    ],
    tags: ['royal', 'luxury', 'couronne', 'sophistiqué']
  },
  {
    id: 'sandales-bow-elegant',
    name: 'Sandales Bow Élégantes',
    nameAr: 'صندل القوس الأنيق',
    description: 'Sandales féminines avec gros nœud et strass pour un style glamour',
    descriptionAr: 'صندل نسائي مع قوس كبير وترتر لأسلوب جذاب',
    image: '/pics/replacementimages/5.jpg',
    images: [
      '/pics/replacementimages/5.jpg'
    ],
    price: 4800,
    originalPrice: 5800,
    discount: 17,
    category: 'Feminin',
    brand: 'AyoubDz',
    size: '36-40',
    colors: ['Noir', 'Rose', 'Jaune'],
    features: [
      'Gros nœud élégant',
      'Strass scintillants',
      'Style féminin',
      'Confort optimal',
      'Look glamour'
    ],
    featuresAr: [
      'قوس كبير أنيق',
      'ترتر لامع',
      'أسلوب نسائي',
      'راحة مثالية',
      'مظهر جذاب'
    ],
    tags: ['bow', 'féminin', 'glamour', 'strass']
  },
  {
    id: 'sandales-mint-rose',
    name: 'Sandales Mint & Rose',
    nameAr: 'صندل النعناع والوردي',
    description: 'Sandales colorées en mint et rose avec design moderne et confortable',
    descriptionAr: 'صندل ملون بالنعناع والوردي مع تصميم عصري ومريح',
    image: '/pics/replacementimages/6.jpg',
    images: [
      '/pics/replacementimages/6.jpg'
    ],
    price: 3500,
    originalPrice: 4200,
    discount: 17,
    category: 'Casual',
    brand: 'AyoubDz',
    size: '36-42',
    colors: ['Mint', 'Rose'],
    features: [
      'Couleurs vives',
      'Design moderne',
      'Confortable',
      'Style décontracté',
      'Parfait pour l\'été'
    ],
    featuresAr: [
      'ألوان زاهية',
      'تصميم عصري',
      'مريح',
      'أسلوب عادي',
      'مثالي للصيف'
    ],
    tags: ['coloré', 'été', 'moderne', 'confortable']
  },
  {
    id: 'sandales-studded-denim',
    name: 'Sandales Denim à Clous',
    nameAr: 'صندل دينيم مرصع',
    description: 'Sandales denim avec clous dorés et design urbain tendance',
    descriptionAr: 'صندل دينيم مع مسامير ذهبية وتصميم حضري عصري',
    image: '/pics/replacementimages/7.jpg',
    images: [
      '/pics/replacementimages/7.jpg'
    ],
    price: 4200,
    originalPrice: 5000,
    discount: 16,
    category: 'Urbain',
    brand: 'AyoubDz',
    size: '36-42',
    colors: ['Bleu Denim'],
    features: [
      'Clous dorés',
      'Style urbain',
      'Design tendance',
      'Confortable',
      'Look streetwear'
    ],
    featuresAr: [
      'مسامير ذهبية',
      'أسلوب حضري',
      'تصميم عصري',
      'مريح',
      'مظهر streetwear'
    ],
    tags: ['studded', 'urbain', 'streetwear', 'tendance']
  },
  {
    id: 'sandales-florales-brodes',
    name: 'Sandales Florales Brodées',
    nameAr: 'صندل زهري مطرز',
    description: 'Sandales avec motifs floraux brodés et perles pour un style bohème',
    descriptionAr: 'صندل مع تصميمات زهرية مطرزة وخرز لأسلوب بوهيمي',
    image: '/pics/replacementimages/8.jpg',
    images: [
      '/pics/replacementimages/8.jpg'
    ],
    price: 4600,
    originalPrice: 5600,
    discount: 18,
    category: 'Bohème',
    brand: 'AyoubDz',
    size: '36-42',
    colors: ['Bleu Denim'],
    features: [
      'Motifs floraux brodés',
      'Perles décoratives',
      'Style bohème',
      'Artisanal',
      'Unique'
    ],
    featuresAr: [
      'تصميمات زهرية مطرزة',
      'خرز زخرفي',
      'أسلوب بوهيمي',
      'حرفي',
      'فريد'
    ],
    tags: ['floral', 'bohème', 'brodé', 'artisanal']
  },
  {
    id: 'sandales-bow-multicolores',
    name: 'Sandales Bow Multicolores',
    nameAr: 'صندل القوس متعدد الألوان',
    description: 'Sandales avec gros nœuds colorés et strass pour un style glamour',
    descriptionAr: 'صندل مع أقواس كبيرة ملونة وترتر لأسلوب جذاب',
    image: '/pics/replacementimages/9.jpg',
    images: [
      '/pics/replacementimages/9.jpg'
    ],
    price: 5000,
    originalPrice: 6000,
    discount: 17,
    category: 'Feminin',
    brand: 'AyoubDz',
    size: '36-40',
    colors: ['Argent', 'Rose', 'Jaune'],
    features: [
      'Nœuds multicolores',
      'Strass premium',
      'Style glamour',
      'Confort optimal',
      'Look sophistiqué'
    ],
    featuresAr: [
      'أقواس متعددة الألوان',
      'ترتر فاخر',
      'أسلوب جذاب',
      'راحة مثالية',
      'مظهر متطور'
    ],
    tags: ['bow', 'multicolore', 'glamour', 'sophistiqué']
  }
]

// Helper function to get shoe by ID
export const getShoeById = (id: string): Shoe | undefined => {
  return shoes.find(shoe => shoe.id === id)
}

// Helper function to get all shoe IDs
export const getAllShoeIds = (): string[] => {
  return shoes.map(shoe => shoe.id)
}

// Backward compatibility - keeping old function names
export const templates = shoes
export const getTemplateById = getShoeById
export const getAllTemplateIds = getAllShoeIds
