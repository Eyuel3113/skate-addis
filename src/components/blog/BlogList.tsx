"use client";

import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

const posts = [
    {
        id: 1,
        slug: "new-skatepark-hawassa",
        title: "Breaking Ground: New Skatepark in Hawassa",
        excerpt: "We are thrilled to announce the start of construction for our second major skatepark project in Southern Ethiopia.",
        date: "November 10, 2025",
        author: "Abenezer Temesgen",
        image: "/blog.jpg"
    },
    {
        id: 2,
        title: "Skate Jam 2025 Recap",
        slug: "skate-jam-2025-recap",
        excerpt: "Over 200 kids showed up for our biggest event yet. Check out the highlights and winners from the competition.",
        date: "October 25, 2025",
        author: "Sean Stromsoe",
        image: "/blog2.jpg"
    },
    {
        id: 3,
        title: "Why Skateboarding Matters for Youth Development",
        slug: "why-skateboarding-matters",
        excerpt: "More than just a sport, skateboarding teaches resilience, creativity, and community building.",
        date: "September 15, 2025",
        author: "Micky Asfaw",
        image: "/blog3.jpg"
    }
];

export function BlogList() {
    return (
        <section className="py-12 container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                        <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <div className="relative h-48 w-full overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <CardHeader>
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User className="h-3 w-3" />
                                        <span>{post.author}</span>
                                    </div>
                                </div>
                                <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <p className="text-muted-foreground text-sm line-clamp-3">
                                    {post.excerpt}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <span className="text-sm font-medium text-primary group-hover:underline">
                                    Read More &rarr;
                                </span>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    );
}
