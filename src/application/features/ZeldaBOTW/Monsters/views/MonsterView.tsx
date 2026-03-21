import { useLocation } from "react-router-dom";
import type { MonsterModelInterface } from "../../../../../domain/features/ZeldaBOTW/Monsters/MonsterModelInterface";
import MonsterDetailedContainer from "../components/containers/MonsterDetailedContainer";
import MonsterFormContainer from "../components/containers/MonsterFormContainer";

const MonsterView: React.FC = () => {
  const location = useLocation();
  const monster = location.state?.monster as MonsterModelInterface | undefined;

  const handleSuccess = () => {
    // Después de guardar, puedes navegar a la lista de monstruos o mostrar un mensaje
    //navigate("/monsters"); // Ejemplo: navegar de vuelta a la lista
  };

  const handleCancel = () => {
    // Si se cancela, también puedes navegar o cerrar un modal
    //navigate("/monsters"); // Ejemplo: navegar de vuelta a la lista
  };

  return (
    <>
      <MonsterDetailedContainer monster={monster}></MonsterDetailedContainer>
      <MonsterFormContainer
        monsterId={monster?.id_num}
        onCancel={handleCancel}
        onSuccess={handleSuccess}
      ></MonsterFormContainer>
    </>
  );
};

export default MonsterView;
