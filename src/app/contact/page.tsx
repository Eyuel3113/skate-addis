"use client";

import { ContactForm } from "@/components/contact/ContactForm";
import { MapSection } from "@/components/contact/MapSection";
import { PageHeader } from "@/components/ui/PageHeader";

export default function ContactPage() {
    return (
        <>
            <PageHeader
                title="GET IN TOUCH"
                description="Have questions? Want to volunteer? We'd love to hear from you."
            // backgroundImage="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2070&auto=format&fit=crop"
            />

            <div className="container px-4 md:px-6 py-12">
                <div className="grid lg:grid-cols-2 gap-12">
                    <ContactForm />
                    <MapSection />
                </div>
            </div>
        </>
<div className="text-center mb-16">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6"
                                >
                                    GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">TOUCH</span>
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="text-muted-foreground max-w-2xl mx-auto text-xl font-light"
                                >
                                    Have questions? Want to volunteer? We'd love to hear from you.
                                </motion.p>

                                 <div className="container px-4 md:px-6 py-12">
                <div className="grid lg:grid-cols-2 gap-12">
                    <ContactForm />
                    <MapSection />
                </div>
            </div>
                            </div>

        
    );
}
