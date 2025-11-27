"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress"; // Need to install this component
import { Heart, CreditCard } from "lucide-react";

const amounts = [10, 25, 50, 100, 250];

export function DonationForm() {
    const [amount, setAmount] = useState<number | string>(50);
    const [customAmount, setCustomAmount] = useState("");

    // Progress bar logic
    const goal = 25000;
    const current = 12400;
    const progress = (current / goal) * 100;

    return (
        <div className="max-w-xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-12 text-center">
                <h2 className="text-2xl font-bold mb-4">Help Us Build the Next Park</h2>
                <div className="flex justify-between text-sm font-medium mb-2">
                    <span>${current.toLocaleString()} raised</span>
                    <span>${goal.toLocaleString()} goal</span>
                </div>
                <div className="h-4 w-full bg-secondary rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary transition-all duration-1000 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                    49% funded! We need your help to cross the finish line.
                </p>
            </div>

            {/* Donation Form */}
            <div className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                    <Heart className="h-5 w-5 text-primary fill-current" />
                    <h3 className="text-xl font-bold">Make a Donation</h3>
                </div>

                <div className="space-y-6">
                    {/* Frequency */}
                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="border-primary bg-primary/5 text-primary hover:bg-primary/10 hover:text-primary">
                            One-time
                        </Button>
                        <Button variant="outline">
                            Monthly
                        </Button>
                    </div>

                    {/* Amount Selection */}
                    <div className="space-y-3">
                        <Label>Select Amount (USD)</Label>
                        <div className="grid grid-cols-3 gap-3">
                            {amounts.map((val) => (
                                <Button
                                    key={val}
                                    variant={amount === val ? "default" : "outline"}
                                    onClick={() => {
                                        setAmount(val);
                                        setCustomAmount("");
                                    }}
                                    className="w-full"
                                >
                                    ${val}
                                </Button>
                            ))}
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                                <Input
                                    type="number"
                                    placeholder="Custom"
                                    value={customAmount}
                                    onChange={(e) => {
                                        setCustomAmount(e.target.value);
                                        setAmount("custom");
                                    }}
                                    className="pl-7 h-10"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Payment Button */}
                    <Button size="lg" className="w-full text-lg h-12">
                        <CreditCard className="mr-2 h-5 w-5" />
                        Donate ${amount === "custom" ? customAmount || "0" : amount}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                        Secure payment via Stripe. All donations are tax-deductible.
                    </p>
                </div>
            </div>
        </div>
    );
}
