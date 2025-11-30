"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/professional-woman-smiling-headshot.png",
    rating: 5,
    text: "This app completely transformed how I travel. The personalized recommendations led me to places I would have never discovered on my own. Absolutely incredible experience!",
    trip: "Southeast Asia Adventure",
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    image: "/professional-man-smiling-headshot.png",
    rating: 5,
    text: "The community aspect is fantastic. I met amazing people during my travels and the local insights were invaluable. Planning my next trip is already underway!",
    trip: "European Discovery",
  },
  {
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    image: "/professional-woman-outdoor-headshot.jpg",
    rating: 5,
    text: "As a solo traveler, safety was my top concern. This platform gave me confidence and connected me with reliable guides. It made my South American journey unforgettable.",
    trip: "South America Expedition",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {"Stories from "}
            <span className="text-primary">Our Travelers</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            {"Join thousands of happy travelers who have discovered their dream destinations with us"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <Quote className="text-primary/20 mb-4" size={40} />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="fill-accent text-accent" size={18} />
                  ))}
                </div>

                <p className="text-foreground mb-6 leading-relaxed italic">{`"${testimonial.text}"`}</p>

                <div className="flex items-center gap-4 pt-4 border-t">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <div className="text-xs text-primary mt-1">{testimonial.trip}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
