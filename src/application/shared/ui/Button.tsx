export interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "success" | "danger" | "warning" | "secondary";
}

function Button({ text, onClick, variant = "primary" }: ButtonProps) {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700",
    success: "bg-green-600 hover:bg-green-700",
    danger: "bg-red-600 hover:bg-red-700",
    warning: "bg-yellow-600 hover:bg-yellow-600",
    secondary: "bg-slate-700 hover:bg-slate-600",
  };

  return (
    <button
      onClick={onClick}
      className={`w-full ${variants[variant]} text-white font-medium py-2.5 px-4 rounded-lg transition-colors`}
    >
      {text}
    </button>
  );
}

export default Button;
