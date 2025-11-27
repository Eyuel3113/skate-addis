export interface Event {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    image: string;
}

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content?: string;
    date: string;
    author: string;
    image: string;
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    bio?: string;
}

export interface Milestone {
    year: string;
    title: string;
    description: string;
}

export interface Supporter {
    name: string;
    logo: string;
    website?: string;
}
