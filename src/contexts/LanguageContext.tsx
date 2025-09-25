import React, { createContext, useContext, useState, type ReactNode } from 'react'

type Language = 'fr' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr')

  // Update document direction and language when language changes
  React.useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language === 'ar' ? 'ar' : 'fr'
  }, [language])

  const translations = {
    fr: {
      // Navigation
      'nav.home': 'Accueil',
      'nav.perfumes': 'Vêtements',
      'nav.productGros': 'Chaussures',
      'nav.contact': 'Contact',
      'nav.shopNow': 'Acheter Maintenant',
      
      // Hero Section
      'hero.badge': '✨ Mode & Style Algérien',
      'hero.title': 'Découvrez Votre Style',
      'hero.typewriter.premium': 'Vêtements Premium',
      'hero.typewriter.luxury': 'Chaussures de Luxe',
      'hero.typewriter.exotic': 'Style Unique',
      'hero.typewriter.designer': 'Mode Designer',
      'hero.typewriter.signature': 'Signature Style',
      'hero.subtitle': 'Plongez dans le monde de la mode et du style. De vêtements tendance aux chaussures de luxe, trouvez le look parfait qui définit votre personnalité unique.',
      'hero.shopPerfumes': 'Voir Vêtements',
      'hero.viewCollections': 'Voir Collections',
      
      // About Section
      'about.title': 'Créer des Expériences de Mode',
      'about.description': 'Avec plus d\'une décennie d\'expertise dans la mode et le style, nous sélectionnons la plus belle collection de vêtements et chaussures authentiques de marques renommées. Notre passion pour la qualité et l\'authenticité garantit que chaque pièce raconte une histoire.',
      'about.shopButton': 'Explorer Collection',
      
      // Services Section
      'services.badge': '✨ Nos Services',
      'services.title': 'Pourquoi Nous Choisir',
      'services.subtitle': 'Nous offrons des services complets de mode pour améliorer votre expérience shopping',
      'services.consultation.title': 'Consultation Personnelle',
      'services.consultation.description': 'Conseils d\'experts pour trouver votre style parfait',
      'services.authenticity.title': '100% Authentique',
      'services.authenticity.description': 'Produits garantis authentiques de distributeurs autorisés',
      'services.delivery.title': 'Livraison Nationale',
      'services.delivery.description': 'Livraison rapide et sécurisée à travers l\'Algérie',
      'services.expertise.title': 'Expertise Mode',
      'services.expertise.description': 'Années d\'expérience dans la mode et le style',
      
      // Popular Section
      'popular.badge': '✨ Collection Vedette',
      'popular.title': 'Vêtements Populaires',
      'popular.subtitle': 'Découvrez nos collections de vêtements et chaussures les plus appréciées',
      'popular.viewAll': 'Voir Tous les Produits',
      
      // Contact Section
      'contact.badge': '✨ Contactez-Nous',
      'contact.title': 'Prêt à Trouver Votre Style Parfait?',
      'contact.subtitle': 'Nos experts en mode sont là pour vous aider à découvrir le look idéal qui correspond à votre personnalité et votre style.',
      'contact.description': 'Prêt à découvrir votre style signature parfait ? Nous aimerions vous aider à trouver le look idéal qui correspond à votre personnalité et votre style. Contactez-nous dès aujourd\'hui et explorons ensemble le monde de la mode.',
      'contact.shopNow': 'ACHETER MAINTENANT',
      
      // Contact Page
      'contactPage.badge': '✨ Mode & Style Premium',
      'contactPage.title': 'Contactez AyoubDz',
      'contactPage.subtitle': 'Prêt à découvrir votre style signature parfait ? Contactez-nous pour explorer notre collection premium de vêtements et chaussures. Nous sommes là pour vous aider à trouver le look idéal qui correspond à votre personnalité et votre style.',
      'contactPage.form.badge': '🛒 Formulaire de Commande Rapide',
      'contactPage.form.title': 'Commandez Votre Article',
      'contactPage.form.subtitle': 'Entrez vos détails, choisissez votre wilaya, et voyez le prix de livraison instantanément.',
      'contactPage.form.firstName': 'Prénom',
      'contactPage.form.firstNamePlaceholder': 'Entrez votre prénom',
      'contactPage.form.lastName': 'Nom',
      'contactPage.form.lastNamePlaceholder': 'Entrez votre nom',
      'contactPage.form.phone': 'Numéro de Téléphone',
      'contactPage.form.phonePlaceholder': 'Entrez votre numéro de téléphone',
      'contactPage.form.product': 'Nom du Produit',
      'contactPage.form.productPlaceholder': 'Entrez le nom de l\'article que vous voulez',
      'contactPage.form.quantity': 'Quantité',
      'contactPage.form.searchWilaya': 'Rechercher Wilaya',
      'contactPage.form.searchWilayaPlaceholder': 'Tapez pour rechercher votre wilaya',
      'contactPage.form.chooseWilaya': 'Choisir Wilaya',
      'contactPage.form.chooseWilayaPlaceholder': 'Sélectionnez votre wilaya',
      'contactPage.form.deliveryPrice': 'Prix de Livraison: {price}',
      'contactPage.form.deliveryTime': 'Délai de Livraison: {time}',
      'contactPage.form.placeOrder': 'Passer Commande',
      'contactPage.form.sendingOrder': '⏳ Envoi de Votre Commande...',
      'contactPage.form.success.title': 'Message envoyé avec succès !',
      'contactPage.form.success.message': 'Nous vous répondrons dans les 24 heures.',
      'contactPage.form.error.title': 'Échec de l\'envoi du message',
      'contactPage.form.error.message': 'Veuillez réessayer ou nous contacter directement.',
      'contactPage.whyChoose.title': 'Pourquoi Choisir AyoubDz ?',
      'contactPage.whyChoose.expert': 'Consultants en mode experts avec des années d\'expérience',
      'contactPage.whyChoose.authentic': 'Vêtements et chaussures authentiques des meilleures marques',
      'contactPage.whyChoose.personal': 'Conseil personnalisé et correspondance de style',
      'contactPage.whyChoose.delivery': 'Livraison nationale avec soin et expertise',
      'contactPage.cta.title': 'Prêt à Trouver Votre Style Signature ?',
      'contactPage.cta.description': 'Contactez-nous aujourd\'hui pour une consultation personnalisée en mode et découvrez le look parfait qui correspond à votre style.',
      'contactPage.cta.bookConsultation': 'Réserver Consultation Gratuite',
      'contactPage.cta.viewPerfumes': 'Voir Vêtements',
      'contactPage.cta.support': 'Nous répondons dans les 24 heures',
      
      // Product Gros Section
      'productGros.badge': '🏪 Vente en Gros',
      'productGros.title': 'Produits en Gros',
      'productGros.subtitle': 'Découvrez nos collections de chaussures en vente en gros pour les revendeurs et boutiques.',
      'productGros.benefitsBadge': 'Avantages de la vente en gros',
      'productGros.contactWholesale': 'Contacter pour Gros',
      'productGros.cta.badge': '💼 Partenariat Commercial',
      'productGros.cta.title': 'Devenez Partenaire AyoubDz',
      'productGros.cta.description': 'Rejoignez notre réseau de revendeurs et bénéficiez de tarifs préférentiels, d\'un support marketing et d\'une livraison gratuite.',
      'productGros.cta.getPricing': 'Obtenir les Tarifs',
      'productGros.cta.callNow': 'Appeler Maintenant',
      
      // Footer
      'footer.company': 'AyoubDz',
      'footer.description': 'Votre partenaire de confiance pour la mode et le style en Algérie.',
      'footer.quickLinks': 'Liens Rapides',
      'footer.contact': 'Contact',
      'footer.followUs': 'Suivez-nous',
      'footer.rights': '© 2024 AyoubDz. Tous droits réservés.',
    },
    ar: {
      // Navigation
      'nav.home': 'الرئيسية',
      'nav.perfumes': 'الملابس',
      'nav.productGros': 'الأحذية',
      'nav.contact': 'اتصل بنا',
      'nav.shopNow': 'اشتر الآن',
      
      // Hero Section
      'hero.badge': '✨ الأزياء والأناقة الجزائرية',
      'hero.title': 'اكتشف أسلوبك',
      'hero.typewriter.premium': 'ملابس فاخرة',
      'hero.typewriter.luxury': 'أحذية راقية',
      'hero.typewriter.exotic': 'أسلوب فريد',
      'hero.typewriter.designer': 'أزياء مصممة',
      'hero.typewriter.signature': 'أسلوب مميز',
      'hero.subtitle': 'اغمر نفسك في عالم الأزياء والأناقة. من الملابس العصرية إلى الأحذية الفاخرة، اعثر على الإطلالة المثالية التي تعبر عن شخصيتك الفريدة.',
      'hero.shopPerfumes': 'عرض الملابس',
      'hero.viewCollections': 'عرض المجموعات',
      
      // About Section
      'about.title': 'خلق تجارب أزياء',
      'about.description': 'مع أكثر من عقد من الخبرة في الأزياء والأناقة، نختار أجمل مجموعة من الملابس والأحذية الأصيلة من العلامات التجارية المعروفة. شغفنا بالجودة والأصالة يضمن أن كل قطعة تحكي قصة.',
      'about.shopButton': 'استكشف المجموعة',
      
      // Services Section
      'services.badge': '✨ خدماتنا',
      'services.title': 'لماذا تختارنا',
      'services.subtitle': 'نقدم خدمات أزياء شاملة لتحسين تجربة التسوق الخاصة بك',
      'services.consultation.title': 'استشارة شخصية',
      'services.consultation.description': 'نصائح الخبراء لإيجاد أسلوبك المثالي',
      'services.authenticity.title': '100% أصلي',
      'services.authenticity.description': 'منتجات مضمونة الأصالة من الموزعين المعتمدين',
      'services.delivery.title': 'توصيل وطني',
      'services.delivery.description': 'توصيل سريع وآمن عبر الجزائر',
      'services.expertise.title': 'خبرة في الأزياء',
      'services.expertise.description': 'سنوات من الخبرة في الأزياء والأناقة',
      
      // Popular Section
      'popular.badge': '✨ المجموعة المميزة',
      'popular.title': 'الملابس الشائعة',
      'popular.subtitle': 'اكتشف مجموعات الملابس والأحذية الأكثر إعجاباً',
      'popular.viewAll': 'عرض جميع المنتجات',
      
      // Contact Section
      'contact.badge': '✨ اتصل بنا',
      'contact.title': 'مستعد لإيجاد أسلوبك المثالي؟',
      'contact.subtitle': 'خبراؤنا في الأزياء هنا لمساعدتك في اكتشاف الإطلالة المثالية التي تناسب شخصيتك وأسلوبك.',
      'contact.description': 'مستعد لاكتشاف أسلوبك المميز المثالي؟ نحب مساعدتك في إيجاد الإطلالة المثالية التي تناسب شخصيتك وأسلوبك. اتصل بنا اليوم واستكشف معنا عالم الأزياء.',
      'contact.shopNow': 'اشتر الآن',
      
      // Contact Page
      'contactPage.badge': '✨ أزياء وأناقة فاخرة',
      'contactPage.title': 'اتصل بـ AyoubDz',
      'contactPage.subtitle': 'مستعد لاكتشاف أسلوبك المميز المثالي؟ اتصل بنا لاستكشاف مجموعتنا الفاخرة من الملابس والأحذية. نحن هنا لمساعدتك في إيجاد الإطلالة المثالية التي تناسب شخصيتك وأسلوبك.',
      'contactPage.form.badge': '🛒 نموذج طلب سريع',
      'contactPage.form.title': 'اطلب منتجك',
      'contactPage.form.subtitle': 'أدخل تفاصيلك، اختر ولايتك، وشاهد سعر التوصيل فوراً.',
      'contactPage.form.firstName': 'الاسم الأول',
      'contactPage.form.firstNamePlaceholder': 'أدخل اسمك الأول',
      'contactPage.form.lastName': 'الاسم الأخير',
      'contactPage.form.lastNamePlaceholder': 'أدخل اسمك الأخير',
      'contactPage.form.phone': 'رقم الهاتف',
      'contactPage.form.phonePlaceholder': 'أدخل رقم هاتفك',
      'contactPage.form.product': 'اسم المنتج',
      'contactPage.form.productPlaceholder': 'أدخل اسم المنتج الذي تريده',
      'contactPage.form.quantity': 'الكمية',
      'contactPage.form.searchWilaya': 'البحث عن الولاية',
      'contactPage.form.searchWilayaPlaceholder': 'اكتب للبحث عن ولايتك',
      'contactPage.form.chooseWilaya': 'اختر الولاية',
      'contactPage.form.chooseWilayaPlaceholder': 'اختر ولايتك',
      'contactPage.form.deliveryPrice': 'سعر التوصيل: {price}',
      'contactPage.form.deliveryTime': 'وقت التوصيل: {time}',
      'contactPage.form.placeOrder': 'تأكيد الطلب',
      'contactPage.form.sendingOrder': '⏳ إرسال طلبك...',
      'contactPage.form.success.title': 'تم إرسال الرسالة بنجاح!',
      'contactPage.form.success.message': 'سنجيب عليك خلال 24 ساعة.',
      'contactPage.form.error.title': 'فشل في إرسال الرسالة',
      'contactPage.form.error.message': 'يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.',
      'contactPage.whyChoose.title': 'لماذا تختار AyoubDz؟',
      'contactPage.whyChoose.expert': 'استشاريو أزياء خبراء مع سنوات من الخبرة',
      'contactPage.whyChoose.authentic': 'ملابس وأحذية أصلية من أفضل العلامات التجارية',
      'contactPage.whyChoose.personal': 'استشارة شخصية ومطابقة الأسلوب',
      'contactPage.whyChoose.delivery': 'توصيل وطني بعناية وخبرة',
      'contactPage.cta.title': 'مستعد لإيجاد أسلوبك المميز؟',
      'contactPage.cta.description': 'اتصل بنا اليوم للحصول على استشارة شخصية في الأزياء واكتشف الإطلالة المثالية التي تناسب أسلوبك.',
      'contactPage.cta.bookConsultation': 'احجز استشارة مجانية',
      'contactPage.cta.viewPerfumes': 'عرض الملابس',
      'contactPage.cta.support': 'نرد خلال 24 ساعة',
      
      // Product Gros Section
      'productGros.badge': '🏪 بيع بالجملة',
      'productGros.title': 'منتجات بالجملة',
      'productGros.subtitle': 'اكتشف مجموعات الأحذية للبيع بالجملة للتجار والمتاجر.',
      'productGros.benefitsBadge': 'مزايا البيع بالجملة',
      'productGros.contactWholesale': 'اتصل للجملة',
      'productGros.cta.badge': '💼 شراكة تجارية',
      'productGros.cta.title': 'كن شريك AyoubDz',
      'productGros.cta.description': 'انضم إلى شبكة التجار لدينا واستفد من الأسعار المفضلة والدعم التسويقي والتوصيل المجاني.',
      'productGros.cta.getPricing': 'احصل على الأسعار',
      'productGros.cta.callNow': 'اتصل الآن',
      
      // Footer
      'footer.company': 'AyoubDz',
      'footer.description': 'شريكك الموثوق للأزياء والأناقة في الجزائر.',
      'footer.quickLinks': 'روابط سريعة',
      'footer.contact': 'اتصل بنا',
      'footer.followUs': 'تابعنا',
      'footer.rights': '© 2024 AyoubDz. جميع الحقوق محفوظة.',
    }
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}