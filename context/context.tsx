"use client";
import { createContext, useContext, useState } from "react";

interface ContextProps {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
}

const Context = createContext<ContextProps | undefined>(undefined);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [value, setValue] = useState<boolean>(false);

  return (
    <Context.Provider value={{ value, setValue }}>{children}</Context.Provider>
  );
};

export const usemyContext = () => {
  return useContext(Context);
};
