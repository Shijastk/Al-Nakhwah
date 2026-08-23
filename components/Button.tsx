import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "outline" | "neon" | "black";
};

export default function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-semibold rounded-md transition-colors duration-200 px-8 py-4 leading-normal tracking-wide ";

    const variants = {
        primary: "bg-white text-[#064E3B] hover:bg-gray-100",
        secondary: "bg-white text-[#064E3B] hover:bg-gray-100",
        outline: "bg-transparent text-white border border-white hover:bg-white/10",
        neon: "bg-[#16A34A] text-white hover:bg-[#15803D] rounded-full",
        black: "bg-[#064E3B] text-white border border-white/20 hover:border-white/50 hover:bg-[#112240]",
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}
