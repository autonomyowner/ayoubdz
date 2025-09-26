const About = () => {
  
  const whyChooseUs = [
    {
      title: "Rapport qualité-prix imbattable",
      description: "Alors que d'autres gonflent les prix pour des produits moyens, AyoubDz garantit une qualité supérieure au meilleur tarif. Plus besoin de choisir entre prix abordable et durabilité : nos clients profitent des deux."
    },
    {
      title: "La priorité au client", 
      description: "Chez AyoubDz, nous ne vendons pas seulement des produits, nous construisons une relation de confiance. Service réactif, retours simplifiés et garantie de satisfaction : chaque client se sent en sécurité et valorisé."
    },
    {
      title: "Une sélection exclusive",
      description: "Contrairement aux magasins classiques qui proposent de tout, AyoubDz choisit avec soin ses produits. Confort, élégance et praticité au quotidien : vous recevez uniquement ce qui vous distingue."
    }
  ]
  
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Pourquoi nous choisir ?
          </h2>
        </div>

        <div className="space-y-8">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About 