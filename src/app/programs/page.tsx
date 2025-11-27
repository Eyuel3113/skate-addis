"use client";

import { motion } from "framer-motion";
import { ProgramCard } from "@/components/programs/ProgramCard";

const programs = [
    {
        id: "skate-create",
        title: "Skate & Create",
        description: "A unique program combining skateboarding instruction with arts education. Students learn to skate while exploring photography, painting, and design.",
        image: "https://images.unsplash.com/photo-1566796127131-42d1368487bc?q=80&w=1000&auto=format&fit=crop",
        category: "Education",
        location: "Addis Ababa Skatepark",
        schedule: "Weekends, 10:00 AM - 2:00 PM",
        ageGroup: "Ages 8-16",
        features: ["Professional Coaching", "Art Supplies Included", "Lunch Provided", "Transportation Assistance"]
    },
    {
        id: "girls-skate",
        title: "Girls Skate Sessions",
        description: "Safe, supportive sessions exclusively for girls and young women. Led by female mentors to build confidence and community.",
        image: "https://images.unsplash.com/photo-1523825036634-aab3cce05919?q=80&w=1000&auto=format&fit=crop",
        category: "Empowerment",
        location: "Hawassa & Addis Ababa",
        schedule: "Saturdays, 3:00 PM - 6:00 PM",
        ageGroup: "All Ages (Girls Only)",
        features: ["Female Mentors", "Equipment Provided", "Leadership Workshops", "Safe Space"]
    },
    {
        id: "community-build",
        title: "Community Build Projects",
        description: "Join us in constructing and maintaining skateparks. Learn valuable construction skills while giving back to the community.",
        image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1000&auto=format&fit=crop",
        category: "Infrastructure",
        location: "Various Locations",
        schedule: "Monthly Events",
        ageGroup: "Ages 16+",
        features: ["Skill Training", "Community Service", "Certificate of Completion", "Networking"]
    },
    {
        id: "after-school",
        title: "After School Skate",
        description: "Daily drop-in sessions providing a positive alternative to the streets. Homework help followed by skate sessions.",
        image: "https://images.unsplash.com/photo-1520045864981-8a4a13aa8672?q=80&w=1000&auto=format&fit=crop",
        category: "Mentorship",
        location: "Addis Ababa",
        schedule: "Mon-Fri, 4:00 PM - 7:00 PM",
        ageGroup: "Ages 6-18",
        features: ["Academic Support", "Free Skate Rental", "Snacks Provided", "Mentorship"]
    }
];

export default function ProgramsPage() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-20 relative">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10 pointer-events-none">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520045864981-8a4a13aa8672?q=80&w=2070&auto=format&fit=crop')" }}
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
                        OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">PROGRAMS</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto text-xl font-light"
                    >
                        Empowering youth through diverse initiatives that combine skateboarding with education, creativity, and community building.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {programs.map((program, index) => (
                        <ProgramCard key={program.id} program={program} index={index} />
                    ))}
                </div>
            </div>
        </main>
    );
}
