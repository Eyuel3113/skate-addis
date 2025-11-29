// "use client";

// import { ContactForm } from "@/components/contact/ContactForm";
// import { MapSection } from "@/components/contact/MapSection";
// import { PageHeader } from "@/components/ui/PageHeader";

// export default function ContactPage() {
//     return (
//         <>
//             <PageHeader
//                 title="GET IN TOUCH"
//                 description="Have questions? Want to volunteer? We'd love to hear from you."
//             // backgroundImage="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2070&auto=format&fit=crop"
//             />

//             <div className="container px-4 md:px-6 py-12">
//                 <div className="grid lg:grid-cols-2 gap-12">
//                     <ContactForm />
//                     <MapSection />
//                 </div>
//             </div>
//         </>
//     );
// }
"use client";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapSection } from "@/components/contact/MapSection";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-20 relative">
      {/* Same cinematic background + overlay as Gallery */}
      <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
        {/* EXACT same header style as Gallery */}
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
        </div>

        {/* Your original content — completely untouched */}
        <div className="grid lg:grid-cols-2 gap-12 py-12">
          <ContactForm />
          <MapSection />
        </div>
      </div>
    </main>
  );
}
