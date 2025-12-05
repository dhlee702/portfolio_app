"use client";

import Section from "./Section";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Corporate Website Redesign",
        category: "Web Planning / UX",
        description: "Led the complete overhaul of a corporate website, improving user engagement by 40%. Conducted user research, created wireframes, and managed the development team.",
        tools: ["Figma", "Jira", "React"],
        image: "bg-muted", // Placeholder class
    },
    {
        title: "E-commerce Mobile App",
        category: "Product Management",
        description: "Managed the end-to-end lifecycle of a mobile shopping app. Defined features, prioritized backlog, and coordinated with stakeholders for a successful launch.",
        tools: ["Notion", "Slack", "Flutter"],
        image: "bg-muted",
    },
    {
        title: "Internal Dashboard System",
        category: "UX Strategy / IA",
        description: "Designed the information architecture for a complex internal dashboard used by 500+ employees. Simplified workflows and reduced task completion time.",
        tools: ["Axure", "Zeplin", "Vue.js"],
        image: "bg-muted",
    },
];

export default function Projects() {
    return (
        <Section id="projects" className="bg-background/30">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A selection of projects demonstrating my expertise in planning, strategy, and management.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
                    >
                        {/* Thumbnail Placeholder */}
                        <div className={`h-48 w-full ${project.image} relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            <div className="absolute top-4 right-4 bg-background/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-muted-foreground border border-border">
                                {project.category}
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tools.map((tool, tIdx) => (
                                    <span key={tIdx} className="text-xs text-primary bg-background/50 px-2 py-1 rounded border border-border/50">
                                        {tool}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <Link href="#" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                    <ExternalLink size={16} /> Live Demo
                                </Link>
                                <Link href="#" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                    <Github size={16} /> Source
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
