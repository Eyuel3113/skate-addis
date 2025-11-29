// "use client";

// import { BlogList } from "@/components/blog/BlogList";
// import { PageHeader } from "@/components/ui/PageHeader";

// export default function BlogPage() {
//     return (
//         <>
//             <PageHeader
//                 title="LATEST NEWS"
//                 description="Updates from the team, event recaps, and stories from the community."
//                 backgroundImage="https://images.unsplash.com/photo-1455577380025-432289952065?q=80&w=2070&auto=format&fit=crop"
//             />
//             <BlogList />
//         </>
        
//     );
// }
"use client";
import { BlogList } from "@/components/blog/BlogList";
import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-20 relative">
      {/* Background Image + Gradient Overlay – same as Gallery */}
      <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1455577380025-432289952065?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
        {/* Same header animation & style as Gallery */}
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

        {/* Your existing BlogList – completely untouched */}
        <BlogList />
      </div>
    </main>
  );
}
