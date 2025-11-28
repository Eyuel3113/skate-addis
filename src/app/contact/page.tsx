"use client";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapSection } from "@/components/contact/MapSection";
import { PageHeader } from "@/components/ui/PageHeader";

export default function ContactPage() {
    return (
        // <>
        //     <PageHeader
        //         title="GET IN TOUCH"
        //         description="Have questions? Want to volunteer? We'd love to hear from you."
        //     // backgroundImage="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2070&auto=format&fit=crop"
        //     />

        //     <div className="container px-4 md:px-6 py-12">
        //         <div className="grid lg:grid-cols-2 gap-12">
        //             <ContactForm />
        //             <MapSection />
        //         </div>
        //     </div>
        // </>
{/* <div className="text-center mb-16">
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
                            </div> */}
<main className="min-h-screen bg-background pt-24 pb-20 relative">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10 pointer-events-none">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520045864981-8a4a13aa8672?q=80&w=2070&auto=format&fit=crop')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
            </div>

            <div className="relative z-10">
                <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6"
                        >
                            UPCOMING <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">EVENTS</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-muted-foreground max-w-2xl mx-auto text-xl font-light"
                        >
                            Join us for skate sessions, competitions, and community gatherings.
                        </motion.p>
                    </div>
                </div>

                 <div className="container px-4 md:px-6 py-12">
                <div className="grid lg:grid-cols-2 gap-12">
                    <ContactForm />
                    <MapSection />
                </div>
            </div>
              
            </div>
        </main>
        
    );
}
