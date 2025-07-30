"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { useInView } from "@/hooks/use-in-view"

const faqs = [
  {
    question: "How does ADmyBRAND AI generate content?",
    answer:
      "Our AI uses advanced natural language processing and machine learning algorithms trained on millions of high-quality marketing materials. It understands your brand voice, target audience, and campaign objectives to generate compelling, on-brand content that resonates with your customers.",
  },
  {
    question: "Can I customize the AI to match my brand voice?",
    answer:
      "ADmyBRAND AI learns from your existing content, brand guidelines, and feedback to adapt to your unique voice and style. You can also set specific tone preferences, keywords, and messaging guidelines that the AI will consistently follow across all generated content.",
  },
  {
    question: "What social media platforms are supported?",
    answer:
      "We support all major social media platforms including Facebook, Instagram, Twitter, LinkedIn, TikTok, YouTube, Pinterest, and more. Our multi-platform publishing feature automatically optimizes content format and sizing for each platform's specific requirements.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 14-day free trial for all new users. No credit card required. You'll have full access to all features in your chosen plan during the trial period, so you can experience the full power of ADmyBRAND AI before making a commitment.",
  },
  {
    question: "How secure is my data?",
    answer:
      "Data security is our top priority. We use enterprise-grade encryption, secure cloud infrastructure, and comply with GDPR, CCPA, and other privacy regulations. Your content and data are never shared with third parties, and you maintain full ownership of all generated content.",
  },
  {
    question: "Can I integrate ADmyBRAND AI with my existing tools?",
    answer:
      "Yes! We offer robust API access and integrations with popular marketing tools like HubSpot, Salesforce, Mailchimp, Google Analytics, and many others. Our Professional and Enterprise plans include custom integration support to connect with your specific tech stack.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We provide comprehensive support including email support for all plans, priority support for Professional users, and dedicated account management for Enterprise customers. We also offer extensive documentation, video tutorials, and regular webinars to help you maximize your results.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time with no cancellation fees. If you cancel, you'll continue to have access to your plan features until the end of your current billing period. We also offer pause options if you need a temporary break.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about ADmyBRAND AI and how it can transform your marketing
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <GlassCard
              key={index}
              className={`mb-4 transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-purple-400 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
