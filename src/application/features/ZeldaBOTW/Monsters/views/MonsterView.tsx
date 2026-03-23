import { useLocation, useNavigate } from "react-router-dom";
import type { MonsterModelInterface } from "../../../../../domain/features/ZeldaBOTW/Monsters/MonsterModelInterface";
import MonsterDetailedContainer from "../components/containers/MonsterDetailedContainer";
import MonsterFormContainer from "../components/containers/MonsterFormContainer";

const MonsterView: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const monster = location.state?.monster as MonsterModelInterface | undefined;

  const handleSuccess = () => {
    navigate("/monsters");
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <>

      {monster && <MonsterDetailedContainer monster={monster} />}
      <MonsterFormContainer
        monsterId={monster?.id_num}
        onCancel={handleCancel}
        onSuccess={handleSuccess}
      ></MonsterFormContainer>
    </>
  );
};

export default MonsterView;
