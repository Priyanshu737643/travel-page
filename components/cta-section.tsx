"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/tropical-beach-paradise-aerial-view-turquoise-wate.jpg" alt="CTA background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl mx-auto text-center text-white space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
            {"Ready to Start Your "}
            <span className="text-white/90">Journey?</span>
          </h2>
          <p className="text-xl text-white/90 text-pretty leading-relaxed">
            {
              "Join over 100,000 travelers who have discovered their dream destinations. Your next adventure is just a click away."
            }
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg group">
              {"Get Started Free"}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              {"View Pricing"}
            </Button>
          </div>
          <p className="text-sm text-white/70">{"No credit card required • Free 14-day trial • Cancel anytime"}</p>
        </div>
      </div>
    </section>
  )
}
