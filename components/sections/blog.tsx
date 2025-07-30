"use client"

import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { useInView } from "@/hooks/use-in-view"

const blogPosts = [
  {
    title: "10 AI Marketing Trends That Will Dominate 2025",
    excerpt:
      "Discover the cutting-edge AI marketing strategies that forward-thinking brands are using to stay ahead of the competition.",
    image: "/ai-marketing-dashboard.png",
    date: "2024-12-15",
    readTime: "5 min read",
    category: "Trends",
  },
  {
    title: "How to Create Converting Copy with AI in Minutes",
    excerpt:
      "Learn the proven framework for generating high-converting marketing copy using AI tools and best practices.",
    image: "/copywriting-ai-interface.png",
    date: "2024-12-10",
    readTime: "7 min read",
    category: "Tutorial",
  },
  {
    title: "Case Study: 300% ROI Increase with AI Marketing",
    excerpt:
      "See how TechFlow Inc. transformed their marketing strategy and achieved unprecedented growth with ADmyBRAND AI.",
    image: "/marketing-analytics-dashboard.png",
    date: "2024-12-05",
    readTime: "8 min read",
    category: "Case Study",
  },
]

export function Blog() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="blog" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Latest Insights &
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Resources
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights, tutorials, and case studies from the world of AI marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <GlassCard
              key={index}
              className={`overflow-hidden group hover:scale-105 transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">{post.excerpt}</p>

                <Button
                  variant="ghost"
                  className="text-purple-400 hover:text-white p-0 h-auto group-hover:translate-x-1 transition-transform"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white bg-transparent"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
