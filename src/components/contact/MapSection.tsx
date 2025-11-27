"use client";

import { MapPin, Mail, Phone } from "lucide-react";

export function MapSection() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-xl font-bold mb-6">Visit Us</h3>
                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-1" />
                        <div>
                            <p className="font-medium">Addis Skatepark</p>
                            <p className="text-sm text-muted-foreground">
                                Sar Bet, behind the old airport<br />
                                Addis Ababa, Ethiopia
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <a href="mailto:info@ethiopiaskate.org" className="text-sm hover:text-primary transition-colors">
                            info@ethiopiaskate.org
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <a href="tel:+251911000000" className="text-sm hover:text-primary transition-colors">
                            +251 911 000 000
                        </a>
                    </div>
                </div>
            </div>

            <div className="aspect-video w-full rounded-2xl overflow-hidden border bg-muted relative">
                {/* Placeholder for map - in production use Google Maps Embed or Leaflet */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.543444464875!2d38.7466!3d9.0136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f8e8b8b8b9%3A0x8b8b8b8b8b8b8b8b!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1620000000000!5m2!1sen!2set"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                />
            </div>
        </div>
    );
}
