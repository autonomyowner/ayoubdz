import React, { createContext, useContext, useState, type ReactNode } from 'react'

type Language = 'en' | 'fr'

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
  const [language, setLanguage] = useState<Language>('en')

  const translations = {
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.perfumes': 'Perfumes',
      'nav.productGros': 'Product Gros',
      'nav.contact': 'Contact',
      'nav.shopNow': 'SHOP NOW',
      
      // Hero Section
      'hero.badge': '✨ Premium Perfumes & Fragrances in Algeria',
      'hero.title': 'Discover',
      'hero.typewriter.premium': 'Premium Perfumes',
      'hero.typewriter.luxury': 'Luxury Fragrances',
      'hero.typewriter.exotic': 'Exotic Scents',
      'hero.typewriter.designer': 'Designer Brands',
      'hero.typewriter.signature': 'Signature Collections',
      'hero.subtitle': 'Specialized in premium perfumes and luxury fragrances for discerning customers in Algeria. We bring you the finest scents from around the world to enhance your personal style.',
      'hero.shopPerfumes': 'Shop Perfumes',
      'hero.viewCollections': 'View Collections',
      
      // About Section
      'about.title': 'Luxury fragrances meet authentic craftsmanship',
      'about.description': 'We specialize in curating premium perfumes and luxury fragrances for discerning customers in Algeria. Our collection combines authentic brands with expert knowledge to deliver scents that enhance your personal style, create lasting impressions, and reflect your unique personality.',
      'about.shopButton': 'SHOP PERFUMES',
      
      // Services/Collections Section
      'services.title': 'Our Collections',
      'services.subtitle': 'We are passionate about bringing you the finest fragrances from around the world, carefully curated for the discerning Algerian customer!',
      'services.qualityBadge': '✨ Authentic & Premium Quality Guaranteed: Only Original Products with Expert Fragrance Advice',
      'services.luxuryPerfumes.title': 'Luxury Perfumes',
      'services.luxuryPerfumes.description': 'Premium designer fragrances from top brands like Tom Ford, Armani, and Dior. Authentic products with guaranteed quality and elegant presentation.',
      'services.nicheFragrances.title': 'Niche Fragrances',
      'services.nicheFragrances.description': 'Exclusive and rare perfumes from artisanal houses like Initio, Xerjoff, and Maison Francis Kurkdjian. Unique scents for discerning customers.',
      'services.signatureCollections.title': 'Signature Collections',
      'services.signatureCollections.description': 'Curated collections of seasonal and themed fragrances. From warm winter scents to fresh summer perfumes, we have the perfect scent for every occasion.',
      'services.shopNow': 'Shop Now',
      'services.showcase.badge': '✨ Premium Collection Showcase',
      'services.showcase.title': 'Discover Our Luxury Fragrance Collection',
      'services.showcase.description': 'Experience the finest selection of premium perfumes from world-renowned brands. Each fragrance is carefully curated to bring you the ultimate luxury scent experience.',
      'services.showcase.shopNow': 'Shop Now',
      
      // Popular Section
      'popular.title': 'Our most popular perfumes',
      'popular.mobileHint': 'Swipe left or right to browse • Tap and drag to scroll',
      'popular.discount': 'خصم {discount}%',
      
      // Contact Section
      'contact.title': 'Lets Chat',
      'contact.description': 'Ready to discover your perfect signature scent? We\'d love to help you find the ideal fragrance that matches your personality and style. Get in touch with us today and let\'s explore the world of luxury perfumes together.',
      'contact.shopNow': 'SHOP NOW',
      
      // Contact Page
      'contactPage.badge': '✨ Premium Perfumes & Luxury Fragrances',
      'contactPage.title': 'Contact Allouani Perfum',
      'contactPage.subtitle': 'Ready to discover your perfect signature scent? Get in touch with us to explore our premium collection of luxury fragrances. We\'re here to help you find the ideal perfume that matches your personality and style.',
      'contactPage.form.badge': '🛒 Quick Order Form',
      'contactPage.form.title': 'Order Your Perfume',
      'contactPage.form.subtitle': 'Enter your details, choose your wilaya, and see delivery price instantly.',
      'contactPage.form.firstName': 'First Name',
      'contactPage.form.firstNamePlaceholder': 'Enter your first name',
      'contactPage.form.lastName': 'Last Name',
      'contactPage.form.lastNamePlaceholder': 'Enter your last name',
      'contactPage.form.phone': 'Phone Number',
      'contactPage.form.phonePlaceholder': '+213 559 94 82 46',
      'contactPage.form.product': 'Product',
      'contactPage.form.productPlaceholder': 'Product name or link',
      'contactPage.form.quantity': 'Quantity',
      'contactPage.form.searchWilaya': 'Search Wilaya',
      'contactPage.form.searchWilayaPlaceholder': 'Type wilaya name...',
      'contactPage.form.chooseWilaya': 'Choose Your Wilaya',
      'contactPage.form.chooseWilayaPlaceholder': 'Select your wilaya',
      'contactPage.form.deliveryPrice': 'Delivery Price: {price}',
      'contactPage.form.deliveryTime': 'Estimated delivery: {time}',
      'contactPage.form.placeOrder': '🛒 Place Order',
      'contactPage.form.sendingOrder': '⏳ Sending Your Order...',
      'contactPage.form.success.title': 'Message sent successfully!',
      'contactPage.form.success.message': 'We\'ll get back to you within 24 hours.',
      'contactPage.form.error.title': 'Failed to send message',
      'contactPage.form.error.message': 'Please try again or contact us directly.',
      'contactPage.whyChoose.title': 'Why Choose Allouani Perfum?',
      'contactPage.whyChoose.expert': 'Expert fragrance consultants with years of experience',
      'contactPage.whyChoose.authentic': 'Authentic premium perfumes from top brands',
      'contactPage.whyChoose.personal': 'Personal scent matching and consultation',
      'contactPage.whyChoose.delivery': 'Nationwide delivery with care and expertise',
      'contactPage.cta.title': 'Ready to Find Your Signature Scent?',
      'contactPage.cta.description': 'Not sure which fragrance suits you? Get a free 30-minute fragrance consultation — no obligation.',
      'contactPage.cta.bookConsultation': '🌸 Book Free Fragrance Consultation',
      'contactPage.cta.viewPerfumes': '🌸 View Perfumes',
      'contactPage.cta.support': 'Premium fragrances delivered nationwide · 24/7 WhatsApp Support',
      
      // Product Gros Section
      'productGros.badge': '🏪 Wholesale Perfume Products',
      'productGros.title': 'Product Gros - Wholesale',
      'productGros.subtitle': 'Discover our exclusive wholesale perfume collections designed for retailers, boutiques, and business owners. Get competitive bulk pricing, authentic products, and comprehensive business support.',
      'productGros.benefitsBadge': '🏢 Wholesale Benefits: Bulk Pricing • Business Support • Fast Delivery',
      'productGros.contactWholesale': 'Contact for Wholesale',
      'productGros.cta.badge': '🏢 Start Your Wholesale Business Today',
      'productGros.cta.title': 'Ready to Start Your Perfume Business?',
      'productGros.cta.description': 'Join hundreds of successful retailers who trust us for their perfume wholesale needs. Get started with competitive pricing, authentic products, and comprehensive business support.',
      'productGros.cta.getPricing': 'Get Wholesale Pricing',
      'productGros.cta.callNow': 'Call Now: +213 671 38 91 13',
      
      // Footer
      'footer.company': 'Parfumerie Allouani',
      'footer.description': 'Your trusted partner for premium perfumes and luxury fragrances in Algeria.',
      'footer.quickLinks': 'Quick Links',
      'footer.contact': 'Contact',
      'footer.followUs': 'Follow Us',
      'footer.rights': '© 2024 Parfumerie Allouani. All rights reserved.',
    },
    fr: {
      // Navigation
      'nav.home': 'Accueil',
      'nav.perfumes': 'Parfums',
      'nav.productGros': 'Produits Gros',
      'nav.contact': 'Contact',
      'nav.shopNow': 'ACHETER MAINTENANT',
      
      // Hero Section
      'hero.badge': '✨ Parfums Premium & Fragrances en Algérie',
      'hero.title': 'Découvrez',
      'hero.typewriter.premium': 'Parfums Premium',
      'hero.typewriter.luxury': 'Fragrances de Luxe',
      'hero.typewriter.exotic': 'Parfums Exotiques',
      'hero.typewriter.designer': 'Marques de Créateurs',
      'hero.typewriter.signature': 'Collections Signature',
      'hero.subtitle': 'Spécialisés dans les parfums premium et les fragrances de luxe pour une clientèle exigeante en Algérie. Nous vous apportons les plus beaux parfums du monde pour sublimer votre style personnel.',
      'hero.shopPerfumes': 'Acheter des Parfums',
      'hero.viewCollections': 'Voir les Collections',
      
      // About Section
      'about.title': 'Les fragrances de luxe rencontrent l\'artisanat authentique',
      'about.description': 'Nous nous spécialisons dans la curation de parfums premium et de fragrances de luxe pour une clientèle exigeante en Algérie. Notre collection combine des marques authentiques avec une expertise pour livrer des parfums qui subliment votre style personnel, créent des impressions durables et reflètent votre personnalité unique.',
      'about.shopButton': 'ACHETER DES PARFUMS',
      
      // Services/Collections Section
      'services.title': 'Nos Collections',
      'services.subtitle': 'Nous sommes passionnés par l\'apport des plus belles fragrances du monde, soigneusement sélectionnées pour la clientèle algérienne exigeante !',
      'services.qualityBadge': '✨ Qualité Authentique & Premium Garantie : Seulement des Produits Originaux avec Conseil Expert en Parfums',
      'services.luxuryPerfumes.title': 'Parfums de Luxe',
      'services.luxuryPerfumes.description': 'Fragrances de créateurs premium des meilleures marques comme Tom Ford, Armani et Dior. Produits authentiques avec qualité garantie et présentation élégante.',
      'services.nicheFragrances.title': 'Fragrances de Niche',
      'services.nicheFragrances.description': 'Parfums exclusifs et rares de maisons artisanales comme Initio, Xerjoff et Maison Francis Kurkdjian. Parfums uniques pour une clientèle exigeante.',
      'services.signatureCollections.title': 'Collections Signature',
      'services.signatureCollections.description': 'Collections soigneusement sélectionnées de fragrances saisonnières et thématiques. Des parfums chauds d\'hiver aux parfums frais d\'été, nous avons le parfum parfait pour chaque occasion.',
      'services.shopNow': 'Acheter Maintenant',
      'services.showcase.badge': '✨ Vitrine de Collection Premium',
      'services.showcase.title': 'Découvrez Notre Collection de Fragrances de Luxe',
      'services.showcase.description': 'Découvrez la plus belle sélection de parfums premium des marques mondialement reconnues. Chaque fragrance est soigneusement sélectionnée pour vous offrir l\'expérience olfactive de luxe ultime.',
      'services.showcase.shopNow': 'Acheter Maintenant',
      
      // Popular Section
      'popular.title': 'Nos parfums les plus populaires',
      'popular.mobileHint': 'Glissez à gauche ou à droite pour naviguer • Touchez et glissez pour faire défiler',
      'popular.discount': 'Remise {discount}%',
      
      // Contact Section
      'contact.title': 'Discutons',
      'contact.description': 'Prêt à découvrir votre parfum signature parfait ? Nous aimerions vous aider à trouver la fragrance idéale qui correspond à votre personnalité et votre style. Contactez-nous dès aujourd\'hui et explorons ensemble le monde des parfums de luxe.',
      'contact.shopNow': 'ACHETER MAINTENANT',
      
      // Contact Page
      'contactPage.badge': '✨ Parfums Premium & Fragrances de Luxe',
      'contactPage.title': 'Contactez Allouani Perfum',
      'contactPage.subtitle': 'Prêt à découvrir votre parfum signature parfait ? Contactez-nous pour explorer notre collection premium de fragrances de luxe. Nous sommes là pour vous aider à trouver le parfum idéal qui correspond à votre personnalité et votre style.',
      'contactPage.form.badge': '🛒 Formulaire de Commande Rapide',
      'contactPage.form.title': 'Commandez Votre Parfum',
      'contactPage.form.subtitle': 'Entrez vos détails, choisissez votre wilaya, et voyez le prix de livraison instantanément.',
      'contactPage.form.firstName': 'Prénom',
      'contactPage.form.firstNamePlaceholder': 'Entrez votre prénom',
      'contactPage.form.lastName': 'Nom de famille',
      'contactPage.form.lastNamePlaceholder': 'Entrez votre nom de famille',
      'contactPage.form.phone': 'Numéro de téléphone',
      'contactPage.form.phonePlaceholder': '+213 559 94 82 46',
      'contactPage.form.product': 'Produit',
      'contactPage.form.productPlaceholder': 'Nom du produit ou lien',
      'contactPage.form.quantity': 'Quantité',
      'contactPage.form.searchWilaya': 'Rechercher Wilaya',
      'contactPage.form.searchWilayaPlaceholder': 'Tapez le nom de la wilaya...',
      'contactPage.form.chooseWilaya': 'Choisissez Votre Wilaya',
      'contactPage.form.chooseWilayaPlaceholder': 'Sélectionnez votre wilaya',
      'contactPage.form.deliveryPrice': 'Prix de livraison : {price}',
      'contactPage.form.deliveryTime': 'Livraison estimée : {time}',
      'contactPage.form.placeOrder': '🛒 Passer Commande',
      'contactPage.form.sendingOrder': '⏳ Envoi de Votre Commande...',
      'contactPage.form.success.title': 'Message envoyé avec succès !',
      'contactPage.form.success.message': 'Nous vous répondrons dans les 24 heures.',
      'contactPage.form.error.title': 'Échec de l\'envoi du message',
      'contactPage.form.error.message': 'Veuillez réessayer ou nous contacter directement.',
      'contactPage.whyChoose.title': 'Pourquoi Choisir Allouani Perfum ?',
      'contactPage.whyChoose.expert': 'Consultants en parfums experts avec des années d\'expérience',
      'contactPage.whyChoose.authentic': 'Parfums premium authentiques des meilleures marques',
      'contactPage.whyChoose.personal': 'Correspondance et consultation de parfums personnalisés',
      'contactPage.whyChoose.delivery': 'Livraison nationale avec soin et expertise',
      'contactPage.cta.title': 'Prêt à Trouver Votre Parfum Signature ?',
      'contactPage.cta.description': 'Vous ne savez pas quel parfum vous convient ? Obtenez une consultation gratuite de 30 minutes en parfums — sans engagement.',
      'contactPage.cta.bookConsultation': '🌸 Réserver Consultation Gratuite en Parfums',
      'contactPage.cta.viewPerfumes': '🌸 Voir les Parfums',
      'contactPage.cta.support': 'Fragrances premium livrées dans tout le pays · Support WhatsApp 24/7',
      
      // Product Gros Section
      'productGros.badge': '🏪 Produits de Parfums en Gros',
      'productGros.title': 'Produits Gros - Vente en Gros',
      'productGros.subtitle': 'Découvrez nos collections exclusives de parfums en gros conçues pour les détaillants, boutiques et propriétaires d\'entreprises. Obtenez des prix de gros compétitifs, des produits authentiques et un support commercial complet.',
      'productGros.benefitsBadge': '🏢 Avantages du Gros : Prix de Gros • Support Commercial • Livraison Rapide',
      'productGros.contactWholesale': 'Contact pour Gros',
      'productGros.cta.badge': '🏢 Commencez Votre Business de Parfums Aujourd\'hui',
      'productGros.cta.title': 'Prêt à Commencer Votre Business de Parfums ?',
      'productGros.cta.description': 'Rejoignez des centaines de détaillants prospères qui nous font confiance pour leurs besoins de parfums en gros. Commencez avec des prix compétitifs, des produits authentiques et un support commercial complet.',
      'productGros.cta.getPricing': 'Obtenir Prix de Gros',
      'productGros.cta.callNow': 'Appeler Maintenant : +213 671 38 91 13',
      
      // Footer
      'footer.company': 'Parfumerie Allouani',
      'footer.description': 'Votre partenaire de confiance pour les parfums premium et les fragrances de luxe en Algérie.',
      'footer.quickLinks': 'Liens Rapides',
      'footer.contact': 'Contact',
      'footer.followUs': 'Suivez-nous',
      'footer.rights': '© 2024 Parfumerie Allouani. Tous droits réservés.',
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

