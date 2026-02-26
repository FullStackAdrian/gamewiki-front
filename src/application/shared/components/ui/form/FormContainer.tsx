import type { ReactNode, SubmitEvent } from "react";

export interface FormContainerProps {
  title: string;
  onSubmit: (e: SubmitEvent) => void;
  children: ReactNode;
  id?: string;
  className?: string;
}

export function FormContainer({
  title,
  onSubmit,
  children,
  id,
  className = "",
}: FormContainerProps) {
  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className={`max-w-4xl mx-auto mb-8 bg-slate-800 rounded-lg border border-slate-700 p-6 ${className}`}
    >
      <h2 className="text-xl font-semibold text-slate-100 mb-6">{title}</h2>
      {children}
    </form>
  );
}

export default FormContainer;
