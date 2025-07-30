"use client"

import { useEffect, useState } from "react"
import { Brain, Target, BarChart3, Zap, Users, Globe, MessageSquare, Palette } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { useInView } from "@/hooks/use-in-view"

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description: "Create compelling copy, social media posts, and marketing materials with advanced AI algorithms.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    title: "Smart Targeting",
    description: "Identify and reach your ideal audience with precision targeting powered by machine learning.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track performance, measure ROI, and optimize campaigns with real-time analytics and insights.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Automation Engine",
    description: "Automate repetitive tasks, schedule content, and streamline your marketing workflow.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work seamlessly with your team, share projects, and maintain brand consistency across all channels.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Globe,
    title: "Multi-Platform Publishing",
    description: "Publish content across all major social media platforms and marketing channels simultaneously.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot Builder",
    description: "Create intelligent chatbots that engage customers and drive conversions 24/7.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "Brand Kit Manager",
    description: "Maintain consistent branding with AI-powered brand guidelines and asset management.",
    color: "from-violet-500 to-purple-500",
  },
]

export function Features() {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    if (isInView) {
      features.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems((prev) => [...prev, index])
        }, index * 100)
      })
    }
  }, [isInView])

  return (
    <section id="features" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Powerful Features for
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Modern Marketing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to create, manage, and optimize your marketing campaigns with the power of AI
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isVisible = visibleItems.includes(index)

            return (
              <GlassCard
                key={index}
                className={`p-4 sm:p-6 group hover:scale-105 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
