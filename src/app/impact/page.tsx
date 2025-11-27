"use client";

import { motion } from "framer-motion";
import { StoryCard } from "@/components/impact/StoryCard";
import { StatsCounter } from "@/components/home/StatsCounter";

const stories = [
    {
        id: "1",
        title: "From Streets to Stardom",
        person: "Dawit",
        role: "Pro Skater",
        quote: "Skateboarding gave me a reason to wake up every morning. It taught me that falling is just part of learning to fly.",
        content: "Dawit started skating at age 12 with a broken board he found. Today, he competes internationally and mentors young skaters in his neighborhood, proving that passion can overcome any obstacle.",
        image: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?q=80&w=1000&auto=format&fit=crop",
        video: "true"
    },
    {
        id: "2",
        title: "Building Dreams",
        person: "Helen",
        role: "Community Leader",
        quote: "The skatepark is more than concrete; it's a sanctuary where kids learn trust, resilience, and friendship.",
        content: "Helen led the initiative to build the first skatepark in Hawassa. Her determination rallied the community and local government, creating a safe space that now serves over 200 youth daily.",
        image: "https://images.unsplash.com/photo-1520045864981-8a4a13aa8672?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "3",
        title: "Breaking Barriers",
        person: "Team Ethiopia",
        role: "National Team",
        quote: "We skate not just for ourselves, but to show the world the strength and creativity of Ethiopian youth.",
        content: "Despite limited resources, Team Ethiopia has made waves in the international skate scene, challenging stereotypes and inspiring a new generation of athletes across the continent.",
        image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000&auto=format&fit=crop",
        video: "true"
    }
];

export default function ImpactPage() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-20 relative">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10 pointer-events-none">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2070&auto=format&fit=crop')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
            </div>

            <div className="container px-4 md:px-6 mx-auto max-w-7xl mb-20 relative z-10">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6"
                    >
                        OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">IMPACT</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto text-xl font-light"
                    >
                        Real stories of transformation, resilience, and hope from the Ethiopia Skate community.
                    </motion.p>
                </div>

                <div className="space-y-12">
                    {stories.map((story, index) => (
                        <StoryCard key={story.id} story={story} index={index} />
                    ))}
                </div>
            </div>

            <StatsCounter />
        </main>
    );
}
