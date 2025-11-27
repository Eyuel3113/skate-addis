"use client";

import { BlogList } from "@/components/blog/BlogList";
import { PageHeader } from "@/components/ui/PageHeader";

export default function BlogPage() {
    return (
        <>
            <PageHeader
                title="LATEST NEWS"
                description="Updates from the team, event recaps, and stories from the community."
                backgroundImage="https://images.unsplash.com/photo-1455577380025-432289952065?q=80&w=2070&auto=format&fit=crop"
            />
            <BlogList />
        </>
    );
}
