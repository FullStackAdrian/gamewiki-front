import { useLocation } from "react-router-dom";
import type { MaterialModelInterface } from "../../../../../domain/features/ZeldaBOTW/Materials/MaterialModelInterface";
import MaterialDetailedContainer from "../components/containers/MaterialDetailedContainer";

const MaterialView: React.FC = () => {
  const location = useLocation();
  const material = location.state?.material as MaterialModelInterface | undefined;

  return (
    <MaterialDetailedContainer material={material} />    
  );
};

export default MaterialView;
