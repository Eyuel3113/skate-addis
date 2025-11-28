"use client";

import { BlogList } from "@/components/blog/BlogList";
import { PageHeader } from "@/components/ui/PageHeader";

export default function BlogPage() {
    return (
   
        <div className="text-center mb-16">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6"
                                >
                                    LATEST <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">NEWS</span>
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="text-muted-foreground max-w-2xl mx-auto text-xl font-light"
                                >
                                    Updates from the team, event recaps, and stories from the community.
                                </motion.p>
                            </div>
    );
}
