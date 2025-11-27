"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Programs", href: "/programs" },
    { name: "Team", href: "/team" },
    { name: "Impact", href: "/impact" },
    { name: "Blog", href: "/blog" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
                ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm"
                : "bg-transparent border-transparent"
                }`}
        >
            <div className="container flex h-20 items-center justify-between px-4 md:px-6 mx-auto">
                <Link href="/" className="flex items-center gap-2 font-black text-2xl tracking-tighter group">
                    <span className="text-primary group-hover:scale-110 transition-transform duration-300">ETHIOPIA</span>
                    <span className="group-hover:text-primary transition-colors duration-300">SKATE</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary group py-2"
                        >
                            {link.name}
                            {pathname === link.href && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary"
                                />
                            )}
                            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </Link>
                    ))}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <Button asChild className="gap-2 rounded-full px-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105">
                            <Link href="/donate">
                                <Heart className="h-4 w-4 fill-current" />
                                Donate
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Mobile Nav */}
                <div className="lg:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[85vw] sm:w-[400px] border-none bg-gradient-to-br from-background via-background to-background/95 backdrop-blur-2xl p-0 overflow-hidden">
                            <SheetTitle>
                                <VisuallyHidden>Navigation Menu</VisuallyHidden>
                            </SheetTitle>

                            {/* Decorative Background Elements */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                                <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
                            </div>

                            <div className="relative flex flex-col h-full">
                                {/* Header Section */}
                                <div className="px-6 pt-8 pb-6 border-b border-border/30">
                                    <Link
                                        href="/"
                                        className="inline-flex flex-col gap-1 group"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <div className="flex items-center gap-2">
                                            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                                                <span className="text-white font-black text-xl">ES</span>
                                            </div>
                                            <div>
                                                <div className="font-black text-xl tracking-tighter leading-none">
                                                    <span className="text-primary">ETHIOPIA</span>
                                                </div>
                                                <div className="font-black text-xl tracking-tighter leading-none text-foreground">
                                                    SKATE
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                {/* Navigation Links */}
                                <nav className="flex-1 overflow-y-auto px-4 py-6">
                                    <div className="space-y-1">
                                        {navLinks.map((link, index) => (
                                            <motion.div
                                                key={link.name}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.04 }}
                                            >
                                                <Link
                                                    href={link.href}
                                                    className={`
                                                        group relative flex items-center gap-3 px-4 py-3.5 rounded-2xl
                                                        font-bold text-base transition-all duration-300
                                                        ${pathname === link.href
                                                            ? "bg-gradient-to-r from-primary to-orange-500 text-white shadow-xl shadow-primary/30"
                                                            : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
                                                        }
                                                    `}
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {/* Active Indicator */}
                                                    {pathname === link.href && (
                                                        <motion.div
                                                            layoutId="activeTab"
                                                            className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-2xl"
                                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                        />
                                                    )}

                                                    {/* Icon Dot */}
                                                    <div className={`
                                                        relative z-10 h-2 w-2 rounded-full transition-all duration-300
                                                        ${pathname === link.href
                                                            ? "bg-white scale-100"
                                                            : "bg-primary/40 scale-0 group-hover:scale-100"
                                                        }
                                                    `} />

                                                    <span className="relative z-10">{link.name}</span>

                                                    {/* Hover Arrow */}
                                                    <ArrowRight className={`
                                                        relative z-10 ml-auto h-4 w-4 transition-all duration-300
                                                        ${pathname === link.href
                                                            ? "opacity-100 translate-x-0"
                                                            : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                                                        }
                                                    `} />
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </nav>

                                {/* Footer Section */}
                                <div className="px-6 py-6 border-t border-border/30 space-y-4">
                                    {/* Donate Button */}
                                    <Button
                                        asChild
                                        className="w-full h-14 gap-3 rounded-2xl text-base font-bold bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all hover:scale-[1.02] border-none"
                                    >
                                        <Link href="/donate" onClick={() => setIsOpen(false)}>
                                            <Heart className="h-5 w-5 fill-current" />
                                            Donate Now
                                        </Link>
                                    </Button>

                                    {/* Quick Stats */}
                                    <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
                                        <div className="flex items-center gap-1.5">
                                            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                            <span>Active</span>
                                        </div>
                                        <div className="h-3 w-px bg-border/50" />
                                        <span>© 2025 Ethiopia Skate</span>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.nav>
    );
}
