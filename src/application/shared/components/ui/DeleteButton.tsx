import React from "react";
import type { MouseEvent } from "react"; 
import GenericButton from "./GenericButton";

export interface DeleteButtonProps {
  onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
  onClick,
}: DeleteButtonProps) => {

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation();
    onClick();
  };

  return (
    <GenericButton text={"Delete"} onClick={handleClick} variant="danger" />
  );
};

export default DeleteButton;
