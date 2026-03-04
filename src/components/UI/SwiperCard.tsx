import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  children: React.ReactNode;
};

export default function EmblaCarousel({ children }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="relative w-full flex items-center justify-center gap-2">
      <button
        onClick={scrollPrev}
        className="relative max-w-max max-h-max text-white rounded-full hover:bg-white hover:text-black transition"
      >
        <ChevronLeft size={32} />
      </button>

      <div className="embla overflow-hidden w-full max-w-8xl" ref={emblaRef}>
        <div className="embla__container flex">
          {React.Children.map(children, (child) => (
            <div className="embla__slide flex-shrink-0 w-full px-4">{child}</div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollNext}
        className="relative max-w-max max-h-max text-white p-2 rounded-full hover:bg-white hover:text-black transition"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}
