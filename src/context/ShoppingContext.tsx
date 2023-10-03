import { createContext,ReactNode, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart"

const ShoppingContext = createContext({} as ShoppingContext);

export function useShoppingCart() {
  return useContext(ShoppingContext);
}

type CartItem = {
  id:number,
  quantity:number
}

type ShoppingContext = {
  openCart:()=> void,
  closeCart:()=> void,
  getItem:(id:number) => number,
  increaseItem:(id:number) => void,
  decreaseItem:(id:number) => void,
  removeItem:(id:number) => void,
  cartQuantity:number,  
  cartItems:CartItem[]
}


type ShoppingCartProviderProps = {
  children:ReactNode
}

export function ShoppingCartProvider({ children }:ShoppingCartProviderProps) {

  const [cartItems,setCartItems]=useState<CartItem[]>([])

  const [isOpen,setIsOpen]=useState(false)

  const cartQuantity = cartItems.reduce((quantity,items)=> items.quantity + quantity, 0)

  function getItem(id:number){

    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function increaseItem(id: number) {

      setCartItems((currItems) => {
        const itemToUpdate = currItems.find((item) => item.id === id);
  
        if (itemToUpdate === undefined) {
          return [...currItems, { id, quantity: 1 }];
        } else {
          return currItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
      });
  }
    
  function decreaseItem(id: number) {
    setCartItems((currItems) => {

      const itemToUpdate = currItems.find((item) => item.id === id);
  
      if (itemToUpdate === undefined) {

        return currItems;
      } else {

        if (itemToUpdate.quantity > 1) {
          
          return currItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          );
        } else {

          return currItems.filter((item) => item.id !== id);
        }
      }
    });
  }

  function removeItem(id: number) {

    setCartItems((currItems) => {  
  
      return currItems.filter((item) => item.id !== id);      
    });
  }
  
  const openCart = () =>{
    setIsOpen(true)
  }

  const closeCart = () =>{
    setIsOpen(false)
  }

return (
  <ShoppingContext.Provider 
    value={{
      getItem,
      increaseItem,
      decreaseItem,
      removeItem,
      cartItems,
      cartQuantity,
      openCart,
      closeCart
      }}
    >
    {children}
    <ShoppingCart isOpen={isOpen} />
    </ShoppingContext.Provider>
);
}
