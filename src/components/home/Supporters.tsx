"use client";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const supporters = [
  { name: "Vans", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Vans-logo.svg/2560px-Vans-logo.svg.png" },
  { name: "Red Bull", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/RedBullEnergyDrink.svg/1200px-RedBullEnergyDrink.svg.png" },
  { name: "Nike SB", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png" },
  { name: "Skechers", logo: "/sketcher.png" },
  { name: "Adidas", logo: "/adidas.jpg" },
  { name: "Monster Energy", logo: "/monster.png" },
  { name: "DC Shoes", logo: "/dc.png" },
];

export function Supporters() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 bg-white border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-widest text-muted-foreground uppercase">
            Trusted by Global Brands
          </p>
        </motion.div>

        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-20 md:gap-32 items-center"
              animate={{ x: [0, "-50%"] }}                 {/* ← ONLY THIS LINE CHANGED */}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",                    {/* ← This removes the jump */}
                  duration: 28,                          {/* ← Adjust speed here (25–35 feels perfect) */}
                  ease: "linear",
                },
              }}
            >
              {/* Keep exactly 2 copies for seamless loop */}
              {[...supporters, ...supporters].map((supporter, index) => (
                <div
                  key={`${supporter.name}-${index}`}
                  className="flex-shrink-0 w-40 md:w-56 mx-4"
                >
                  <img
                    src={supporter.logo}
                    alt={`${supporter.name} logo`}
                    className="h-16 md:h-24 w-full object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110 cursor-pointer"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
