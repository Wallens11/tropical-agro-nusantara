"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type GallerySliderProps = {
  slides: string[]
  alt: string
}

export function GallerySlider({ slides, alt }: GallerySliderProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1))
  }

  const showNext = () => {
    setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1))
  }

  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src={slides[activeIndex]}
        alt={alt}
        fill
        className="object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/30 via-black/10 to-transparent px-4 pb-4 pt-10">
        <Button
          type="button"
          size="icon-sm"
          variant="outline"
          className="rounded-full border-white/75 bg-white/90 hover:bg-white"
          onClick={showPrevious}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous processing photo</span>
        </Button>
        <div className="flex items-center gap-1.5">
          {slides.map((slide, index) => (
            <span
              key={slide}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? "w-6 bg-white" : "w-2 bg-white/65"
              }`}
            />
          ))}
        </div>
        <Button
          type="button"
          size="icon-sm"
          variant="outline"
          className="rounded-full border-white/75 bg-white/90 hover:bg-white"
          onClick={showNext}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next processing photo</span>
        </Button>
      </div>
    </div>
  )
}
