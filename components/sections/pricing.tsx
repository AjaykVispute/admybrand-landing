"use client"

import { useState } from "react"
import { Check, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { PricingCalculator } from "@/components/ui/pricing-calculator"
import { useInView } from "@/hooks/use-in-view"

const plans = [
  {
    name: "Starter",
    price: 29,
    yearlyPrice: 290,
    description: "Perfect for small businesses and startups",
    features: [
      "5,000 AI-generated words/month",
      "10 social media accounts",
      "Basic analytics dashboard",
      "Email support",
      "5 team members",
      "Brand kit manager",
    ],
    popular: false,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Professional",
    price: 79,
    yearlyPrice: 790,
    description: "Ideal for growing businesses and agencies",
    features: [
      "25,000 AI-generated words/month",
      "Unlimited social media accounts",
      "Advanced analytics & reporting",
      "Priority support",
      "25 team members",
      "Custom brand guidelines",
      "API access",
      "White-label options",
    ],
    popular: true,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Enterprise",
    price: 199,
    yearlyPrice: 1990,
    description: "For large organizations with custom needs",
    features: [
      "Unlimited AI-generated words",
      "Unlimited everything",
      "Custom integrations",
      "Dedicated account manager",
      "Unlimited team members",
      "Advanced security features",
      "Custom AI model training",
      "SLA guarantee",
    ],
    popular: false,
    color: "from-emerald-500 to-teal-500",
  },
]

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false)
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="pricing" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${!isYearly ? "text-white" : "text-gray-400"}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                isYearly ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-gray-600"
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  isYearly ? "translate-x-8" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-lg ${isYearly ? "text-white" : "text-gray-400"}`}>
              Yearly
              <span className="ml-2 text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {plans.map((plan, index) => (
            <GlassCard
              key={plan.name}
              className={`p-6 sm:p-8 relative transition-all duration-500 hover:scale-105 ${
                plan.popular ? "ring-2 ring-purple-500" : ""
              } ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl font-bold text-white">
                    ${isYearly ? plan.yearlyPrice : plan.price}
                  </span>
                  <span className="text-sm sm:text-base text-gray-400">/{isYearly ? "year" : "month"}</span>
                </div>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full text-sm sm:text-base ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    : "bg-gray-700 hover:bg-gray-600 text-white"
                }`}
                size="lg"
              >
                {plan.popular ? (
                  <>
                    <Zap className="w-4 h-4 mr-2" />
                    Get Started
                  </>
                ) : (
                  "Choose Plan"
                )}
              </Button>
            </GlassCard>
          ))}
        </div>

        {/* Interactive Pricing Calculator */}
        <PricingCalculator />
      </div>
    </section>
  )
}
