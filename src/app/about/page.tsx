"use client";
import { Story } from "@/components/about/Story";
import { Team } from "@/components/about/Team";
import { Timeline } from "@/components/about/Timeline";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-20 relative">
      {/* Same epic background + overlay as Gallery */}
      <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
        {/* EXACT same header animation & style as Gallery */}
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

        {/* Your original sections — completely untouched */}
        <Story />
        <Timeline />
        {/* <Team /> */}
      </div>
    </main>
  );
}
