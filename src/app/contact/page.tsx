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
    );
}
