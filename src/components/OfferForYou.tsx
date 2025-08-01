const OfferForYou = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transform scale-x-[-1] rotate-45"
        >
          <source src="/pics/fliphero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 glass-effect border border-yellow-500/30 rounded-full premium-text text-sm font-medium mb-8">
            <span className="mr-2">🚀</span>
            Exclusive Business Opportunity for Billel Madani
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Billel Madani
            <span className="block premium-text">Scale Your Empire</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform The HIVE from a local speaking club into a 50M DA/year digital empire. 
            We've identified the exact bottleneck holding you back from 10x growth.
          </p>

          {/* Pain Point Section */}
          <div className="bg-red-900/20 border border-red-500/30 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">The Problem You're Facing</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-red-400 text-xl">❌</div>
                  <div>
                    <h4 className="text-white font-semibold">Geographic Limitation</h4>
                    <p className="text-gray-300 text-sm">You're capped by physical location capacity. Only so many people can attend in-person sessions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-red-400 text-xl">❌</div>
                  <div>
                    <h4 className="text-white font-semibold">Intimidation Barrier</h4>
                    <p className="text-gray-300 text-sm">70% of your 500K followers are too intimidated by public speaking to join in-person.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-red-400 text-xl">❌</div>
                  <div>
                    <h4 className="text-white font-semibold">Revenue Ceiling</h4>
                    <p className="text-gray-300 text-sm">You're leaving millions on the table by not monetizing your massive online audience.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-red-400 text-xl">❌</div>
                  <div>
                    <h4 className="text-white font-semibold">Time Constraints</h4>
                    <p className="text-gray-300 text-sm">You can only be in one place at one time. Your impact is limited by your physical presence.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-red-400 text-xl">❌</div>
                  <div>
                    <h4 className="text-white font-semibold">Scalability Issues</h4>
                    <p className="text-gray-300 text-sm">Growing physical locations requires massive capital and operational complexity.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-red-400 text-xl">❌</div>
                  <div>
                    <h4 className="text-white font-semibold">Competition Risk</h4>
                    <p className="text-gray-300 text-sm">Someone else will solve this problem and capture your market if you don't act now.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="bg-green-900/20 border border-green-500/30 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">The Solution: Digital Transformation</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl">✅</div>
                  <div>
                    <h4 className="text-white font-semibold">Global Reach</h4>
                    <p className="text-gray-300 text-sm">Tap into your 500K followers worldwide. No geographic limitations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl">✅</div>
                  <div>
                    <h4 className="text-white font-semibold">Reduced Intimidation</h4>
                    <p className="text-gray-300 text-sm">Online environment makes public speaking less intimidating for beginners.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl">✅</div>
                  <div>
                    <h4 className="text-white font-semibold">Automated Revenue</h4>
                    <p className="text-gray-300 text-sm">Recurring monthly subscriptions create predictable, scalable income.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl">✅</div>
                  <div>
                    <h4 className="text-white font-semibold">24/7 Availability</h4>
                    <p className="text-gray-300 text-sm">Your brand works for you even when you're sleeping.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl">✅</div>
                  <div>
                    <h4 className="text-white font-semibold">Data-Driven Growth</h4>
                    <p className="text-gray-300 text-sm">Track user behavior and optimize for maximum conversion.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl">✅</div>
                  <div>
                    <h4 className="text-white font-semibold">Partnership Opportunities</h4>
                    <p className="text-gray-300 text-sm">Collaborate with English schools, brands, and educational institutions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Projection */}
          <div className="bg-slate-800/30 backdrop-blur-md border border-yellow-500/30 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Revenue Projection: The Numbers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold premium-text mb-2">500K</div>
                <div className="text-gray-400">Instagram Followers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold premium-text mb-2">5%</div>
                <div className="text-gray-400">Conservative Conversion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold premium-text mb-2">25K</div>
                <div className="text-gray-400">Potential Subscribers</div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl">
              <div className="text-center">
                <div className="text-5xl font-bold premium-text mb-2">50M DA</div>
                <div className="text-gray-300 text-lg">Annual Revenue Potential</div>
                <div className="text-gray-400 text-sm mt-2">(25K subscribers × 2000 DA/month × 12 months)</div>
              </div>
            </div>
          </div>

          {/* Our Offer */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">What We're Offering You</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="premium-card p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">🎯 Complete SaaS Platform</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Modern subscription management system</li>
                    <li>• Automated payment processing with Baridimob</li>
                    <li>• User dashboard and progress tracking</li>
                    <li>• Mobile-responsive design</li>
                  </ul>
                </div>
                <div className="premium-card p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">🎤 Discord Community Setup</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Private Discord server with role management</li>
                    <li>• Automated onboarding system</li>
                    <li>• Integration with your existing brand</li>
                    <li>• Moderation tools and analytics</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="premium-card p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">📈 Marketing Strategy</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Conversion-optimized landing pages</li>
                    <li>• Email marketing automation</li>
                    <li>• Social media campaign strategy</li>
                    <li>• Partnership outreach framework</li>
                  </ul>
                </div>
                <div className="premium-card p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">🚀 Launch Support</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• 3 months of technical support</li>
                    <li>• Performance optimization</li>
                    <li>• Analytics and reporting setup</li>
                    <li>• Training for your team</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Section */}
          <div className="bg-slate-800/30 backdrop-blur-md border border-yellow-500/30 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Your Investment vs. Return</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Investment</h3>
                <div className="text-5xl font-bold text-red-400 mb-2">50K DA</div>
                <div className="text-gray-400">Initial payment (10% upfront)</div>
                <div className="text-sm text-gray-500 mt-2">Remaining 450K DA after your SaaS generates revenue</div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Potential Return</h3>
                <div className="text-5xl font-bold premium-text mb-2">50M DA</div>
                <div className="text-gray-400">Annual revenue potential</div>
                <div className="text-sm text-gray-500 mt-2">(1000x return on initial investment)</div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-2xl">
              <div className="text-center">
                <div className="text-lg font-bold text-green-400 mb-2">🎯 Risk-Free Investment</div>
                <div className="text-gray-300 text-sm">Pay only 10% upfront. Complete payment only after your SaaS starts generating revenue.</div>
              </div>
            </div>
          </div>

          {/* Urgency Section */}
          <div className="bg-red-900/20 border border-red-500/30 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-6">Why You Must Act Now</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">⏰</div>
                <h4 className="text-white font-semibold mb-2">First-Mover Advantage</h4>
                <p className="text-gray-300 text-sm">Be the first to capture this market. Others will follow.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h4 className="text-white font-semibold mb-2">Market Opportunity</h4>
                <p className="text-gray-300 text-sm">Your 500K followers are waiting for this solution.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h4 className="text-white font-semibold mb-2">Revenue Loss</h4>
                <p className="text-gray-300 text-sm">Every day you wait, you're losing potential revenue.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Scale Your Empire?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the elite 1% of entrepreneurs who take action. 
              Your 500K followers are waiting for this transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSf2VuR-BR-i3TWiM1E8ePIPlGjMVWy3bthaUTKx8N29YtVRBw/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                🚀 Start Your Digital Transformation
              </a>
              <a 
                href="https://wa.me/+213797339451" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4"
              >
                <span className="mr-2">📞</span>
                WhatsApp Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OfferForYou 