"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const photos = [
    { id: 1, src: "/gallary.jpg", category: "Events", caption: "Addis Skate Jam 2024" },
    { id: 2, src: "/gallary1.jpg", category: "Community", caption: "Community Building" },
    { id: 3, src: "/gallary2.jpg", category: "Skateparks", caption: "New Park Construction" },
    { id: 4, src: "/gallary3.jpg", category: "Events", caption: "Youth Competition" },
    { id: 5, src: "/gallary4.jpg", category: "Community", caption: "Girls Skate Day" },
    { id: 6, src: "/gallary5.jpg", category: "Skateparks", caption: "Hawassa Park Opening" },
    { id: 7, src: "/gallary6.jpg", category: "Events", caption: "Street Session" },
    { id: 8, src: "/gallary7.jpg", category: "Community", caption: "Mentorship Program" },
    { id: 9, src: "/gallary8.jpg", category: "Skateparks", caption: "Park Design" },
];

const categories = ["All", "Events", "Community", "Skateparks"];

export function PhotoGallery() {
    const [filter, setFilter] = useState("All");
    const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

    const filteredPhotos = filter === "All"
        ? photos
        : photos.filter(photo => photo.category === filter);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedPhoto === null) return;
        const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto);
        const nextIndex = (currentIndex + 1) % filteredPhotos.length;
        setSelectedPhoto(filteredPhotos[nextIndex].id);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedPhoto === null) return;
        const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto);
        const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
        setSelectedPhoto(filteredPhotos[prevIndex].id);
    };

    return (
        <div className="space-y-8">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant={filter === category ? "default" : "outline"}
                        onClick={() => setFilter(category)}
                        className={`rounded-full px-6 transition-all duration-300 ${filter === category
                                ? "bg-primary text-white shadow-lg shadow-primary/25"
                                : "hover:bg-primary/10 hover:text-primary border-primary/20"
                            }`}
                    >
                        {category}
                    </Button>
                ))}
            </div>

            {/* Masonry Grid */}
            <motion.div
                layout
                className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
            >
                <AnimatePresence>
                    {filteredPhotos.map((photo) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4 }}
                            key={photo.id}
                            className="break-inside-avoid"
                        >
                            <div
                                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                                onClick={() => setSelectedPhoto(photo.id)}
                            >
                                <img
                                    src={photo.src}
                                    alt={photo.caption}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                        <ZoomIn className="h-6 w-6 text-white" />
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="text-white font-bold text-lg">{photo.caption}</p>
                                    <p className="text-primary text-sm font-medium">{photo.category}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Lightbox */}
            <Dialog open={selectedPhoto !== null} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
                <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none overflow-hidden flex items-center justify-center">
                    {selectedPhoto !== null && (
                        <div className="relative w-full h-full flex items-center justify-center">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 rounded-full"
                                onClick={() => setSelectedPhoto(null)}
                            >
                                <X className="h-6 w-6" />
                            </Button>

                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute left-4 z-50 text-white hover:bg-white/20 rounded-full h-12 w-12"
                                onClick={handlePrev}
                            >
                                <ChevronLeft className="h-8 w-8" />
                            </Button>

                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute right-4 z-50 text-white hover:bg-white/20 rounded-full h-12 w-12"
                                onClick={handleNext}
                            >
                                <ChevronRight className="h-8 w-8" />
                            </Button>

                            <motion.img
                                key={selectedPhoto}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                src={photos.find(p => p.id === selectedPhoto)?.src}
                                alt="Gallery Image"
                                className="max-w-full max-h-[90vh] object-contain"
                            />

                            <div className="absolute bottom-8 left-0 right-0 text-center">
                                <p className="text-white text-xl font-bold">
                                    {photos.find(p => p.id === selectedPhoto)?.caption}
                                </p>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
