"use client";

import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function LatestEventTeaser() {
    const { ref, isInView } = useScrollAnimation();

    return (
        <section ref={ref} className="py-24 bg-secondary/30">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <div className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest mb-4">
                            UPCOMING EVENT
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
                            ADDIS SKATE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">JAM 2025</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            Join us for the biggest skateboarding event in East Africa. Competitions, live music, art installations, and more.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border/50">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Calendar className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-bold">December 15, 2025</p>
                                    <p className="text-sm text-muted-foreground">10:00 AM - 6:00 PM</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border/50">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-bold">Addis Skatepark</p>
                                    <p className="text-sm text-muted-foreground">Addis Ababa, Ethiopia</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Button asChild size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                                <Link href="/events/addis-jam-2025">
                                    Register Now
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-primary/20 hover:bg-primary/5 text-foreground">
                                <Link href="/events">
                                    View All Events
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:w-1/2 relative"
                    >
                        <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1531565637446-32307b194362?q=80&w=1000&auto=format&fit=crop"
                                alt="Skate Event"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <div className="flex gap-2 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold">COMPETITION</span>
                                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold">MUSIC</span>
                                </div>
                                <p className="text-2xl font-bold mb-2">Skateboarding Competition</p>
                                <p className="text-gray-300 text-sm">Open to all ages and skill levels. Prizes worth $5,000.</p>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-10 -right-10 h-32 w-32 bg-primary/20 rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 -left-10 h-32 w-32 bg-orange-500/20 rounded-full blur-3xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
