import MonstersContainer from "../components/containers/MonstersContainer";

const MonstersView: React.FC = () => {

  return (
    <div className="m-4">
      <h1 className="my-10 font-bold text-3xl text-center " >Monstruos de Zelda BOTW</h1>
      <MonstersContainer></MonstersContainer>
    </div>
  );
};

export default MonstersView;
