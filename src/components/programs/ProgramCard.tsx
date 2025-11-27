"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, MapPin, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface ProgramProps {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    location: string;
    schedule: string;
    ageGroup: string;
    features: string[];
}

export function ProgramCard({ program, index }: { program: ProgramProps, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 left-4">
                    <Badge className="bg-primary hover:bg-primary/90 text-white border-none px-3 py-1 text-sm">
                        {program.category}
                    </Badge>
                </div>
            </div>

            <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {program.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                    {program.description}
                </p>

                <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        {program.location}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        {program.schedule}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Users className="h-4 w-4 text-primary" />
                        {program.ageGroup}
                    </div>
                </div>

                <div className="space-y-2 mb-8">
                    {program.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>

                <Button asChild className="w-full rounded-full group/btn">
                    <Link href={`/programs/${program.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </Button>
            </div>
        </motion.div>
    );
}
