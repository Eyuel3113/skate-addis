"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Placeholder logos - in a real app these would be actual partner logos
const supporters = [
    { name: "Vans", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Vans-logo.svg/2560px-Vans-logo.svg.png" },
    { name: "Red Bull", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/RedBullEnergyDrink.svg/1200px-RedBullEnergyDrink.svg.png" },
    { name: "Nike SB", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png" },
     { name: "Vans", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Vans-logo.svg/2560px-Vans-logo.svg.png" },
    { name: "Adidas", logo: "/adidas.jpg" },
    { name: "Vans", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Vans-logo.svg/2560px-Vans-logo.svg.png" },
];

export function Supporters() {
    const { ref, isInView } = useScrollAnimation();

    return (
        <section ref={ref} className="py-24 bg-white border-t border-border/50">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl mb-12 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-sm font-bold tracking-widest text-muted-foreground uppercase"
                >
                    Trusted by Global Brands
                </motion.p>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

                <div className="flex w-full">
                    <motion.div
                        className="flex gap-16 md:gap-32 items-center whitespace-nowrap px-4"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30
                        }}
                    >
                        {[...supporters, ...supporters, ...supporters].map((supporter, index) => (
                            <div
                                key={index}
                                className="h-12 md:h-16 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer transform hover:scale-110"
                            >
                                <img
                                    src={supporter.logo}
                                    alt={supporter.name}
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
