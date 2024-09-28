"use client";

// Card Component con tipado

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={
        className +
        " bg-white rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
      }
    >
      {children}
    </div>
  );
}

// CardHeader Component con tipado

interface CardHeaderProps {
  children: React.ReactNode;
  bgColor?: string; // Permitir el color de fondo como prop
}

export function CardHeader({ children, bgColor = 'bg-red-400' }: CardHeaderProps) {
  return (
    <div className={`${bgColor} p-4 rounded-t-lg text-white`}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

// CardTitle Component con tipado
export function CardTitle({ children, className }: CardTitleProps) {
  return <h3 className={`${className} text-lg font-bold`}>{children}</h3>;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

// CardContent Component con tipado
export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={`${className} p-4 text-gray-800 bg-white rounded-b-lg`}>
      {children}
    </div>
  );
}
