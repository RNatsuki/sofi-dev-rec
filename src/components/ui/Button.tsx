"use client";
// Button Component con tipado
interface ButtonProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
  }


export function Button({ size = 'md', className, children, onClick }: ButtonProps) {
    const sizeClasses = size === 'lg' ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm';
    return (
      <button onClick={onClick} className={`${sizeClasses} font-medium rounded-md focus:outline-none focus:ring-4 ring-purple-400 ${className}`}>
        {children}
      </button>
    );
  }
