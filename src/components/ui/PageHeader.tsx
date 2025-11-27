"use client";

interface PageHeaderProps {
    title: string;
    description: string;
    backgroundImage?: string;
}

export function PageHeader({ title, description, backgroundImage }: PageHeaderProps) {
    return (
        <div className="relative py-20 text-center overflow-hidden">
            {/* Background Image */}
            {backgroundImage && (
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                        backgroundImage: `url('${backgroundImage}')`,
                        filter: "brightness(0.3)"
                    }}
                />
            )}

            {/* Fallback background if no image */}
            {!backgroundImage && (
                <div className="absolute inset-0 bg-primary/10 z-0" />
            )}

            {/* Content */}
            <div className="relative z-10 container px-4 md:px-6 mx-auto max-w-7xl">
                <h1 className={`text-4xl md:text-6xl font-bold tracking-tighter mb-4 ${backgroundImage ? 'text-white' : ''}`}>
                    {title}
                </h1>
                <p className={`text-lg max-w-2xl mx-auto px-4 ${backgroundImage ? 'text-gray-200' : 'text-muted-foreground'}`}>
                    {description}
                </p>
            </div>
        </div>
    );
}
