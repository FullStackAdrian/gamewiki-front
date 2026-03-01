import type { MonsterModelInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/MonsterModelInterface";
import { Card } from "../../../../../shared/components/ui/cards/Card";
import DeleteButton from "../../../../../shared/components/ui/DeleteButton";

interface MonsterCardProps {
  monster: MonsterModelInterface;
  onClick: () => void;
  onClickDelete: () => void; // Cambia el tipo de onClick
}

export function MonsterCard({
  monster,
  onClick,
  onClickDelete,
}: MonsterCardProps) {
  
  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    onClick();
  };

  return (
    <Card onClick={handleCardClick}>
      <div className="mb-4 overflow-hidden rounded-lg h-48">
        <img
          src={monster.image}
          alt={monster.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="font-bold text-blue-950 text-lg mb-2">{monster.name}</h3>

      <div className="flex justify-between items-center">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
          {monster.category}
        </span>
      </div>
      <DeleteButton onClick={onClickDelete}></DeleteButton>
    </Card>
  );
}
