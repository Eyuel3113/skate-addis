"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TeamMemberProps {
    name: string;
    role: string;
    bio: string;
    image: string;
    socials: {
        instagram?: string;
        twitter?: string;
        linkedin?: string;
        email?: string;
    };
}

export function TeamMember({ member, index }: { member: TeamMemberProps, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative"
        >
            <div className="relative overflow-hidden rounded-3xl aspect-[3/4] mb-6">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-4 justify-center">
                        {member.socials.instagram && (
                            <a href={member.socials.instagram} className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-primary hover:text-white transition-colors text-white">
                                <Instagram className="h-5 w-5" />
                            </a>
                        )}
                        {member.socials.twitter && (
                            <a href={member.socials.twitter} className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-primary hover:text-white transition-colors text-white">
                                <Twitter className="h-5 w-5" />
                            </a>
                        )}
                        {member.socials.linkedin && (
                            <a href={member.socials.linkedin} className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-primary hover:text-white transition-colors text-white">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="text-center">
                <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                    {member.bio}
                </p>
            </div>
        </motion.div>
    );
}
