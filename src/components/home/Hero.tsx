"use client";

import Link from "next/link";
import NextImage from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Heart, Play } from "lucide-react";



export function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Parallax */}
            <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%]">
                <div className="absolute inset-0 w-full h-full">
                    <NextImage
                        src="/hero2.jpg"
                        alt="hero section image"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background/90" />
                </div>
            </motion.div>

            {/* Static Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="container px-4 md:px-6 text-center text-white pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 animate-float">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                            </span>
                            <span className="text-sm font-medium tracking-wider uppercase text-white">Ethiopia Skate</span>
                        </div>

                        <h1 className="text-5xl text-white md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-tight drop-shadow-lg">
                            SKATEBOARDING<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-yellow-400 drop-shadow-none">
                                SAVES LIVES
                            </span>
                        </h1>

                        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-10 text-gray-100 font-light leading-relaxed drop-shadow-md">
                            Empowering Ethiopian youth through skateboarding, building community, and creating future leaders.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Button asChild size="lg" className="h-14 px-10 rounded-full bg-primary hover:bg-primary/90 text-lg font-bold shadow-[0_0_40px_-10px_rgba(255,107,53,0.6)] hover:shadow-[0_0_60px_-10px_rgba(255,107,53,0.8)] transition-all duration-300 hover:scale-105">
                                <Link href="/donate">
                                    <Heart className="mr-2 h-5 w-5 fill-current" />
                                    Donate Now
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-14 text-white px-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 hover:text-white text-lg font-medium transition-all duration-300 hover:scale-105 group">
                                <Link href="/events" className="">
                                    <span className="text-white">
                                        Join Session
                                    </span>
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform text-white" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-0 3xl:bottom-10 left-1/2 transform -translate-x-1/2 z-20 "
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs text-white uppercase tracking-widest">Scroll</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent">
                        <div className="w-full h-1/2 bg-white animate-shimmer bg-[length:200%_100%]" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
