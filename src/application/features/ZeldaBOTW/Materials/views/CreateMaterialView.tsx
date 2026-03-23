import { useNavigate } from "react-router-dom";
import MaterialFormContainer from "../components/containers/MaterialFormContainer";
import GoBackButton from "../../../../shared/components/ui/GoBackButton";
import PageTitle from "../../../../shared/ui/PageTitle";

const CreateMaterialView: React.FC = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/zelda/materials");
  };

  return (
    <div className="mx-10 my-6">
      <GoBackButton route="/zelda/materials"></GoBackButton>
      <PageTitle text="Crear Nuevo Monstruo"></PageTitle>
      <MaterialFormContainer
        materialId={undefined}
        onSuccess={handleSuccess}
      />
    </div>
  );
};

export default CreateMaterialView;