"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-9 h-9" />; // Placeholder to prevent hydration mismatch
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative p-2 rounded-full bg-mint-200 dark:bg-mint-800 text-mint-800 dark:text-mint-200 hover:bg-mint-300 dark:hover:bg-mint-700 transition-colors"
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 180 : 0, scale: theme === "dark" ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Sun size={20} />
            </motion.div>
            <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 0 : -180, scale: theme === "dark" ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
            >
                <Moon size={20} />
            </motion.div>
        </button>
    );
}
