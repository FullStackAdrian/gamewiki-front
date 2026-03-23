import { useNavigate } from "react-router-dom";
import { Card } from "../../shared/components/ui/cards/Card";

export default function ZeldaBOTWPage() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Zelda BOTW Wiki</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card onClick={() => navigate("/zelda/monsters")}>
          <h2 className="text-xl font-bold">Monstruos</h2>
        </Card>
        <Card onClick={() => navigate("/zelda/materials")}>
          <h2 className="text-xl font-bold">Materiales</h2>
        </Card>
      </div>
    </div>
  );
}