"use client";

import { Story } from "@/components/about/Story";
import { Team } from "@/components/about/Team";
import { Timeline } from "@/components/about/Timeline";
import { PageHeader } from "@/components/ui/PageHeader";

export default function AboutPage() {
    return (
        <>
            <PageHeader
                title="ABOUT US"
                description="Building a community through the power of skateboarding."
                backgroundImage="https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?q=80&w=2070&auto=format&fit=crop"
            />
            <Story />
            <Timeline />
            {/* <Team /> */}
        </>
    );
}
