// Template data structure
export interface Template {
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
}

export const templates: Template[] = [
  {
    id: 'ecommerce-template',
    name: 'E-commerce Template',
    nameAr: 'قالب متجر إلكتروني',
    description: 'Professional e-commerce website template with modern design and full functionality',
    descriptionAr: 'قالب موقع متجر إلكتروني احترافي مع تصميم عصري ووظائف كاملة',
    image: '/pics/templates/template 1.jpg',
    images: [
      '/pics/templates/template 1.jpg',
      '/pics/templates/teplate 2.jpg',
      '/pics/templates/perfum store template clean.jpg',
      '/pics/templates/clininc template.png'
    ],
    price: 15000,
    originalPrice: 15000,
    category: 'E-commerce',
    features: [
      'Responsive Design',
      'Easy to Use Dashboard',
      'Instant Digital Delivery',
      'SEO Optimized',
      'Free Technical Support'
    ],
    featuresAr: [
      'تصميم متجاوب مع جميع الأجهزة',
      'لوحة تحكم سهلة الاستخدام',
      'تسليم فوري بعد الدفع',
      'SEO محسن لمحركات البحث',
      'دعم فني مجاني'
    ],
    tags: ['ecommerce', 'shop', 'online-store', 'responsive']
  },
  {
    id: 'business-template',
    name: 'Business Template',
    nameAr: 'قالب موقع أعمال',
    description: 'Professional business website template perfect for companies and services',
    descriptionAr: 'قالب موقع أعمال احترافي مثالي للشركات والخدمات',
    image: '/pics/templates/teplate 2.jpg',
    images: [
      '/pics/templates/teplate 2.jpg',
      '/pics/templates/template 1.jpg',
      '/pics/templates/perfum store template clean.jpg',
      '/pics/templates/clininc template.png'
    ],
    price: 12000,
    originalPrice: 15000,
    discount: 20,
    category: 'Business',
    features: [
      'Modern Business Design',
      'Contact Forms',
      'Service Showcase',
      'About Section',
      'Mobile Responsive'
    ],
    featuresAr: [
      'تصميم أعمال عصري',
      'نماذج الاتصال',
      'عرض الخدمات',
      'قسم من نحن',
      'متجاوب مع الهواتف'
    ],
    tags: ['business', 'corporate', 'services', 'professional']
  },
  {
    id: 'perfume-store-template',
    name: 'Perfume Store Template',
    nameAr: 'قالب متجر عطور',
    description: 'Elegant perfume store template with beautiful product showcase',
    descriptionAr: 'قالب متجر عطور أنيق مع عرض منتجات جميل',
    image: '/pics/templates/perfum store template clean.jpg',
    images: [
      '/pics/templates/perfum store template clean.jpg',
      '/pics/templates/template 1.jpg',
      '/pics/templates/teplate 2.jpg',
      '/pics/templates/clininc template.png'
    ],
    price: 18000,
    originalPrice: 20000,
    discount: 10,
    category: 'Retail',
    features: [
      'Elegant Product Gallery',
      'Shopping Cart',
      'Product Categories',
      'Brand Showcase',
      'Customer Reviews'
    ],
    featuresAr: [
      'معرض منتجات أنيق',
      'سلة التسوق',
      'فئات المنتجات',
      'عرض العلامات التجارية',
      'تقييمات العملاء'
    ],
    tags: ['perfume', 'beauty', 'retail', 'luxury']
  },
  {
    id: 'clinic-template',
    name: 'Clinic Template',
    nameAr: 'قالب موقع عيادة',
    description: 'Medical clinic website template with appointment booking system',
    descriptionAr: 'قالب موقع عيادة طبية مع نظام حجز المواعيد',
    image: '/pics/templates/clininc template.png',
    images: [
      '/pics/templates/clininc template.png',
      '/pics/templates/template 1.jpg',
      '/pics/templates/teplate 2.jpg',
      '/pics/templates/perfum store template clean.jpg'
    ],
    price: 20000,
    originalPrice: 25000,
    discount: 20,
    category: 'Medical',
    features: [
      'Appointment Booking',
      'Doctor Profiles',
      'Service Information',
      'Contact Forms',
      'Medical Gallery'
    ],
    featuresAr: [
      'حجز المواعيد',
      'ملفات الأطباء',
      'معلومات الخدمات',
      'نماذج الاتصال',
      'معرض طبي'
    ],
    tags: ['medical', 'clinic', 'healthcare', 'appointment']
  }
]

// Helper function to get template by ID
export const getTemplateById = (id: string): Template | undefined => {
  return templates.find(template => template.id === id)
}

// Helper function to get all template IDs
export const getAllTemplateIds = (): string[] => {
  return templates.map(template => template.id)
}
