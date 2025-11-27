"use client";

import { motion } from "framer-motion";
import { TeamMember } from "@/components/team/TeamMember";

const team = [
    {
        name: "Abenezer Temesgen",
        role: "Founder & Executive Director",
        bio: "Professional skateboarder and community leader dedicated to empowering Ethiopian youth through skateboarding.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
        socials: {
            instagram: "#",
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        name: "Sarah Johnson",
        role: "Program Director",
        bio: "Experienced educator and development professional overseeing all educational and mentorship initiatives.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
        socials: {
            instagram: "#",
            email: "#"
        }
    },
    {
        name: "Yonas Alemu",
        role: "Head Coach",
        bio: "Former national champion leading our coaching staff and developing the next generation of skaters.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
        socials: {
            instagram: "#",
            twitter: "#"
        }
    },
    {
        name: "Michael Chen",
        role: "Operations Manager",
        bio: "Ensuring smooth daily operations of our skateparks and coordinating community events.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
        socials: {
            linkedin: "#",
            email: "#"
        }
    }
];

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-20 relative">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10 pointer-events-none">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?q=80&w=2070&auto=format&fit=crop')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
            </div>

            <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6"
                    >
                        MEET THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">TEAM</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto text-xl font-light"
                    >
                        The passionate individuals working behind the scenes to make our mission a reality.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {team.map((member, index) => (
                        <TeamMember key={index} member={member} index={index} />
                    ))}
                </div>
            </div>
        </main>
    );
}
