// "use client";

// import { DonationForm } from "@/components/donate/DonationForm";
// import Image from "next/image";

// export default function DonatePage() {
//     return (
//         <div className="min-h-screen bg-background">
//             {/* Hero */}
//             <div className="relative h-[400px] w-full bg-black">
//                 <Image
//                     src="https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=2000&auto=format&fit=crop"
//                     alt="Skateboarding silhouette"
//                     fill
//                     className="object-cover opacity-60"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center text-center px-4">
//                     <div className="max-w-2xl">
//                         <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
//                             SUPPORT THE MOVEMENT
//                         </h1>
//                         <p className="text-lg md:text-xl text-gray-200">
//                             Your donation provides skateboards, builds parks, and creates safe spaces for youth in Ethiopia.
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             <div className="container px-4 md:px-6 py-12 -mt-20 relative z-10">
//                 <DonationForm />
//             </div>

//             <div className="container px-4 md:px-6 pb-20 text-center">
//                 <h3 className="text-xl font-bold mb-8">Other Ways to Help</h3>
//                 <div className="grid md:grid-cols-3 gap-8">
//                     <div className="p-6 border rounded-xl">
//                         <h4 className="font-bold mb-2">Donate Gear</h4>
//                         <p className="text-sm text-muted-foreground">
//                             We accept new and gently used skateboards, shoes, and safety gear.
//                         </p>
//                     </div>
//                     <div className="p-6 border rounded-xl">
//                         <h4 className="font-bold mb-2">Volunteer</h4>
//                         <p className="text-sm text-muted-foreground">
//                             Join us on the ground or help remotely with your skills.
//                         </p>
//                     </div>
//                     <div className="p-6 border rounded-xl">
//                         <h4 className="font-bold mb-2">Partner With Us</h4>
//                         <p className="text-sm text-muted-foreground">
//                             Corporate sponsorships and brand partnerships available.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
"use client";
import { DonationForm } from "@/components/donate/DonationForm";
import { motion } from "framer-motion";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-20 relative">
      {/* Same stunning background + overlay as Gallery */}
      <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
        {/* EXACT same header style as Gallery / Blog / About / Contact */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6"
          >
            SUPPORT THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">MOVEMENT</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-xl font-light"
          >
            Your donation provides skateboards, builds parks, and creates safe spaces for youth in Ethiopia.
          </motion.p>
        </div>

        {/* Everything below is 100% your original code — untouched */}
        <div className="py-12">
          <DonationForm />
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold mb-8">Other Ways to Help</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-xl">
              <h4 className="font-bold mb-2">Donate Gear</h4>
              <p className="text-sm text-muted-foreground">
                We accept new and gently used skateboards, shoes, and safety gear.
              </p>
            </div>
            <div className="p-6 border rounded-xl">
              <h4 className="font-bold mb-2">Volunteer</h4>
              <p className="text-sm text-muted-foreground">
                Join us on the ground or help remotely with your skills.
              </p>
            </div>
            <div className="p-6 border rounded-xl">
              <h4 className="font-bold mb-2">Partner With Us</h4>
              <p className="text-sm text-muted-foreground">
                Corporate sponsorships and brand partnerships available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
