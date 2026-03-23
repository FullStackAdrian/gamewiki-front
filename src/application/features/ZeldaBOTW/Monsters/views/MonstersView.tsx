import MonstersContainer from "../components/containers/MonstersContainer";
import PageTitle from "../../../../shared/ui/PageTitle";

const MonstersView: React.FC = () => {

  return (
    <div className="m-4">
      <PageTitle text="Monstruos de Zelda BOTW" />
      <MonstersContainer></MonstersContainer>
    </div>
  );
};

export default MonstersView;

