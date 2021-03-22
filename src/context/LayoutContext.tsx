import { createContext, useState } from 'react';

interface LayoutContextInterface {
  isSidemenuVisible: boolean;
  toggle?: () => void;
}

export const LayoutContext = createContext<LayoutContextInterface>({
  isSidemenuVisible: false,
});

export const LayoutProvider = ({ children }) => {
  const [isSidemenuVisible, setIsSidemenuVisible] = useState(false);

  const toggle = () => {
    setIsSidemenuVisible(!isSidemenuVisible);
  };

  return (
    <LayoutContext.Provider
      value={{
        isSidemenuVisible,
        toggle,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
