import { useState, useEffect } from 'react';

interface Product {
  title: string;
  price: number;
  quantity: number;
}

const useCart = (initialCart: Product[]) => {
  const [cart, setCart] = useState<Product[]>(initialCart);
  const [totalQuantityInCart, setTotalQuantityInCart] = useState<number>(
    initialCart.reduce((total, product) => total + product.quantity, 0)
  );

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('quantity', totalQuantityInCart.toString());
  }, [cart, totalQuantityInCart]);

  const handleAddToCart = (title: string, price: number) => {
    const existingProductIndex = cart.findIndex(item => item.title === title);
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart(prevCart => [...prevCart, { title, price, quantity: 1 }]);
    }
    setTotalQuantityInCart(prevTotal => prevTotal + 1);
  };

  const handleRemoveFromCart = (titleToRemove: string) => {
    const indexToRemove = cart.findIndex(item => item.title === titleToRemove);
    if (indexToRemove !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[indexToRemove].quantity === 1) {
        updatedCart.splice(indexToRemove, 1);
      } else {
        updatedCart[indexToRemove].quantity -= 1;
      }
      setCart(updatedCart);
      setTotalQuantityInCart(prevTotal => prevTotal - 1);
    }
  };

  return { cart, totalQuantityInCart, handleAddToCart, handleRemoveFromCart,setCart,setTotalQuantityInCart };
};

export default useCart;
