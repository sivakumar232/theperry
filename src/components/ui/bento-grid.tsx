"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <motion.div
            className={cn(
                "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-2xl p-6",
                "bg-white border border-border shadow-sm",
                "transition-all duration-300",
                "hover:border-accent-tertiary hover:bg-bg-surface hover:shadow-xl",
                className,
            )}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {header}
            <div className="transition-all duration-300 group-hover/bento:translate-x-2">
                <div className="text-text-secondary group-hover/bento:text-accent-primary transition-colors duration-300 mb-3">
                    {icon}
                </div>
                <div className="font-satoshi font-bold text-xl text-text-primary group-hover/bento:text-accent-primary transition-colors duration-300 mb-2">
                    {title}
                </div>
                <div className="font-satoshi text-sm text-text-secondary group-hover/bento:text-text-primary transition-colors duration-300 leading-relaxed">
                    {description}
                </div>
            </div>
        </motion.div>
    );
};
