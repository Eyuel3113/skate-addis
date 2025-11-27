"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { useParams } from "next/navigation";

// Mock data - in a real app this would come from a CMS or API
const post = {
    title: "Breaking Ground: New Skatepark in Hawassa",
    date: "November 10, 2025",
    author: "Abenezer Temesgen",
    image: "https://images.unsplash.com/photo-1520045864981-8a4a13aa8672?q=80&w=1200&auto=format&fit=crop",
    content: `
    <p class="mb-4">We are thrilled to announce the start of construction for our second major skatepark project in Southern Ethiopia. This project has been in the works for over two years, and thanks to the generous support of our donors and partners, we are finally breaking ground.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Why Hawassa?</h2>
    <p class="mb-4">Hawassa is a vibrant city with a growing youth population. However, safe recreational spaces are limited. By building a world-class skatepark here, we aim to provide a safe haven for kids to play, learn, and grow.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The Design</h2>
    <p class="mb-4">The park design includes a mix of street and transition elements, catering to all skill levels. We've also included a dedicated beginner area to ensure that newcomers feel welcome and safe.</p>
    
    <p class="mb-4">Construction is expected to take 3 months, with a grand opening scheduled for early 2026. Stay tuned for updates!</p>
  `
};

export default function BlogPost() {
    const params = useParams();
    const slug = params.slug;

    return (
        <article className="min-h-screen bg-background pb-20">
            {/* Hero Image */}
            <div className="relative h-[40vh] md:h-[50vh] w-full">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 container flex flex-col justify-end pb-12 px-4 md:px-6 mx-auto max-w-7xl text-white">
                    <Button asChild variant="link" className="text-white w-fit pl-0 hover:text-primary mb-6">
                        <Link href="/blog">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Blog
                        </Link>
                    </Button>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 max-w-4xl">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-6 text-sm md:text-base text-gray-200">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container px-4 md:px-6 mx-auto max-w-7xl mt-12 grid md:grid-cols-[1fr_300px] gap-12">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                {/* Sidebar */}
                <aside className="space-y-8">
                    <div className="p-6 rounded-xl bg-muted/50 border">
                        <h3 className="font-bold text-lg mb-4">Share this post</h3>
                        <div className="flex gap-2">
                            <Button variant="outline" size="icon">
                                <Share2 className="h-4 w-4" />
                            </Button>
                            {/* Add social share buttons here */}
                        </div>
                    </div>

                    <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                        <h3 className="font-bold text-lg mb-2">Support Our Mission</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Help us build more parks like this one.
                        </p>
                        <Button className="w-full" asChild>
                            <Link href="/donate">Donate Now</Link>
                        </Button>
                    </div>
                </aside>
            </div>
        </article>
    );
}
