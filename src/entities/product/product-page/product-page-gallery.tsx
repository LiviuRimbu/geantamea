"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/shared/ui/shadcn/carousel";

type ProductPageGalleryProps = {
  direction: "vertical" | "horizontal";
  sortedImages: {
    thumbImg: string[];
    mediumImg: string[];
    largeImg: string[];
    base64Img: string[];
  };
};

export const ProductPageGallery = ({
  sortedImages,
  direction,
}: ProductPageGalleryProps) => {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbApi, setThumbApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!mainApi || !thumbApi) return;

    const onSelect = () => {
      const index = mainApi.selectedScrollSnap();
      setActiveIndex(index);
      thumbApi.scrollTo(index);
    };

    mainApi.on("select", onSelect);
    return () => {
      mainApi.off("select", onSelect);
    };
  }, [mainApi, thumbApi]);

  const handleThumbClick = (index: number) => {
    setActiveIndex(index);

    mainApi?.scrollTo(index);

    const imageElement = document.getElementById(`main-image-${index}`);
    if (imageElement && window.innerWidth >= 1024) {
      const navbarHeight = 80;
      const elementPosition =
        imageElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex w-full flex-col-reverse lg:flex-row lg:w-[600px] justify-center items-start gap-6 max-w-full overflow-x-hidden">
      <div className="w-full lg:w-24 lg:h-[500px] lg:sticky lg:top-[100px] lg:self-start flex justify-center px-4 lg:px-0">
        <Carousel
          setApi={setThumbApi}
          orientation={direction}
          opts={{
            axis: direction === "horizontal" ? "x" : "y",
            dragFree: true,
            containScroll: "trimSnaps",
          }}
          className="w-full max-w-sm lg:w-24 lg:h-full"
        >
          <CarouselContent className="flex flex-row lg:flex-col ml-0 gap-2">
            {sortedImages.thumbImg.map((thumb, index) => (
              <CarouselItem key={index} className="basis-auto pl-0 select-none">
                <div
                  className={`h-20 w-20 lg:h-24 lg:w-24 transition-all duration-200 cursor-pointer rounded-md overflow-hidden border-2 ${
                    index === activeIndex
                      ? "opacity-100"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                  onClick={() => handleThumbClick(index)}
                >
                  <Image
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Main Gallery - Mobile (Carousel) */}
      <div className="w-full lg:hidden overflow-hidden">
        <Carousel
          setApi={setMainApi}
          orientation="horizontal"
          opts={{
            axis: "x",
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {sortedImages.mediumImg.map((image, index) => (
              <CarouselItem key={index} className="pl-0">
                <div className="w-full aspect-square flex items-center justify-center bg-white">
                  <Image
                    src={image}
                    alt={`Product image ${index + 1}`}
                    width={800}
                    height={800}
                    className="object-contain w-full h-full"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL={sortedImages.base64Img[index]}
                    sizes="100vw"
                    unoptimized
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="hidden lg:flex flex-1 flex-col gap-4 lg:max-w-[500px]">
        {sortedImages.mediumImg.map((image, index) => (
          <div
            key={index}
            id={`main-image-${index}`}
            className="w-full aspect-square flex items-center justify-center bg-white"
          >
            <Image
              src={image}
              alt={`Product image ${index + 1}`}
              width={800}
              height={800}
              className="object-contain w-full h-full"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              placeholder="blur"
              blurDataURL={sortedImages.base64Img[index]}
              sizes="500px"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
};
