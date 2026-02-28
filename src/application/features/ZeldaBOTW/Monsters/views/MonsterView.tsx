import { useLocation } from "react-router-dom";
import type { MonsterModelInterface } from "../../../../../domain/features/ZeldaBOTW/Monsters/MonsterModelInterface";
import MonsterDetailedContainer from "../components/containers/MonsterDetailedContainer";

const MonsterView: React.FC = () => {
  const location = useLocation();
  const monster = location.state?.monster as MonsterModelInterface | undefined;

  return (
    <MonsterDetailedContainer monster={monster}></MonsterDetailedContainer>
  );
};

export default MonsterView;
