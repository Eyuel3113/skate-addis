"use client";

import { Story } from "@/components/about/Story";
import { Team } from "@/components/about/Team";
import { Timeline } from "@/components/about/Timeline";
import { PageHeader } from "@/components/ui/PageHeader";

export default function AboutPage() {
    return (
        <>
            {/* <PageHeader
                title="ABOUT US"
                description="Building a community through the power of skateboarding."
                backgroundImage="https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?q=80&w=2070&auto=format&fit=crop"
            /> */}
            <div className="text-center mb-16">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6"
                                >
                                    ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">US</span>
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="text-muted-foreground max-w-2xl mx-auto text-xl font-light"
                                >
                                    Building a community through the power of skateboarding.
                                </motion.p>
                            </div>
            
            <Story />
            <Timeline />
            <Team />
        </>
    );
}
