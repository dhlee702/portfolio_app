"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background Gradient Blob */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-primary font-medium tracking-widest mb-4 uppercase text-sm md:text-base">
                        안녕하세요, 저는
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                        웹 기획자 <br className="md:hidden" />
                        <span className="text-primary">&</span> UX 전략가
                    </h1>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        직관적인 디지털 경험을 설계하고 기획부터 출시까지의 프로젝트를 관리합니다.
                        IA 설계, 프로토타이핑, 애자일 프로젝트 관리에 전문성이 있습니다.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Link
                            href="#projects"
                            className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full transition-all flex items-center gap-2 group"
                        >
                            포트폴리오 보기
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button className="px-8 py-3 border border-primary/50 hover:border-primary text-muted-foreground hover:text-foreground rounded-full transition-all flex items-center gap-2">
                            이력서 다운로드
                            <Download size={18} />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-current rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
