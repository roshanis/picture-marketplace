import Image from "next/image"
import Link from "next/link"
import { Camera, DollarSign } from "lucide-react"

const pictures = [
  { id: 1, title: "Mountain Landscape", price: 19.99 },
  { id: 2, title: "Sunset Beach", price: 24.99 },
  { id: 3, title: "City Skyline", price: 29.99 },
  { id: 4, title: "Forest Path", price: 22.99 },
  { id: 5, title: "Autumn Colors", price: 21.99 },
  { id: 6, title: "Desert Dunes", price: 26.99 },
  { id: 7, title: "Tropical Waterfall", price: 27.99 },
  { id: 8, title: "Northern Lights", price: 34.99 },
  { id: 9, title: "Snowy Mountains", price: 23.99 },
  { id: 10, title: "Lavender Fields", price: 25.99 },
  { id: 11, title: "Coral Reef", price: 28.99 },
  { id: 12, title: "Cherry Blossoms", price: 31.99 },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Picture Marketplace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pictures.map((picture) => (
          <Link href={`/picture/${picture.id}`} key={picture.id} className="block">
            <div className="border rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <Image
                src={`/placeholder.svg?height=300&width=400&text=${encodeURIComponent(picture.title)}`}
                alt={picture.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 flex items-center">
                  <Camera className="w-5 h-5 mr-2" />
                  {picture.title}
                </h2>
                <p className="text-gray-600 flex items-center">
                  <DollarSign className="w-5 h-5 mr-1" />
                  {picture.price.toFixed(2)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

