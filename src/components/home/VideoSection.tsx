"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function VideoSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section ref={ref} className="py-32 bg-background relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
                            SEE THE <br />
                            <span className="text-primary">IMPACT</span>
                        </h2>
                        <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed">
                            Watch how skateboarding is transforming lives in Ethiopia. From building parks to building confidence, every moment counts.
                        </p>

                        <div className="flex gap-4">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-12 w-12 rounded-full border-2 border-background overflow-hidden">
                                        <img
                                            src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                            alt="Supporter"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="font-bold">Join 5,000+ Supporters</span>
                                <span className="text-sm text-muted-foreground">Making a difference daily</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <Dialog open={isOpen} onOpenChange={setIsOpen}>
                            <DialogTrigger asChild>
                                <div className="relative aspect-video rounded-3xl overflow-hidden cursor-pointer group shadow-2xl shadow-primary/20">
                                    <img
                                        src="https://images.unsplash.com/photo-1572506823263-062a04712536?q=80&w=2070&auto=format&fit=crop"
                                        alt="Ethiopia Skate Video"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30">
                                            <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40">
                                                <Play className="h-6 w-6 md:h-8 md:w-8 text-white fill-current ml-1" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                            <p className="text-white font-bold">Ethiopia Skate: The Documentary</p>
                                            <p className="text-white/70 text-sm">Duration: 12:45</p>
                                        </div>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-5xl p-0 bg-black border-none overflow-hidden aspect-video">
                                <DialogTitle>
                                    <VisuallyHidden>Ethiopia Skate Documentary</VisuallyHidden>
                                </DialogTitle>
                                <div className="w-full h-full relative">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full"
                                    ></iframe>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>
                            </DialogContent>
                        </Dialog>

                        {/* Decorative elements */}
                        <div className="absolute -z-10 top-[-20px] right-[-20px] w-full h-full rounded-3xl border-2 border-primary/20" />
                        <div className="absolute -z-20 top-[-40px] right-[-40px] w-full h-full rounded-3xl border-2 border-primary/10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
