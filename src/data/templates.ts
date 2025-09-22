// Perfume product data structure
export interface Perfume {
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
  notes: string[]
}

export const perfumes: Perfume[] = [
  {
    id: 'armani-you-intensly',
    name: 'Armani You Intensely',
    nameAr: 'أرماني يو إنتنسلي',
    description: 'A sophisticated and intense fragrance that embodies modern luxury and elegance',
    descriptionAr: 'عطر متطور ومكثف يجسد الفخامة والأناقة العصرية',
    image: '/pics/templates/armani you intensli.jpg',
    images: [
      '/pics/templates/armani you intensli.jpg'
    ],
    price: 8500,
    originalPrice: 9500,
    discount: 11,
    category: 'Luxury',
    brand: 'Giorgio Armani',
    size: '50ml',
    notes: ['Bergamot', 'Cardamom', 'Vanilla', 'Sandalwood'],
    features: [
      'Long-lasting fragrance',
      'Elegant packaging',
      'Unisex appeal',
      'Perfect for evening wear',
      'Premium ingredients'
    ],
    featuresAr: [
      'عطر طويل الأمد',
      'تغليف أنيق',
      'مناسب للجنسين',
      'مثالي للارتداء المسائي',
      'مكونات عالية الجودة'
    ],
    tags: ['luxury', 'unisex', 'evening', 'intense']
  },
  {
    id: 'tom-ford-tobacco-vanilla',
    name: 'Tom Ford Tobacco Vanilla',
    nameAr: 'توم فورد توباكو فانيليا',
    description: 'A warm and seductive blend of tobacco and vanilla that creates an intoxicating scent',
    descriptionAr: 'مزيج دافئ ومثير من التبغ والفانيليا يخلق عطراً ساحراً',
    image: '/pics/templates/tom ford tobaco vanila.jpg',
    images: [
      '/pics/templates/tom ford tobaco vanila.jpg'
    ],
    price: 12000,
    originalPrice: 13500,
    discount: 11,
    category: 'Luxury',
    brand: 'Tom Ford',
    size: '50ml',
    notes: ['Tobacco Leaf', 'Vanilla', 'Tonka Bean', 'Sandalwood'],
    features: [
      'Iconic Tom Ford scent',
      'Warm and comforting',
      'Perfect for cold weather',
      'Luxury presentation',
      'Signature fragrance'
    ],
    featuresAr: [
      'عطر توم فورد الشهير',
      'دافئ ومريح',
      'مثالي للطقس البارد',
      'عرض فاخر',
      'عطر مميز'
    ],
    tags: ['luxury', 'warm', 'vanilla', 'tobacco']
  },
  {
    id: 'xerjoff-naxos',
    name: 'Xerjoff Naxos',
    nameAr: 'زيرجوف ناكسوس',
    description: 'An exquisite Mediterranean-inspired fragrance with notes of lavender and honey',
    descriptionAr: 'عطر رائع مستوحى من البحر الأبيض المتوسط مع نوتات اللافندر والعسل',
    image: '/pics/templates/naxos.jpg',
    images: [
      '/pics/templates/naxos.jpg'
    ],
    price: 15000,
    originalPrice: 16500,
    discount: 9,
    category: 'Niche',
    brand: 'Xerjoff',
    size: '50ml',
    notes: ['Lavender', 'Honey', 'Tobacco', 'Vanilla'],
    features: [
      'Niche luxury brand',
      'Mediterranean inspiration',
      'Complex scent profile',
      'Limited availability',
      'Collector\'s item'
    ],
    featuresAr: [
      'علامة تجارية نيش فاخرة',
      'إلهام متوسطي',
      'ملف عطري معقد',
      'توفر محدود',
      'قطعة جامع'
    ],
    tags: ['niche', 'mediterranean', 'lavender', 'luxury']
  },
  {
    id: 'initio-oud-for-greatness',
    name: 'Initio Oud for Greatness',
    nameAr: 'إينيتيو عود للعظمة',
    description: 'A powerful and opulent oud fragrance that exudes confidence and sophistication',
    descriptionAr: 'عطر عود قوي وفاخر ينضح بالثقة والأناقة',
    image: '/pics/templates/initio.jpg',
    images: [
      '/pics/templates/initio.jpg'
    ],
    price: 18000,
    originalPrice: 20000,
    discount: 10,
    category: 'Niche',
    brand: 'Initio',
    size: '90ml',
    notes: ['Oud', 'Saffron', 'Patchouli', 'Amber'],
    features: [
      'Premium oud quality',
      'Long-lasting projection',
      'Unique composition',
      'Luxury presentation',
      'Signature scent'
    ],
    featuresAr: [
      'جودة عود عالية الجودة',
      'إسقاط طويل الأمد',
      'تركيب فريد',
      'عرض فاخر',
      'عطر مميز'
    ],
    tags: ['oud', 'niche', 'luxury', 'powerful']
  },
  {
    id: 'maison-margiela-by-the-fireplace',
    name: 'Maison Margiela By the Fireplace',
    nameAr: 'مايسون مارجيلا بجانب الموقد',
    description: 'A cozy and warm fragrance that captures the essence of a crackling fireplace',
    descriptionAr: 'عطر مريح ودافئ يلتقط جوهر الموقد المتوهج',
    image: '/pics/templates/by the fireplace.jpg',
    images: [
      '/pics/templates/by the fireplace.jpg'
    ],
    price: 9500,
    originalPrice: 10500,
    discount: 10,
    category: 'Niche',
    brand: 'Maison Margiela',
    size: '100ml',
    notes: ['Chestnut', 'Vanilla', 'Wood', 'Cashmeran'],
    features: [
      'Cozy winter scent',
      'Unique concept',
      'Perfect for cold weather',
      'Artisanal quality',
      'Memorable fragrance'
    ],
    featuresAr: [
      'عطر شتوي مريح',
      'مفهوم فريد',
      'مثالي للطقس البارد',
      'جودة حرفية',
      'عطر لا يُنسى'
    ],
    tags: ['warm', 'winter', 'cozy', 'unique']
  },
  {
    id: 'dior-bois-imperial',
    name: 'Dior Bois Imperial',
    nameAr: 'ديور بوا إمبريال',
    description: 'An elegant woody fragrance that combines sophistication with modern appeal',
    descriptionAr: 'عطر خشبي أنيق يجمع بين الأناقة والجاذبية العصرية',
    image: '/pics/templates/bois empoerial.jpg',
    images: [
      '/pics/templates/bois empoerial.jpg'
    ],
    price: 11000,
    originalPrice: 12500,
    discount: 12,
    category: 'Designer',
    brand: 'Christian Dior',
    size: '100ml',
    notes: ['Violet Leaf', 'Sandalwood', 'Ambroxan', 'Cedar'],
    features: [
      'Modern woody composition',
      'Versatile wear',
      'Long-lasting',
      'Elegant presentation',
      'Designer quality'
    ],
    featuresAr: [
      'تركيب خشبي عصري',
      'ارتداء متعدد الاستخدامات',
      'طويل الأمد',
      'عرض أنيق',
      'جودة مصمم'
    ],
    tags: ['woody', 'modern', 'versatile', 'designer']
  },
  {
    id: 'tom-ford-oud-wood',
    name: 'Tom Ford Oud Wood',
    nameAr: 'توم فورد عود وود',
    description: 'A luxurious oud fragrance that combines Eastern tradition with Western sophistication',
    descriptionAr: 'عطر عود فاخر يجمع بين التقاليد الشرقية والأناقة الغربية',
    image: '/pics/templates/oud aud.jpg',
    images: [
      '/pics/templates/oud aud.jpg'
    ],
    price: 13000,
    originalPrice: 14500,
    discount: 10,
    category: 'Luxury',
    brand: 'Tom Ford',
    size: '50ml',
    notes: ['Oud', 'Rosewood', 'Sandalwood', 'Vanilla'],
    features: [
      'Iconic Tom Ford oud',
      'Sophisticated blend',
      'Perfect for special occasions',
      'Luxury presentation',
      'Signature collection'
    ],
    featuresAr: [
      'عود توم فورد الشهير',
      'مزيج متطور',
      'مثالي للمناسبات الخاصة',
      'عرض فاخر',
      'مجموعة مميزة'
    ],
    tags: ['oud', 'luxury', 'sophisticated', 'tom-ford']
  },
  {
    id: 'maison-francis-kurkdjian-santal-royal',
    name: 'MFK Santal Royal',
    nameAr: 'مايسون فرانسيس كوردجيان سانتال رويال',
    description: 'An opulent sandalwood fragrance that embodies royal elegance and luxury',
    descriptionAr: 'عطر صندل فاخر يجسد الأناقة الملكية والفخامة',
    image: '/pics/templates/santal royal.jpg',
    images: [
      '/pics/templates/santal royal.jpg'
    ],
    price: 16000,
    originalPrice: 17500,
    discount: 9,
    category: 'Niche',
    brand: 'Maison Francis Kurkdjian',
    size: '70ml',
    notes: ['Sandalwood', 'Rose', 'Amber', 'Vanilla'],
    features: [
      'Premium sandalwood',
      'Royal elegance',
      'Long-lasting sillage',
      'Artisanal craftsmanship',
      'Exclusive fragrance'
    ],
    featuresAr: [
      'صندل عالي الجودة',
      'أناقة ملكية',
      'تتبع طويل الأمد',
      'حرفية فنية',
      'عطر حصري'
    ],
    tags: ['sandalwood', 'royal', 'luxury', 'niche']
  },
  {
    id: 'nishane-hacivat',
    name: 'Nishane Hacivat',
    nameAr: 'نيشان هاسيفات',
    description: 'A vibrant and fresh fragrance inspired by Turkish culture and traditions',
    descriptionAr: 'عطر نابض بالحياة ومنعش مستوحى من الثقافة والتقاليد التركية',
    image: '/pics/templates/hacivat.jpg',
    images: [
      '/pics/templates/hacivat.jpg'
    ],
    price: 12500,
    originalPrice: 14000,
    discount: 11,
    category: 'Niche',
    brand: 'Nishane',
    size: '50ml',
    notes: ['Pineapple', 'Oakmoss', 'Patchouli', 'Cedar'],
    features: [
      'Turkish heritage',
      'Vibrant and fresh',
      'Unique composition',
      'Cultural inspiration',
      'Artisanal quality'
    ],
    featuresAr: [
      'تراث تركي',
      'نابض بالحياة ومنعش',
      'تركيب فريد',
      'إلهام ثقافي',
      'جودة حرفية'
    ],
    tags: ['fresh', 'turkish', 'unique', 'vibrant']
  },
  {
    id: 'marc-antoine-barrois-ganymede',
    name: 'Marc-Antoine Barrois Ganymede',
    nameAr: 'مارك أنطوان باروا جانيميد',
    description: 'A futuristic and innovative fragrance that pushes the boundaries of perfumery',
    descriptionAr: 'عطر مستقبلي ومبتكر يدفع حدود صناعة العطور',
    image: '/pics/templates/ganymede.jpg',
    images: [
      '/pics/templates/ganymede.jpg'
    ],
    price: 14000,
    originalPrice: 15500,
    discount: 10,
    category: 'Niche',
    brand: 'Marc-Antoine Barrois',
    size: '100ml',
    notes: ['Saffron', 'Iris', 'Ambroxan', 'Cedar'],
    features: [
      'Futuristic concept',
      'Innovative composition',
      'Unique scent profile',
      'Artistic vision',
      'Limited edition'
    ],
    featuresAr: [
      'مفهوم مستقبلي',
      'تركيب مبتكر',
      'ملف عطري فريد',
      'رؤية فنية',
      'إصدار محدود'
    ],
    tags: ['futuristic', 'innovative', 'unique', 'artistic']
  },
  {
    id: 'maison-francis-kurkdjian-devotion',
    name: 'MFK Devotion',
    nameAr: 'مايسون فرانسيس كوردجيان ديفوشن',
    description: 'A passionate and intense fragrance that captures the essence of devotion and love',
    descriptionAr: 'عطر عاطفي ومكثف يلتقط جوهر التفاني والحب',
    image: '/pics/templates/devotion 2.jpg',
    images: [
      '/pics/templates/devotion 2.jpg'
    ],
    price: 13500,
    originalPrice: 15000,
    discount: 10,
    category: 'Niche',
    brand: 'Maison Francis Kurkdjian',
    size: '70ml',
    notes: ['Orange', 'Vanilla', 'Amber', 'Musk'],
    features: [
      'Passionate intensity',
      'Emotional depth',
      'Long-lasting warmth',
      'Artisanal craftsmanship',
      'Signature collection'
    ],
    featuresAr: [
      'كثافة عاطفية',
      'عمق عاطفي',
      'دفء طويل الأمد',
      'حرفية فنية',
      'مجموعة مميزة'
    ],
    tags: ['passionate', 'intense', 'warm', 'emotional']
  }
]

// Helper function to get perfume by ID
export const getPerfumeById = (id: string): Perfume | undefined => {
  return perfumes.find(perfume => perfume.id === id)
}

// Helper function to get all perfume IDs
export const getAllPerfumeIds = (): string[] => {
  return perfumes.map(perfume => perfume.id)
}

// Backward compatibility - keeping old function names
export const templates = perfumes
export const getTemplateById = getPerfumeById
export const getAllTemplateIds = getAllPerfumeIds
