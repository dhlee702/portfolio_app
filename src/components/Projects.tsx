"use client";

import Section from "./Section";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "호텔 예약 시스템 개편",
        category: "웹 기획 / UX",
        description: "월 방문자 50만명의 호텔 예약 시스템을 전면 개편했습니다. 사용자 여정을 최적화하여 예약 전환율을 15% 상승시켰으며, 백오피스 관리자 페이지의 UX도 개선하여 운영 효율을 높였습니다.",
        tools: ["Figma", "Jira", "React"],
        image: "bg-muted", // Placeholder class
    },
    {
        title: "이커머스 모바일 앱 런칭",
        category: "PM / 서비스 기획",
        description: "패션 이커머스 모바일 앱의 MVP 기획부터 출시까지 전담했습니다. 핵심 기능 정의, 화면 설계서(SB) 작성, 개발/디자인 팀과의 협업을 주도하여 3개월 내 성공적으로 런칭했습니다.",
        tools: ["Notion", "Slack", "Flutter"],
        image: "bg-muted",
    },
    {
        title: "사내 HR 대시보드 구축",
        category: "UX 전략 / IA",
        description: "임직원 역량 관리를 위한 사내 HR 대시보드의 정보 구조를 설계했습니다. 복잡한 인사 데이터를 시각화하여 의사결정을 지원하고, 인사 담당자의 업무 프로세스를 단축했습니다.",
        tools: ["Axure", "Zeplin", "Vue.js"],
        image: "bg-muted",
    },
];

export default function Projects() {
    return (
        <Section id="projects" className="bg-background/30">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">주요 프로젝트</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    기획, 전략, 관리 분야의 전문성을 보여주는 엄선된 프로젝트입니다.
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
                                    <ExternalLink size={16} /> 라이브 데모
                                </Link>
                                <Link href="#" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                    <Github size={16} /> 소스 코드
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
