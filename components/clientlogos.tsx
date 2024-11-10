"use client";

import { useEffect, useState } from "react";
import {
Carousel,
CarouselApi,
CarouselContent,
CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
export const ClientLogos = () => {
const [api, setApi] = useState<CarouselApi>();
const [current, setCurrent] = useState(0);
const logos = [
    {id:1, url: '/nextjs-logo.svg'}, 
    {id:2, url: '/shadcn-logo.svg'}, 
    {id:3, url: '/supabase-logo.svg'}, 
    {id:4, url: '/tailwind-logo.svg'}
]

useEffect(() => {
    if (!api) {
    return;
    }

    setTimeout(() => {
    if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
    } else {
        api.scrollNext();
        setCurrent(current + 1);
    }
    }, 1000);
}, [api, current]);

return (
    <div className="w-full py-20 lg:py-20">
    <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-10 items-center">
        <h3 className="text-xl tracking-tighter lg:max-w-xl font-regular text-left">
            Trusted by market leaders
        </h3>
        <div className="relative w-full col-span-4">
            <div className="bg-gradient-to-r from-background via-white/0 to-background z-10 absolute left-0 top-0 right-0 bottom-0 w-full h-full"></div>
            <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
                {logos.map((logo) => (
                <CarouselItem
                    className="basis-1/4 lg:basis-1/6"
                    key={logo.id}
                >
                    <div className="flex rounded-md aspect-square items-center justify-center p-2">
                    <span className="text-sm"><Image src={logo.url} alt={'TailwindCSS logo'} width={120} height={32} /></span>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            </Carousel>
        </div>
        </div>
    </div>
    </div>
);
};