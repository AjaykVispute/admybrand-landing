"use client"

import { useState } from "react"
import { Calculator, Users, FileText, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"

export function PricingCalculator() {
  const [teamSize, setTeamSize] = useState(10)
  const [contentVolume, setContentVolume] = useState(1000)
  const [features, setFeatures] = useState({
    analytics: true,
    automation: true,
    integrations: false,
    whiteLabel: false,
  })

  const calculatePrice = () => {
    let basePrice = 29

    // Team size pricing
    if (teamSize > 5) basePrice += (teamSize - 5) * 5
    if (teamSize > 25) basePrice += (teamSize - 25) * 3

    // Content volume pricing
    if (contentVolume > 5000) basePrice += Math.ceil((contentVolume - 5000) / 1000) * 10

    // Feature pricing
    if (features.analytics) basePrice += 20
    if (features.automation) basePrice += 30
    if (features.integrations) basePrice += 25
    if (features.whiteLabel) basePrice += 50

    return Math.min(basePrice, 299) // Cap at enterprise price
  }

  const recommendedPlan = () => {
    const price = calculatePrice()
    if (price <= 50) return "Starter"
    if (price <= 120) return "Professional"
    return "Enterprise"
  }

  return (
    <GlassCard className="p-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Calculator className="w-8 h-8 text-purple-400 mr-3" />
          <h3 className="text-2xl font-bold text-white">Interactive Pricing Calculator</h3>
        </div>
        <p className="text-gray-400">Customize your plan based on your specific needs and get an instant quote</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Calculator Inputs */}
        <div className="space-y-6">
          <div>
            <label className="flex items-center text-white font-semibold mb-3">
              <Users className="w-5 h-5 mr-2 text-purple-400" />
              Team Size: {teamSize} members
            </label>
            <input
              type="range"
              min="1"
              max="100"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-gray-400 mt-1">
              <span>1</span>
              <span>100+</span>
            </div>
          </div>

          <div>
            <label className="flex items-center text-white font-semibold mb-3">
              <FileText className="w-5 h-5 mr-2 text-purple-400" />
              Monthly Content: {contentVolume.toLocaleString()} words
            </label>
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={contentVolume}
              onChange={(e) => setContentVolume(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-gray-400 mt-1">
              <span>1K</span>
              <span>50K+</span>
            </div>
          </div>

          <div>
            <label className="flex items-center text-white font-semibold mb-3">
              <BarChart className="w-5 h-5 mr-2 text-purple-400" />
              Additional Features
            </label>
            <div className="space-y-3">
              {Object.entries(features).map(([key, value]) => (
                <label key={key} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => setFeatures((prev) => ({ ...prev, [key]: e.target.checked }))}
                    className="mr-3 w-4 h-4 text-purple-500 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"
                  />
                  <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Price Display */}
        <div className="flex flex-col justify-center">
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-white mb-2">
              ${calculatePrice()}
              <span className="text-lg text-gray-400">/month</span>
            </div>
            <div className="text-purple-400 font-semibold">Recommended: {recommendedPlan()} Plan</div>
          </div>

          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-6 mb-6">
            <h4 className="text-white font-semibold mb-3">Your Custom Plan Includes:</h4>
            <ul className="text-gray-300 space-y-2">
              <li>
                • {teamSize} team member{teamSize !== 1 ? "s" : ""}
              </li>
              <li>• {contentVolume.toLocaleString()} AI-generated words/month</li>
              <li>
                • {Object.values(features).filter(Boolean).length} premium feature
                {Object.values(features).filter(Boolean).length !== 1 ? "s" : ""}
              </li>
              <li>• 24/7 priority support</li>
              <li>• 14-day free trial</li>
            </ul>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            Start Your Custom Plan
          </Button>
        </div>
      </div>
    </GlassCard>
  )
}
