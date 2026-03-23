import { useNavigate } from "react-router-dom";
import { Card } from "../../shared/components/ui/cards/Card";
import PageTitle from "../../shared/ui/PageTitle";

export default function ZeldaBOTWPage() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <PageTitle text="Zelda BOTW Wiki" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Card onClick={() => navigate("/zelda/monsters")}>
          <h2 className="text-xl font-bold text-blue-950 text-center ">
            Monstruos
          </h2>
        </Card>
        <Card onClick={() => navigate("/zelda/materials")}>
          <h2 className="text-xl font-bold text-blue-950 text-center">
            Materiales
          </h2>
        </Card>
      </div>
    </div>
  );
}
