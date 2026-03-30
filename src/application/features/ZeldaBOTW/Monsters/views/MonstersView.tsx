import MonstersContainer from "../components/containers/MonstersContainer";
import PageTitle from "../../../../shared/ui/PageTitle";
import GoBackButton from "../../../../shared/components/ui/GoBackButton";

const MonstersView: React.FC = () => {

  return (
    <div className="m-4">
      <PageTitle text="Monstruos de Zelda BOTW" />
      <GoBackButton route={"/zelda/"}></GoBackButton>
      <MonstersContainer></MonstersContainer>
    </div>
  );
};

export default MonstersView;

