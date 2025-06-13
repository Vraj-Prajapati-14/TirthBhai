// src/components/ui/card.tsx
import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-2xl">
      {children}
    </div>
  );
};

interface CardContentProps {
  children: ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};
