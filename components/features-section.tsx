"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Shield, Users, Zap, Heart, Globe } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Smart Planning",
    description: "AI-powered itinerary suggestions tailored to your preferences and travel style",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Travel with confidence knowing your bookings and data are protected 24/7",
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with fellow travelers and share experiences from around the world",
  },
  {
    icon: Zap,
    title: "Instant Booking",
    description: "Book flights, hotels, and activities in seconds with our streamlined process",
  },
  {
    icon: Heart,
    title: "Personalized",
    description: "Get recommendations based on your interests, budget, and previous trips",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Access 10,000+ destinations and local experiences in 195 countries",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {"Everything You Need for the "}
            <span className="text-primary">Perfect Trip</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            {"Powerful features designed to make travel planning effortless and enjoyable"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="group hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-10"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
