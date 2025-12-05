"use client";

import Section from "./Section";
import { User, Briefcase, Award, Calendar } from "lucide-react";

const highlights = [
    {
        icon: <Briefcase className="w-6 h-6 text-primary" />,
        title: "경력",
        desc: "웹 기획 및 PM 5년 이상",
    },
    {
        icon: <Award className="w-6 h-6 text-primary" />,
        title: "주요 역할",
        desc: "IA 설계, UX 전략, 애자일 PM",
    },
    {
        icon: <Calendar className="w-6 h-6 text-primary" />,
        title: "작업 가능 여부",
        desc: "새로운 프로젝트 참여 가능",
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
                        소개
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                        저는 사용자를 최우선으로 생각하는 디지털 제품을 만드는 웹 기획자이자 UX 전략가입니다.
                        5년 이상의 경험을 바탕으로 이해관계자, 디자이너, 개발자 간의 가교 역할을 수행하며 고품질의 웹 솔루션을 제공합니다.
                        복잡한 요구사항을 직관적인 정보 구조(IA)로 변환하고 전체 제품 생명주기를 관리하는 데 전문성이 있습니다.
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
                        이력서 다운로드
                    </button>
                </div>
            </div>
        </Section>
    );
}
