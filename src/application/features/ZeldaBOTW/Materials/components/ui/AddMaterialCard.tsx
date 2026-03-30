import type { MouseEvent } from "react";
import { AddEntCard } from "../../../../../shared/components/ui/cards/AddEntCard"; 

interface AddMaterialCardProps {
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  className?: string;
}

export function AddMaterialCard({
  onClick,
  className = "",
}: AddMaterialCardProps) {
  return (
    <AddEntCard
      onClick={onClick}
      text="material" 
      className={className}
    />
  );
}