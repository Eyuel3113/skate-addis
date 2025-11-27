"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
    { label: "Youth Impacted", value: 5000, suffix: "+" },
    { label: "Skateparks Built", value: 12, suffix: "" },
    { label: "Boards Donated", value: 3500, suffix: "+" },
    { label: "Cities Reached", value: 8, suffix: "" },
];

function Counter({ value, suffix }: { value: number, suffix: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const springValue = useSpring(0, { duration: 3000, bounce: 0 });
    const displayValue = useTransform(springValue, (current) => Math.round(current));
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue]);

    useEffect(() => {
        return displayValue.on("change", (latest) => {
            setCurrent(latest);
        });
    }, [displayValue]);

    return (
        <span ref={ref} className="tabular-nums">
            {current}{suffix}
        </span>
    );
}

export function StatsCounter() {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat" />
            </div>

            <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tight">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-white/80 font-medium uppercase tracking-widest text-sm md:text-base">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
