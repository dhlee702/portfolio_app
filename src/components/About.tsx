"use client";

import Section from "./Section";
import { User, Briefcase, Award, Calendar } from "lucide-react";

const highlights = [
    {
        icon: <Briefcase className="w-6 h-6 text-primary" />,
        title: "Experience",
        desc: "5+ Years in Web Planning & PM",
    },
    {
        icon: <Award className="w-6 h-6 text-primary" />,
        title: "Key Role",
        desc: "IA Design, UX Strategy, Agile PM",
    },
    {
        icon: <Calendar className="w-6 h-6 text-primary" />,
        title: "Availability",
        desc: "Open for new opportunities",
    },
];

export default function About() {
    return (
        <Section id="about" className="bg-card/30">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Profile Image Placeholder */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-primary rounded-2xl rotate-6 group-hover:rotate-3 transition-transform opacity-20" />
                    <div className="relative bg-card rounded-2xl p-2 border border-border aspect-square flex items-center justify-center overflow-hidden">
                        <User size={64} className="text-muted-foreground" />
                        {/* Replace with actual Image component when available */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-background/80 to-transparent" />
                        <p className="absolute bottom-4 left-4 text-primary font-mono text-sm">profile_photo.jpg</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        About Me
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                        I am a dedicated Web Planner and UX Strategist with a passion for creating user-centric digital products.
                        With over 5 years of experience, I bridge the gap between stakeholders, designers, and developers to deliver high-quality web solutions.
                        My expertise lies in translating complex requirements into intuitive information architectures and managing the entire product lifecycle.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                        {highlights.map((item, index) => (
                            <div key={index} className="bg-card/50 p-4 rounded-xl border border-border hover:border-primary/50 transition-colors">
                                <div className="mb-2">{item.icon}</div>
                                <h3 className="text-foreground font-semibold text-sm">{item.title}</h3>
                                <p className="text-muted-foreground text-xs">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <button className="text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors">
                        Download Resume
                    </button>
                </div>
            </div>
        </Section>
    );
}
