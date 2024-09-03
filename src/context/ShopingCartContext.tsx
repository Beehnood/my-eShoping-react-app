import { createContext, useContext, useState } from "react";

interface IShoppingCartProvider {
  children: React.ReactNode;
}
interface ICartItem {
  id: number;
  qty: number;
}
interface IShoppingCartContext {
  cartItems: ICartItem[];
  handleIncreaseProductQty: (id:number) => void
  handleDecreaseProductQty: (id: number) => void
  getProductQty: (id:number) => number
  handleRemoveProductCart: (id: number) =>void
  cartQty: number
}
export const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function IShoppingCartProvider({ children }: IShoppingCartProvider) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  const handleIncreaseProductQty = (id: number) => {
   
    setCartItems((currentItems) => {
      let selectedItem = currentItems.find((item) => item.id == id);

      if (selectedItem == null) {
        return [...currentItems, { id: id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecreaseProductQty =(id: number) =>{

    setCartItems((currenItems) => {
      let selectedItem = currenItems.find((item)=>item.id == id);

     

      if(selectedItem?.qty === 1){
        return currenItems.filter(item => item.id !== id)
      }
      else {
        return currenItems.map((item) => {
          if(item.id == id) {
            return {...item, qty : item.qty - 1 };
          } else {
            return item;
          }
        })
      }

    })

  }

  const getProductQty = (id: number) => {

    return cartItems.find(item => item.id == id)?.qty || 0 ;
  }

  const handleRemoveProductCart =(id: number) => {
    setCartItems((currenItems) => currenItems.filter(item => item.id !== id))

  }

  const cartQty = cartItems.reduce((totalQty, item)=> totalQty + item.qty, 0)
  return (
    <ShoppingCartContext.Provider value={{ cartItems, handleIncreaseProductQty, handleDecreaseProductQty, getProductQty,handleRemoveProductCart, cartQty}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
