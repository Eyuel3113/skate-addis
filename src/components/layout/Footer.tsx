"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
    return (
        <footer className="bg-secondary/30 border-t border-border/50 pt-20 pb-10">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 font-black text-2xl tracking-tighter">
                            <span className="text-primary">SKATE</span> ADDIS
                        </Link>
                        <p className="text-muted-foreground leading-relaxed">
                            Empowering youth through skateboarding. Building communities, fostering creativity, and creating future leaders across Ethiopia.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                                <Youtube className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="/programs" className="text-muted-foreground hover:text-primary transition-colors">Our Programs</Link>
                            </li>
                            <li>
                                <Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">Events</Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link>
                            </li>
                            <li>
                                <Link href="/team" className="text-muted-foreground hover:text-primary transition-colors">Our Team</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                                <span>Addis Ababa Skatepark<br />Addis Ababa, Ethiopia</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <span>+251 91 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <span>hello@ethiopiaskate.org</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Newsletter</h3>
                        <p className="text-muted-foreground mb-4">Subscribe to get the latest news and updates.</p>
                        <form className="space-y-3">
                            <Input
                                type="email"
                                placeholder="Your email address"
                                className="bg-background border-border/50 focus:border-primary rounded-xl"
                            />
                            <Button className="w-full rounded-xl bg-primary hover:bg-primary/90">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Ethiopia Skate. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-muted-foreground">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
