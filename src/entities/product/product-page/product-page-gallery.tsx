// product-page-gallery.tsx
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

  console.log(sortedImages, "Imagesssss");

  useEffect(() => {
    if (!mainApi) return;

    mainApi.on("select", () => {
      const index = mainApi.selectedScrollSnap();
      setActiveIndex(index);
      thumbApi?.scrollTo(index);
    });
  }, [mainApi, thumbApi]);

  const handleThumbClick = (index: number) => {
    setActiveIndex(index);
    mainApi?.scrollTo(index);
    const imageElement = document.getElementById(`main-image-${index}`);
    if (imageElement) {
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
    <div className="flex w-full justify-center items-start gap-6 flex-col-reverse lg:flex-row lg:w-[600px]">
      {/* Thumbnails Gallery */}
      <div className="w-full lg:w-24 lg:h-[500px] lg:sticky lg:top-[calc(theme(spacing.navbar)+20px)] lg:self-start flex justify-center">
        <Carousel
          setApi={setThumbApi}
          orientation={direction}
          opts={{
            axis: direction === "horizontal" ? "x" : "y",
            dragFree: true,
            watchDrag: true,
            // align: "start",
            containScroll: "trimSnaps",
          }}
          className="w-full h-24 lg:w-24 lg:h-[500px] overflow-scroll scrollbar-hide"
        >
          <CarouselContent className="h-full">
            {sortedImages.thumbImg.map((thumb, index) => (
              <CarouselItem
                key={index}
                className="basis-auto pl-0 pr-2.5 lg:pr-0 lg:pb-2.5"
              >
                <div
                  className={`h-24 w-24 transition-all duration-200 cursor-pointer ${
                    index === activeIndex ? "" : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => handleThumbClick(index)}
                >
                  <Image
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    // placeholder=""
                    unoptimized
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* mobile Main */}
      <div className="w-full flex-1 lg:hidden">
        <Carousel
          setApi={setMainApi}
          orientation="horizontal"
          opts={{
            axis: "x",
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {sortedImages.mediumImg.map((image, index) => (
              <CarouselItem key={index}>
                <div className="w-full aspect-square flex items-center justify-center">
                  <Image
                    src={image}
                    alt={`Product image ${index + 1}`}
                    width={800}
                    height={800}
                    className="object-contain w-[90vw] h-full max-w-full"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL={sortedImages.base64Img[index]}
                    sizes="90vw"
                    unoptimized
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Desktop Main Gallery*/}
      <div className="hidden lg:flex w-full flex-1 flex-col gap-4 lg:max-w-[500px] ">
        {sortedImages.mediumImg.map((image, index) => (
          <div
            key={index}
            id={`main-image-${index}`}
            className="w-full aspect-square flex items-center justify-center"
          >
            <Image
              src={image}
              alt={`Product image ${index + 1}`}
              width={800}
              height={800}
              className="object-contain w-full h-full max-w-full"
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
