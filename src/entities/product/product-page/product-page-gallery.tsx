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
    sortedImages: {
        thumbImg: string[];
        mediumImg: string[];
        largeImg: string[];
        base64Img: string[];
    };
};

export const ProductPageGallery = ({ sortedImages }: ProductPageGalleryProps) => {
    const [mainApi, setMainApi] = useState<CarouselApi>();
    const [thumbApi, setThumbApi] = useState<CarouselApi>();
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!mainApi) return;
        const onSelect = () => {
            const index = mainApi.selectedScrollSnap();
            setActiveIndex(index);
            thumbApi?.scrollTo(index);
        };
        mainApi.on("select", onSelect);
        return () => { mainApi.off("select", onSelect); };
    }, [mainApi, thumbApi]);

    const handleThumbClick = (index: number) => {
        setActiveIndex(index);
        mainApi?.scrollTo(index);
        thumbApi?.scrollTo(index);
    };

    return (
        <div className="flex flex-col w-[90vw] lg:w-[50vw]">

            {/* Main image carousel — mobile swipe, desktop index-driven */}
            <Carousel
                setApi={setMainApi}
                orientation="horizontal"
                opts={{axis: "x", align: "start", loop: true}}
                className="w-full"
            >
                <CarouselContent className="ml-0">
                    {sortedImages.mediumImg.map((image, index) => (
                        <CarouselItem key={index} className="pl-0">
                            <div className="w-full aspect-square bg-white">
                                <Image
                                    src={image}
                                    alt={`Product image ${index + 1}`}
                                    width={1200}
                                    height={1200}
                                    className="object-contain w-full h-full"
                                    priority={index === 0}
                                    loading={index === 0 ? "eager" : "lazy"}
                                    placeholder="blur"
                                    blurDataURL={sortedImages.base64Img[index]}
                                    sizes="(max-width: 1024px) 100vw, 70vw"
                                    unoptimized
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <div className="w-full mt-3 overflow-hidden">
                <Carousel
                    setApi={setThumbApi}
                    orientation="horizontal"
                    opts={{axis: "x",align: "start", dragFree: true, containScroll: "trimSnaps"}}
                    className="w-full"
                >
                    <CarouselContent className="ml-0 gap-2 lg:flex lg:items-center lg:justify-center">
                        {sortedImages.thumbImg.map((thumb, index) => (
                            <CarouselItem key={index} className="basis-auto pl-0 select-none">
                                <div
                                    onClick={() => handleThumbClick(index)}
                                    className={`h-20 w-20 cursor-pointer overflow-hidden border transition-all duration-200 ${
                                        index === activeIndex
                                            ? "border-black opacity-100"
                                            : "border-transparent opacity-50 hover:opacity-100"
                                    }`}
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

        </div>
    );
};