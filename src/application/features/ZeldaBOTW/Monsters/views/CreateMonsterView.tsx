import { useNavigate } from "react-router-dom";
import MonsterFormContainer from "../components/containers/MonsterFormContainer";
import GoBackButton from "../../../../shared/components/ui/GoBackButton";
import PageTitle from "../../../../shared/ui/PageTitle";

const CreateMonsterView: React.FC = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/zelda/monsters");
  };

  return (
    <div className="mx-10 my-6">
      <GoBackButton route="/zelda/monsters"></GoBackButton>
      <PageTitle text="Crear Nuevo Monstruo"></PageTitle>
      <MonsterFormContainer
        monsterId={undefined}
        onSuccess={handleSuccess}
      />
    </div>
  );
};

export default CreateMonsterView;