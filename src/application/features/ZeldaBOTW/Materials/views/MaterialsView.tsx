import MaterialsContainer from "../components/containers/MaterialsContainer";
import PageTitle from "../../../../shared/ui/PageTitle";
import GoBackButton from "../../../../shared/components/ui/GoBackButton";

const MaterialsView: React.FC = () => {
  return (
    <div className="m-4">
      <PageTitle text="Monstruos de Zelda BOTW" />
      <GoBackButton route={"/zelda/"}></GoBackButton>
      <MaterialsContainer></MaterialsContainer>
    </div>
  );
};

export default MaterialsView;
