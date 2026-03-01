import type { ReactNode } from "react";
import type { MouseEvent } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export function Card({ children, className = "", onClick }: CardProps) {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <div
      onClick={handleClick}
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
