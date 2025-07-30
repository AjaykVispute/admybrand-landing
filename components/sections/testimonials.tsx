"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { useInView } from "@/hooks/use-in-view"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    image: "/professional-woman-smiling.png",
    rating: 5,
    content:
      "ADmyBRAND AI has completely transformed our marketing strategy. We've seen a 300% increase in engagement and our content creation time has been cut in half. The AI-generated copy is incredibly natural and on-brand.",
  },
  {
    name: "Michael Chen",
    role: "Founder & CEO",
    company: "StartupBoost",
    image: "/professional-asian-man-smiling.png",
    rating: 5,
    content:
      "As a startup, we needed to move fast and create quality content on a budget. ADmyBRAND AI gave us the tools to compete with much larger companies. The ROI has been phenomenal - we've grown our user base by 500% in just 6 months.",
  },
  {
    name: "Emily Rodriguez",
    role: "Social Media Manager",
    company: "Fashion Forward",
    image: "/professional-latina-woman-smiling.png",
    rating: 5,
    content:
      "The multi-platform publishing feature is a game-changer. I can create content once and deploy it across all our social channels with perfect formatting. The analytics dashboard helps me optimize everything in real-time.",
  },
  {
    name: "David Thompson",
    role: "VP of Marketing",
    company: "Global Dynamics",
    image: "/smiling-bearded-professional.png",
    rating: 5,
    content:
      "We've tried many marketing tools, but nothing comes close to ADmyBRAND AI. The team collaboration features and brand consistency tools have streamlined our entire marketing operation. Highly recommended!",
  },
  {
    name: "Lisa Park",
    role: "Digital Marketing Specialist",
    company: "EcoGreen Solutions",
    image: "/smiling-professional-woman.png",
    rating: 5,
    content:
      "The AI chatbot builder has revolutionized our customer service. We're now handling 80% more inquiries with the same team size, and customer satisfaction has never been higher. The automation features are incredible.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, isInView] = useInView({ threshold: 0.1 })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Our Customers
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their marketing with ADmyBRAND AI
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <GlassCard
            className={`p-8 md:p-12 transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center">
              <Quote className="w-12 h-12 text-purple-400 mx-auto mb-6" />

              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-white">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                  <p className="text-purple-400 text-sm">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button variant="ghost" size="sm" onClick={prevTestimonial} className="text-gray-400 hover:text-white">
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? "bg-purple-500" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <Button variant="ghost" size="sm" onClick={nextTestimonial} className="text-gray-400 hover:text-white">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Customer Logos */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-8">Trusted by leading companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {["TechFlow", "StartupBoost", "Fashion Forward", "Global Dynamics", "EcoGreen"].map((company, index) => (
              <div key={index} className="text-gray-500 font-semibold text-lg">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
