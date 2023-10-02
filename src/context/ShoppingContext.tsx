import { createContext,ReactNode, useContext } from "react";

const ShoppingContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingContext);
}

type ShoppingCartProviderProps = {
  children:ReactNode
}

export function ShoppingCartProvider({ children }:ShoppingCartProviderProps) {
  return (
    <ShoppingContext.Provider value={{}}>
      {children}
    </ShoppingContext.Provider>
  );
}
