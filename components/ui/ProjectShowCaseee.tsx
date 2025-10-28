import Image from "next/image"
import { cn } from "@/lib/utils"
import Video from "next-video"
interface ProjectShowcaseProps {
  coverImage: string
  title: string
  mainDescription: string
 video:string
  images: string[]
  className?: string
}

export default function ProjectShowcaseee({
  coverImage,
  title,
  mainDescription,
  images,
  className,
  video
}: ProjectShowcaseProps) {
  return (
    <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {/* Cover Image Banner */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] mb-8 overflow-hidden rounded-lg">
        <Image src={coverImage || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      </div>

      {/* Title and Main Description */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary mb-6">{title}</h1>
        <p className="text-lg md:text-xl text-muted-foreground">{mainDescription}</p>
      </div>

      {/* Concept and Description */}
     

      <div id="vid" className="mx-auto flex justify-center items-center min-h-screen px-4">
  <div className="w-full max-w-[400px] aspect-[9/16]">
    <Video
      src={video}
      className="w-full h-full object-cover rounded-xl shadow-lg"
      controls
    />
  </div>
</div>

      {/* Image Grid */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-primary mb-6">Gallery</h2>
        <div className="grid grid-cols-1  lg:grid-cols-2 2xl:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-video overflow-hidden rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Project image ${index + 1}`}
                fill
                className="object-cover  transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}