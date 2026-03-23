import { useLocation, useNavigate } from "react-router-dom";
import type { MaterialModelInterface } from "../../../../../domain/features/ZeldaBOTW/Materials/MaterialModelInterface";
import MaterialFormContainer from "../components/containers/MaterialFormContainer";
import GoBackButton from "../../../../shared/components/ui/GoBackButton";
import PageTitle from "../../../../shared/ui/PageTitle";

const MaterialView: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const material = location.state?.material as MaterialModelInterface | undefined;

  const handleSuccess = () => {
    navigate("/zelda/materials");
  };

  return (
    <div className="mx-10 my-6">
      <GoBackButton route="/zelda/materials"></GoBackButton>
      <PageTitle text="Actualizar Monstruo"></PageTitle>
      <MaterialFormContainer
        materialId={material?.id_num}
        onSuccess={handleSuccess}
      />
    </div>
  );
};

export default MaterialView;
