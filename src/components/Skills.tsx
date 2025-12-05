"use client";

import Section from "./Section";

interface SkillItem {
    name: string;
    level: number;
}

interface SkillCategory {
    title: string;
    type?: "tags" | "bars";
    skills: (string | SkillItem)[];
}

const skillCategories: SkillCategory[] = [
    {
        title: "Web Planning & UX",
        type: "bars",
        skills: [
            { name: "Information Architecture", level: 90 },
            { name: "Wireframing & Prototyping", level: 85 },
            { name: "User Research", level: 80 },
            { name: "Requirement Analysis", level: 95 },
        ],
    },
    {
        title: "Tools",
        type: "tags",
        skills: ["Figma", "Jira", "Confluence", "Notion", "Slack", "Zeplin", "Adobe XD", "Miro"],
    },
    {
        title: "Communication & PM",
        type: "bars",
        skills: [
            { name: "Agile/Scrum", level: 85 },
            { name: "Stakeholder Management", level: 90 },
            { name: "Technical Communication", level: 80 },
        ],
    },
];

export default function Skills() {
    return (
        <Section id="skills">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A comprehensive toolkit for delivering successful digital projects.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {skillCategories.map((category, idx) => (
                    <div key={idx} className={category.type === "tags" ? "md:col-span-2" : ""}>
                        <h3 className="text-xl font-semibold text-foreground mb-6 border-l-4 border-primary pl-3">
                            {category.title}
                        </h3>

                        {category.type === "tags" ? (
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, sIdx) => {
                                    const skillName = typeof skill === 'string' ? skill : skill.name;
                                    return (
                                        <span
                                            key={sIdx}
                                            className="px-4 py-2 bg-card/50 border border-border text-muted-foreground rounded-full text-sm hover:bg-card hover:text-foreground transition-colors cursor-default"
                                        >
                                            {skillName}
                                        </span>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {category.skills.map((skill, sIdx) => {
                                    if (typeof skill === 'string') return null;
                                    return (
                                        <div key={sIdx}>
                                            <div className="flex justify-between mb-2 text-sm">
                                                <span className="text-muted-foreground">{skill.name}</span>
                                                <span className="text-primary">{skill.level}%</span>
                                            </div>
                                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-primary rounded-full"
                                                    style={{ width: `${skill.level}%` }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
}
