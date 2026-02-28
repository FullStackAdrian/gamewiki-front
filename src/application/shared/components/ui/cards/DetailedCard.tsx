import type { ReactNode } from "react";

interface DetailCardProps {
  image: string;
  imageAlt: string;
  title: string;
  category: string;
  description: string;
  children: ReactNode | undefined;
}

export function DetailCard({
  image,
  imageAlt,
  title,
  category,
  description,
  children,
}: DetailCardProps) {
  // children helper 
  const renderChildren = () => {
    if (children !== undefined) {
      return <div className="space-y-4">{children}</div>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="overflow-hidden rounded-lg">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-96 object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-blue-950 mb-4">{title}</h1>

          <div className="mb-6">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full">
              {category}
            </span>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Descripción
            </h2>
            <p className="text-gray-600">{description}</p>
          </div>
          {renderChildren()}
        </div>
      </div>
    </div>
  );
}
