import { useLocation, useNavigate } from "react-router-dom";
import type { MonsterModelInterface } from "../../../../../domain/features/ZeldaBOTW/Monsters/MonsterModelInterface";
import MonsterFormContainer from "../components/containers/MonsterFormContainer";
import GoBackButton from "../../../../shared/components/ui/GoBackButton";
import PageTitle from "../../../../shared/ui/PageTitle";

const MonsterView: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const monster = location.state?.monster as MonsterModelInterface | undefined;

  const handleSuccess = () => {
    navigate("/");
  };

  return (
    <div className="mx-10 my-6">
      <GoBackButton route="/zelda/monsters"></GoBackButton>
      <PageTitle text="Actualizar Monstruo"></PageTitle>
      <MonsterFormContainer
        monsterId={monster?.id_num}
        onSuccess={handleSuccess}
      />
    </div>
  );
};

export default MonsterView;
