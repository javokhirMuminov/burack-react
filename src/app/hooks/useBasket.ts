import { useState } from "react";
import { CartItem } from "../../lib/types/search";


const useBasket = () => {
  const cartJson : string | null = localStorage.getItem("cartData");
  const currentCart = cartJson ? JSON.parse(cartJson) : [];
  const [cartItems, setCarctItems] = useState<CartItem[]>(currentCart);



  const  onAdd = (input: CartItem) => {
    const exist: any = cartItems.find((item:CartItem) => item._id === input._id);
    if(exist) {
      const cartUpdate = cartItems.map((item: CartItem) => {
        return item._id === input._id ? {...exist, quantity: exist.quantity + 1} :
        item;
      } );
      setCarctItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));

    }else {
      const cartUpdate = [...cartItems, {...input}];
      setCarctItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    }
  };

  const onRemove = (input: CartItem) => {
    const exist: any = cartItems.find(
      (item: CartItem) => item._id === input._id
    );
    if(exist.quantity === 1) {
      //Buyerda agar product soni 0 dan kichik bolsa uchirib berish mantigini yozdik!
      const cartUpdate = cartItems.filter((item: CartItem) => item._id !== input._id);
      setCarctItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    }else {
      //bunda agar productlar soni 0 dan katta bolsa 1 taga kamaytirib beradi
      const cartUpdate = cartItems.map((item: CartItem) =>
       item._id === input._id
       ? {...exist, quantity: exist.quantity - 1}
       : item);
       setCarctItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    }
  };

  const onDelete = (input: CartItem) => {
    //bunda productni yonidagi x knopkasi bosilganida hammasini uchirish mantigini yozamiz!
    const cartUpdate = cartItems.filter((item: CartItem) =>
    item._id !== input._id);
    setCarctItems(cartUpdate);
    localStorage.setItem("cartData", JSON.stringify(cartUpdate));
  };

  const onDeleteAll = () => {
    setCarctItems([]);
    localStorage.removeItem("cartData");
  }


  return {
    cartItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll
  };



}

export default useBasket;