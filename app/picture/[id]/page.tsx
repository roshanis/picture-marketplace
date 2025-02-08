import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import AddToCartButton from "@/components/AddToCartButton"
import { Camera, DollarSign, FileText } from "lucide-react"

const pictures = [
  {
    id: 1,
    title: "Mountain Landscape",
    price: 19.99,
    description: "A beautiful mountain landscape with snow-capped peaks.",
  },
  {
    id: 2,
    title: "Sunset Beach",
    price: 24.99,
    description: "A stunning sunset over a tropical beach with palm trees.",
  },
  { id: 3, title: "City Skyline", price: 29.99, description: "A modern city skyline at night with glowing lights." },
  { id: 4, title: "Forest Path", price: 22.99, description: "A serene path through a lush green forest." },
  {
    id: 5,
    title: "Autumn Colors",
    price: 21.99,
    description: "Vibrant autumn foliage in a picturesque forest setting.",
  },
  {
    id: 6,
    title: "Desert Dunes",
    price: 26.99,
    description: "Golden sand dunes stretching as far as the eye can see.",
  },
  {
    id: 7,
    title: "Tropical Waterfall",
    price: 27.99,
    description: "A cascading waterfall in a lush tropical rainforest.",
  },
  {
    id: 8,
    title: "Northern Lights",
    price: 34.99,
    description: "The mesmerizing aurora borealis dancing in the night sky.",
  },
  {
    id: 9,
    title: "Snowy Mountains",
    price: 23.99,
    description: "Majestic snow-covered mountains against a clear blue sky.",
  },
  { id: 10, title: "Lavender Fields", price: 25.99, description: "Endless purple lavender fields in full bloom." },
  { id: 11, title: "Coral Reef", price: 28.99, description: "Vibrant coral reef teeming with colorful marine life." },
  {
    id: 12,
    title: "Cherry Blossoms",
    price: 31.99,
    description: "Delicate pink cherry blossoms in a tranquil Japanese garden.",
  },
]

export default function PicturePage({ params }: { params: { id: string } }) {
  const picture = pictures.find((p) => p.id === Number.parseInt(params.id))

  if (!picture) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Back to Gallery
      </Link>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={`/placeholder.svg?height=600&width=800&text=${encodeURIComponent(picture.title)}`}
            alt={picture.title}
            width={800}
            height={600}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4 flex items-center">
            <Camera className="w-8 h-8 mr-2" />
            {picture.title}
          </h1>
          <p className="text-xl text-gray-600 mb-4 flex items-center">
            <DollarSign className="w-6 h-6 mr-1" />
            {picture.price.toFixed(2)}
          </p>
          <p className="text-gray-700 mb-6 flex items-start">
            <FileText className="w-6 h-6 mr-2 mt-1" />
            {picture.description}
          </p>
          <AddToCartButton picture={picture} />
        </div>
      </div>
    </div>
  )
}

