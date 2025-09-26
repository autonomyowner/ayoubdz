const GuaranteesSection = () => {
  const guarantees = [
    {
      icon: "💳",
      title: "الدفع عند استلام",
      description: "ادفع عند باب منزلك"
    },
    {
      icon: "🚚", 
      title: "توصيل سريع",
      description: "اطلب الآن واحصل على طلبك غدًا"
    },
    {
      icon: "🔄",
      title: "استبدال", 
      description: "لا تتردد في استبداله"
    },
    {
      icon: "↩️",
      title: "إرجاع مجاني",
      description: "غير راض؟ أعده مجانا"
    }
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nos garanties à nos clients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((guarantee, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">{guarantee.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {guarantee.title}
              </h3>
              <p className="text-gray-600 font-medium">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GuaranteesSection
