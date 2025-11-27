"use client";

import { motion } from "framer-motion";

const milestones = [
    { year: "2013", title: "Ethiopia Skate Founded", description: "First skate sessions in Addis Ababa parking lots." },
    { year: "2016", title: "First Skatepark Built", description: "Construction of the Addis Skatepark with community support." },
    { year: "2018", title: "Hawassa Park Opening", description: "Expansion to Southern Ethiopia with a new concrete park." },
    { year: "2021", title: "Global Recognition", description: "Featured in major skate publications and documentaries." },
    { year: "2024", title: "Future Vision", description: "Planning for the largest skate facility in East Africa." }
];

export function Timeline() {
    return (
        <section className="py-20 container px-4 md:px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    From humble beginnings to a nationwide movement.
                </p>
            </div>

            <div className="relative max-w-3xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />

                <div className="space-y-12">
                    {milestones.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                        >
                            {/* Dot */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                            {/* Content */}
                            <div className={`w-[calc(50%-2rem)] p-6 rounded-xl bg-secondary/30 border ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                <span className="text-primary font-bold text-xl block mb-2">{item.year}</span>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
