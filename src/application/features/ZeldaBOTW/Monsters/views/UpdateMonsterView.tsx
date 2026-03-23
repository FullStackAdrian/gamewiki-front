import { useLocation, useNavigate } from "react-router-dom";
import type { MonsterModelInterface } from "../../../../../domain/features/ZeldaBOTW/Monsters/MonsterModelInterface";
import MonsterFormContainer from "../components/containers/MonsterFormContainer";

const MonsterView: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const monster = location.state?.monster as MonsterModelInterface | undefined;

  const handleSuccess = () => {
    navigate("/");
  };

  return (
    <MonsterFormContainer
      monsterId={monster?.id_num}
      onSuccess={handleSuccess}
    />
  );
};

export default MonsterView;
