"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Story() {
    return (
        <section className="py-20 container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?q=80&w=1200&auto=format&fit=crop"
                            alt="Kids skating in Ethiopia"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                    <div className="space-y-4 text-muted-foreground text-lg">
                        <p>
                            Skate Addis was founded in 2013 with a simple mission: to empower youth through skateboarding. What started as a small group of kids sharing a single board has grown into a nationwide movement.
                        </p>
                        <p>
                            We believe that skateboarding is more than just a sport—it's a tool for building confidence, community, and creativity. In a country where resources for youth are often limited, our skateparks provide a safe haven where kids can challenge themselves and support one another.
                        </p>
                        <p>
                            Over the past decade, we've built multiple skateparks, distributed thousands of boards, and created a family that spans across continents.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
