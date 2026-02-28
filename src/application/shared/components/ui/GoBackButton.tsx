import React from "react";
import { useNavigate } from "react-router-dom";
import GenericButton from "./GenericButton";

export interface GoBackButtonProps {
  route: string;
}

const GoBackButton: React.FC<GoBackButtonProps> = ({
  route,
}: GoBackButtonProps) => {
  const navigate = useNavigate();
  return (
    <GenericButton
      text={"← Volver"}
      onClick={() => navigate(route)}
      variant="secondary"
    />
  );
};

export default GoBackButton;
