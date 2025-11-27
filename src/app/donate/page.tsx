"use client";

import { DonationForm } from "@/components/donate/DonationForm";
import Image from "next/image";

export default function DonatePage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <div className="relative h-[400px] w-full bg-black">
                <Image
                    src="https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=2000&auto=format&fit=crop"
                    alt="Skateboarding silhouette"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
                            SUPPORT THE MOVEMENT
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200">
                            Your donation provides skateboards, builds parks, and creates safe spaces for youth in Ethiopia.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container px-4 md:px-6 py-12 -mt-20 relative z-10">
                <DonationForm />
            </div>

            <div className="container px-4 md:px-6 pb-20 text-center">
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
    );
}
