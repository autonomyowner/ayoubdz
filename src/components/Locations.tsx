const Locations = () => {
  const locations = [
    {
      city: "Algiers Centre",
      status: "Active",
      schedules: [
        { time: "Saturday 1:00 PM - 3:00 PM", available: true },
        { time: "Saturday 3:30 PM - 5:30 PM", available: true }
      ],
      mapUrl: "https://maps.app.goo.gl/umc16T5RYNvepSnf8?g%5Fst=com.google.maps.preview.copy",
      description: "Our flagship location in the heart of Algiers, offering convenient access and modern facilities."
    },
    {
      city: "Tlemcen",
      status: "Coming Soon",
      schedules: [
        { time: "Saturday 1:00 PM - 3:30 PM", available: false },
        { time: "Saturday 4:00 PM - 6:30 PM", available: false }
      ],
      mapUrl: "https://maps.app.goo.gl/3Bt7sB3oSzWXjSWf7?g%5Fst=ic",
      description: "Expanding to Tlemcen to serve our growing community in western Algeria."
    }
  ]

  return (
    <section id="locations" className="section-padding glass-effect">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="premium-text">Locations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us at our convenient locations across Algeria. More locations coming soon!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="premium-card p-8 hover:transform hover:scale-105">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">{location.city}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  location.status === "Active" 
                    ? "bg-green-500/20 text-green-400 border border-green-400/30"
                    : "bg-yellow-500/20 text-yellow-400 border border-yellow-400/30"
                }`}>
                  {location.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {location.description}
              </p>

              {/* Schedules */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Available Sessions:</h4>
                <div className="space-y-2">
                  {location.schedules.map((schedule, scheduleIndex) => (
                    <div key={scheduleIndex} className={`flex items-center justify-between p-3 rounded-lg ${
                      schedule.available 
                        ? "bg-green-500/10 border border-green-400/20" 
                        : "bg-gray-500/10 border border-gray-400/20"
                    }`}>
                      <span className={`text-sm ${
                        schedule.available ? "text-green-400" : "text-gray-400"
                      }`}>
                        {schedule.time}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        schedule.available 
                          ? "bg-green-500/20 text-green-400" 
                          : "bg-gray-500/20 text-gray-400"
                      }`}>
                        {schedule.available ? "Available" : "Coming Soon"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Link */}
              <a 
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center premium-text hover:text-yellow-300 transition-colors"
              >
                <span className="mr-2">📍</span>
                View on Google Maps
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 premium-card p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join?</h3>
            <p className="text-gray-300 mb-6">
              Choose your preferred location and time slot when registering. 
              We'll send you a confirmation email with all the details.
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSf2VuR-BR-i3TWiM1E8ePIPlGjMVWy3bthaUTKx8N29YtVRBw/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Locations 