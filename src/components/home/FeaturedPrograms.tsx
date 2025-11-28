"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const programs = [
    {
        id: 1,
        title: "Skate & Create",
        description: "Combining skateboarding with arts education to foster creativity and self-expression.",
        image: "/skate&create.jpg",
        category: "Education",
        location: "Addis Ababa",
        participants: "50+ Youth"
    },
    {
        id: 2,
        title: "Girls Skate",
        description: "Empowering young women through skateboarding workshops and mentorship programs.",
        image: "/girls-skate.jpg",
        category: "Empowerment",
        location: "Hawassa",
        participants: "30+ Girls"
    },
    {
        id: 3,
        title: "Park Construction",
        description: "Building safe, community-centered skateparks across Ethiopia with local labor.",
        image: "/park.jpg",
        category: "Infrastructure",
        location: "Nationwide",
        participants: "Community"
    },
    {
        id: 4,
        title: "Youth Mentorship",
        description: "Connecting experienced skaters with beginners to build skills and confidence.",
        image: "https://images.unsplash.com/photo-1520045864981-8a4a13aa8672?q=80&w=1000&auto=format&fit=crop",
        category: "Mentorship",
        location: "Addis Ababa",
        participants: "100+ Students"
    }
];

export function FeaturedPrograms() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-24 bg-background relative">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
                            FEATURED <span className="text-primary">PROGRAMS</span>
                        </h2>
                        <p className="text-muted-foreground max-w-xl text-lg">
                            Discover how we're making a difference through our core initiatives and community programs.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Button asChild variant="outline" className="rounded-full border-primary/20 hover:bg-primary hover:text-white group">
                            <Link href="/programs">
                                View All Programs
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 gap-6 snap-x snap-mandatory no-scrollbar">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="min-w-[300px] md:min-w-[400px] snap-center"
                        >
                            <div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer">
                                {/* Image Background */}
                                <div className="absolute inset-0">
                                    <img
                                        src={program.image}
                                        alt={program.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                    <Badge className="w-fit mb-4 bg-primary hover:bg-primary/90 border-none text-white">
                                        {program.category}
                                    </Badge>

                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {program.title}
                                    </h3>

                                    <p className="text-gray-300 mb-6 line-clamp-2 group-hover:line-clamp-none transition-all">
                                        {program.description}
                                    </p>

                                    <div className="flex flex-col gap-3 border-t border-white/20 pt-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        <div className="flex items-center gap-2 text-sm text-gray-300">
                                            <MapPin className="h-4 w-4 text-primary" />
                                            {program.location}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-300">
                                            <Users className="h-4 w-4 text-primary" />
                                            {program.participants}
                                        </div>

                                        <Button asChild className="mt-4 w-full bg-white text-black hover:bg-primary hover:text-white border-none">
                                            <Link href={`/programs/${program.id}`}>
                                                Learn More
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
