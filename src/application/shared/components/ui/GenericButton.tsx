import type { MouseEvent } from "react"; 

export interface GenericButtonProps {
  text: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void; 
  variant?: "primary" | "success" | "danger" | "warning" | "secondary";
}

function GenericButton({ text, onClick, variant = "primary" }: GenericButtonProps) {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700",
    success: "bg-green-600 hover:bg-green-700",
    danger: "bg-red-600 hover:bg-red-700",
    warning: "bg-yellow-600 hover:bg-yellow-600",
    secondary: "bg-gray-600 hover:bg-gray-700",
  };

  return (
    <button
      onClick={onClick}
      className={`${variants[variant]} text-white font-medium rounded-lg px-4 py-2  mb-6 transition-colors`}
    >
      {text}
    </button>
  );
}

export default GenericButton;