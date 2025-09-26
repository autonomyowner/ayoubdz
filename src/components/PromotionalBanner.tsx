const PromotionalBanner = () => {
  const promotionalTexts = [
    "التوصيل متوفر 58 ولاية",
    "سيتم اتصال بكم لتأكيد الطلب قبل ارساله", 
    "اوقات الاتصال من 10 حتى 17"
  ]

  const promotionalTextsFrench = [
    "réduction limitée jusqu'à -25%!!!",
    "offre spéciale pour la rentrée scolaire 2025"
  ]

  return (
    <>
      {/* Arabic Banner */}
      <div className="bg-blue-600 text-white py-2 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-scroll">
          {[...promotionalTexts, ...promotionalTexts, ...promotionalTexts].map((text, index) => (
            <div key={index} className="flex-shrink-0 px-8 text-sm font-medium">
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* French Banner */}
      <div className="bg-orange-500 text-white py-2 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-scroll">
          {[...promotionalTextsFrench, ...promotionalTextsFrench, ...promotionalTextsFrench].map((text, index) => (
            <div key={index} className="flex-shrink-0 px-8 text-sm font-medium">
              {text}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default PromotionalBanner
