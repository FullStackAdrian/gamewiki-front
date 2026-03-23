import MaterialsContainer from "../components/containers/MaterialsContainer";
import PageTitle from "../../../../shared/ui/PageTitle";

const MaterialsView: React.FC = () => {

  return (
    <div className="m-4">
      <PageTitle text="Monstruos de Zelda BOTW" />
      <MaterialsContainer></MaterialsContainer>
    </div>
  );
};

export default MaterialsView;

