import type { MouseEvent } from "react";
import { AddEntCard } from "../../../../../shared/components/ui/cards/AddEntCard"; 

interface AddMonsterCardProps {
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  className?: string;
}

export function AddMonsterCard({
  onClick,
  className = "",
}: AddMonsterCardProps) {
  return (
    <AddEntCard
      onClick={onClick}
      text="mounstruo" 
      className={className}
    />
  );
}
