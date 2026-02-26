import type { MonsterModelInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/MonsterModelInterface";

interface MonsterCardProps {
  monster: MonsterModelInterface;
  onClick?: () => void;
}

export function MonsterCard({ monster, onClick }: MonsterCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-6 cursor-pointer hover:scale-105 transform"
    >
      <div className="mb-4 overflow-hidden rounded-lg h-48">
        <img
          src={monster.image}
          alt={monster.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="font-bold text-lg mb-2">{monster.name}</h3>
      <p className="text-gray-600 text-sm mb-4">{monster.description}</p>

      <div className="flex justify-between items-center">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
          {monster.category}
        </span>
      </div>
    </div>
  );
}
