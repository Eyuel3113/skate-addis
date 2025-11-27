"use client";

import { motion } from "framer-motion";
import { Play, Quote, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StoryProps {
    id: string;
    title: string;
    person: string;
    role: string;
    quote: string;
    content: string;
    image: string;
    video?: string;
}

export function StoryCard({ story, index }: { story: StoryProps, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
        >
            <div className="grid md:grid-cols-2 h-full">
                <div className="relative h-64 md:h-full overflow-hidden">
                    <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                    {story.video && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40">
                                    <Play className="h-5 w-5 text-white fill-current ml-1" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="p-8 flex flex-col justify-center relative">
                    <Quote className="absolute top-8 right-8 h-12 w-12 text-primary/10" />

                    <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{story.title}</h3>
                        <p className="text-primary font-medium">{story.person}</p>
                        <p className="text-sm text-muted-foreground">{story.role}</p>
                    </div>

                    <blockquote className="text-lg italic text-muted-foreground mb-6 border-l-4 border-primary/20 pl-4">
                        "{story.quote}"
                    </blockquote>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {story.content}
                    </p>

                    <div className="flex gap-4 mt-auto">
                        <Button variant="outline" className="rounded-full border-primary/20 hover:bg-primary hover:text-white">
                            Read Full Story
                        </Button>
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                            <Share2 className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
