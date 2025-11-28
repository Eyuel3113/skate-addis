import { Event, BlogPost, TeamMember, Milestone, Supporter } from "@/types";

export const mockEvents: Event[] = [
    {
        id: "1",
        title: "Weekly Skate Session",
        date: "Every Saturday",
        time: "10:00 AM - 2:00 PM",
        location: "Addis Skatepark, Addis Ababa",
        description: "Open session for all skill levels. Gear provided for beginners. Come learn to skate!",
        image: "https://images.unsplash.com/photo-1520045864981-8a4a13aa8672?q=80&w=800&auto=format&fit=crop"
    },
    // ... more events
];

export const mockBlogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "new-skatepark-hawassa",
        title: "Breaking Ground: New Skatepark in Hawassa",
        excerpt: "We are thrilled to announce the start of construction for our second major skatepark project in Southern Ethiopia.",
        date: "November 10, 2025",
        author: "Abenezer Temesgen",
        image: "https://images.unsplash.com/photo-1520045864981-8a4a13aa8672?q=80&w=800&auto=format&fit=crop"
    },
    // ... more posts
];

export const mockTeam: TeamMember[] = [
    {
        id: "1",
        name: "Abenezer Temesgen",
        role: "Co-Founder & Director",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop"
    },
    // ... more team members
];

export const mockMilestones: Milestone[] = [
    { year: "2013", title: "Skate Addis Founded", description: "First skate sessions in Addis Ababa parking lots." },
    // ... more milestones
];

export const mockSupporters: Supporter[] = [
    { name: "Vans", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Vans-logo.svg/2560px-Vans-logo.svg.png" },
    // ... more supporters
];
