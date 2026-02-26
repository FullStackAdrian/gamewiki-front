import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = "", onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-lg shadow hover:shadow-lg
        transition-shadow duration-300
        p-6
        ${onClick ? "cursor-pointer hover:scale-105 transform" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
