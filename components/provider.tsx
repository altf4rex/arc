"use client"
import { createContext, useState } from 'react';

interface ContextType {
    currentIndex: number;
    current: (projectId: number) => void;
}

export const Context = createContext<ContextType | undefined>(undefined);

export default function Provider({children}: {children: React.ReactNode}) {
    const [currentIndex, setCurrentIndex] = useState(1);

    const current = (projectId: number) => {
        setCurrentIndex(projectId);
    };

  return (
    <Context.Provider
      value={{
        currentIndex,
        current,
      }}
    >
      {children}
    </Context.Provider>
  );
}