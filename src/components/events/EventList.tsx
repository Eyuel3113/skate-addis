"use client";

import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const events = [
    {
        id: 1,
        title: "Weekly Skate Session",
        date: "Every Saturday",
        time: "10:00 AM - 2:00 PM",
        location: "Addis Skatepark, Addis Ababa",
        description: "Open session for all skill levels. Gear provided for beginners. Come learn to skate!",
        image: "https://images.unsplash.com/photo-1520045864981-8a4a13aa8672?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Girls Skate Day",
        date: "December 15, 2025",
        time: "2:00 PM - 5:00 PM",
        location: "Hawassa Skatepark",
        description: "A dedicated session to encourage more girls to join the sport. Female coaches available.",
        image: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Go Skateboarding Day 2026",
        date: "June 21, 2026",
        time: "All Day",
        location: "Various Locations",
        description: "The biggest skate event of the year! Competitions, prizes, and street skating throughout the city.",
        image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=800&auto=format&fit=crop"
    }
];

export function EventList() {
    return (
        <section className="py-12 container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {events.map((event) => (
                    <Card key={event.id} className="overflow-hidden flex flex-col">
                        <div className="relative h-48 w-full">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="object-cover w-full h-full transition-transform hover:scale-105 duration-500"
                            />
                        </div>
                        <CardHeader>
                            <CardTitle>{event.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 space-y-3">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock className="h-4 w-4" />
                                <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span>{event.location}</span>
                            </div>
                            <p className="text-sm mt-2">{event.description}</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">RSVP Now</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}
