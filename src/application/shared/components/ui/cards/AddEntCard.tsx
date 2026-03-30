import { Card } from "./Card";
import type { MouseEvent } from "react";

interface AddEntCardProps {
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  text: string;
  className?: string;
}

export function AddEntCard({
  onClick,
  text,
  className = "",
}: AddEntCardProps) {
  return (
    <Card
      onClick={onClick}
      className={`flex items-center justify-center text-center p-4 h-90 border-2 border-dashed border-gray-300 text-gray-500 hover:border-blue-500 hover:text-blue-500 transition-colors ${className}`}
    >
      <p className="text-xl font-semibold">Añadir { text }</p>
    </Card>
  );
}
