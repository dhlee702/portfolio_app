"use client";

import Section from "./Section";
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = "이름을 입력해주세요";
        if (!formData.email.trim()) {
            newErrors.email = "이메일을 입력해주세요";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "유효한 이메일 주소를 입력해주세요";
        }
        if (!formData.message.trim()) newErrors.message = "메시지를 입력해주세요";
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
        if (errors[id]) {
            setErrors((prev) => ({ ...prev, [id]: "" }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <Section id="contact">
            <div className="grid md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">연락하기</h2>
                    <p className="text-muted-foreground mb-8 text-lg">
                        현재 프리랜서 프로젝트 및 정규직 기회를 찾고 있습니다.
                        전략적인 시각이 필요한 프로젝트나 리더십이 필요한 팀이 있다면 연락 주세요.
                    </p>

                    <div className="space-y-6">
                        <a href="mailto:hello@example.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                            <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center group-hover:bg-muted transition-colors border border-border">
                                <Mail size={20} />
                            </div>
                            <span className="text-lg">hello@example.com</span>
                        </a>
                        <a href="#" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                            <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center group-hover:bg-muted transition-colors border border-border">
                                <Linkedin size={20} />
                            </div>
                            <span className="text-lg">linkedin.com/in/username</span>
                        </a>
                        <a href="#" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                            <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center group-hover:bg-muted transition-colors border border-border">
                                <Github size={20} />
                            </div>
                            <span className="text-lg">github.com/username</span>
                        </a>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 bg-card/30 p-8 rounded-2xl border border-border/50 relative overflow-hidden">
                    <AnimatePresence>
                        {isSuccess && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute inset-0 bg-card/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-6"
                            >
                                <CheckCircle size={48} className="text-primary mb-4" />
                                <h3 className="text-2xl font-bold text-foreground mb-2">메시지가 전송되었습니다!</h3>
                                <p className="text-muted-foreground">연락 주셔서 감사합니다. 곧 답변 드리겠습니다.</p>
                                <button
                                    type="button"
                                    onClick={() => setIsSuccess(false)}
                                    className="mt-6 px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                                >
                                    추가 메시지 보내기
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">이름</label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full bg-background border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-1 transition-all ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-border focus:border-primary focus:ring-primary'}`}
                            placeholder="성함을 입력하세요"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">이메일</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full bg-background border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-1 transition-all ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-border focus:border-primary focus:ring-primary'}`}
                            placeholder="example@email.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">메시지</label>
                        <textarea
                            id="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full bg-background border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-1 transition-all resize-none ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-border focus:border-primary focus:ring-primary'}`}
                            placeholder="프로젝트에 대해 말씀해주세요..."
                        />
                        {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.message}</p>}
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "전송 중..." : "메시지 보내기"} {!isSubmitting && <Send size={18} />}
                    </button>
                </form>
            </div>
        </Section>
    );
}
