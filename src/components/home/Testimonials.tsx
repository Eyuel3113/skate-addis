"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
    {
        id: 1,
        name: "Abenezer Temesgen",
        role: "Pro Skater",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
        quote: "Skate Addis changed my life. It gave me a community, a passion, and a future I never dreamed of.",
        rating: 5
    },
    {
        id: 2,
        name: "Sarah Johnson",
        role: "Volunteer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
        quote: "Seeing the joy in these kids' eyes when they step on a board for the first time is absolutely priceless.",
        rating: 5
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "Donor",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
        quote: "The impact this organization has on the local community is tangible. Proud to support their mission.",
        rating: 5
    },
    {
        id: 4,
        name: "Yonas Alemu",
        role: "Youth Leader",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
        quote: "We are building more than just skateparks; we are building bridges between cultures and generations.",
        rating: 5
    }
];

export function Testimonials() {
    const plugin = useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-24 bg-secondary/30 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-3xl" />
            </div>

            <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
                        VOICES OF THE <span className="text-primary">COMMUNITY</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Hear from the skaters, volunteers, and supporters who make our mission possible.
                    </p>
                </motion.div>

                <Carousel
                    plugins={[plugin.current]}
                    className="w-full max-w-6xl mx-auto"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent className="-ml-4">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <div className="h-full p-1">
                                        <Card className="h-full border-none bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                                            <CardContent className="flex flex-col p-8 h-full">
                                                <div className="mb-6 text-primary">
                                                    <Quote className="h-10 w-10 opacity-20 group-hover:opacity-100 transition-opacity" />
                                                </div>

                                                <p className="text-lg mb-6 flex-grow italic text-muted-foreground group-hover:text-foreground transition-colors">
                                                    "{testimonial.quote}"
                                                </p>

                                                <div className="flex items-center gap-4 mt-auto">
                                                    <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary transition-all">
                                                        <img
                                                            src={testimonial.image}
                                                            alt={testimonial.name}
                                                            className="h-full w-full object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                                                        <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                                                    </div>
                                                </div>

                                                <div className="flex gap-1 mt-4 text-yellow-400">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star key={i} className="h-4 w-4 fill-current" />
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden md:block">
                        <CarouselPrevious className="left-[-50px] h-12 w-12 border-primary/20 hover:bg-primary hover:text-white" />
                        <CarouselNext className="right-[-50px] h-12 w-12 border-primary/20 hover:bg-primary hover:text-white" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
