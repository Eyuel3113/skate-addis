"use client";

import { Hammer, BookOpen, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const missions = [
    {
        icon: Hammer,
        title: "Build Skateparks",
        description: "We construct free-to-use skateparks in Ethiopia, providing safe spaces for youth to play and express themselves.",
        link: "/programs/skateparks"
    },
    {
        icon: Users,
        title: "Community",
        description: "We foster a supportive community that transcends tribal and economic barriers, united by the love of skateboarding.",
        link: "/programs/community"
    },
    {
        icon: BookOpen,
        title: "Empowerment",
        description: "Through mentorship and access to resources, we empower the next generation of Ethiopian leaders and creatives.",
        link: "/programs/empowerment"
    }
];

export function Mission() {
    const { ref, isInView } = useScrollAnimation();

    return (
        <section ref={ref} className="py-32 bg-background relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest mb-4"
                    >
                        WHAT WE DO
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black tracking-tighter mb-6"
                    >
                        OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">MISSION</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-muted-foreground max-w-2xl mx-auto text-xl font-light"
                    >
                        More than just skateboarding. We are building a future for Ethiopian youth through infrastructure, community, and education.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {missions.map((mission, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-3xl transform group-hover:scale-105 transition-transform duration-500" />

                            <div className="relative h-full p-8 rounded-3xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-colors duration-500 flex flex-col items-center text-center">
                                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center mb-8 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500 text-white">
                                    <mission.icon className="h-10 w-10" />
                                </div>

                                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{mission.title}</h3>

                                <p className="text-muted-foreground mb-8 leading-relaxed">
                                    {mission.description}
                                </p>

                                <div className="mt-auto">
                                    <Button variant="ghost" className="group/btn text-primary hover:text-primary hover:bg-primary/10">
                                        Learn More
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
