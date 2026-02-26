export interface SubmitButtonProps {
  text: string;
  variant?: "primary" | "success" | "danger" | "secondary";
  disabled?: boolean;
  className?: string;
}

function SubmitButton({
  text,
  variant = "primary",
  disabled = false,
  className = "",
}: SubmitButtonProps) {
  const baseClasses =
    "w-full text-white font-medium py-2.5 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
    success: "bg-green-600 hover:bg-green-700 focus:ring-green-500",
    danger: "bg-red-600 hover:bg-red-700 focus:ring-red-500",
    secondary: "bg-slate-700 hover:bg-slate-600 focus:ring-slate-500",
  };

  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${disabled ? "opacity-60 cursor-not-allowed" : ""} ${className}`}
    >
      {text}
    </button>
  );
}

export default SubmitButton;
