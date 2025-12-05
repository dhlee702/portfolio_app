"use client";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border py-8">
            <div className="container mx-auto px-6 text-center">
                <p className="text-muted-foreground/60 text-sm">
                    © {new Date().getFullYear()} Portfolio. All rights reserved.
                </p>
                <p className="text-muted-foreground/40 text-xs mt-2">
                    Next.js & Tailwind CSS로 디자인 및 개발되었습니다.
                </p>
            </div>
        </footer>
    );
}
