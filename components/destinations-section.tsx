"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star } from "lucide-react"

const destinations = [
  {
    name: "Santorini, Greece",
    image: "/santorini-greece-white-buildings-blue-domes-sunset.jpg",
    rating: 4.9,
    tours: 24,
    description: "Stunning sunsets and iconic white-washed villages",
  },
  {
    name: "Bali, Indonesia",
    image: "/bali-indonesia-rice-terraces-tropical-paradise.jpg",
    rating: 4.8,
    tours: 32,
    description: "Tropical paradise with rich culture and pristine beaches",
  },
  {
    name: "Patagonia, Chile",
    image: "/patagonia-chile-mountains-glaciers-dramatic-landsc.jpg",
    rating: 4.9,
    tours: 18,
    description: "Majestic mountains and breathtaking glaciers",
  },
  {
    name: "Kyoto, Japan",
    image: "/kyoto-japan-traditional-temples-cherry-blossoms.jpg",
    rating: 5.0,
    tours: 28,
    description: "Ancient temples and serene gardens",
  },
  {
    name: "Iceland",
    image: "/iceland-northern-lights-waterfalls-dramatic-scener.jpg",
    rating: 4.9,
    tours: 21,
    description: "Land of fire and ice with spectacular natural wonders",
  },
  {
    name: "Machu Picchu, Peru",
    image: "/machu-picchu-peru-ancient-ruins-mountain-peaks.jpg",
    rating: 5.0,
    tours: 16,
    description: "Ancient Incan citadel high in the Andes",
  },
]

export default function DestinationsSection() {
  return (
    <section id="destinations" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {"Popular "}
            <span className="text-primary">Destinations</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            {"Discover the world's most captivating places, carefully curated for unforgettable experiences"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card
              key={destination.name}
              className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="fill-accent text-accent" size={16} />
                  <span className="font-semibold text-sm">{destination.rating}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{destination.name}</h3>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{destination.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} />
                  <span>{destination.tours} tours available</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
