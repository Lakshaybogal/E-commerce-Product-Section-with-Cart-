import React, { useState, useEffect } from 'react';

interface CartProps {
    cart: { title: string; price: number; quantity: number }[];
    setCart: React.Dispatch<React.SetStateAction<{ title: string; price: number; quantity: number }[]>>;
    closeCart: () => void;
    setTotalQuantityInCart: React.Dispatch<React.SetStateAction<number>>;
    totalQuantityInCart: number;
}

const Cart: React.FC<CartProps> = ({ cart, setCart, closeCart,setTotalQuantityInCart, totalQuantityInCart}) => {
    // const [totalQuantityInCart, setTotalQuantityInCart] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const removeFromCart = (index: number) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    useEffect(() => {
        const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
        setTotalQuantityInCart(totalQuantity);

        const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalPrice(totalPrice);
    }, [cart]);

    return (
        <div className="bg-white drop-shadow-xl rounded-md z-10 fixed top-[45vh] w-[90%] md:w-96 p-2 primary-color">
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-2xl">Cart</h2>
                <button className="text-white px-3 py-1 rounded-xl" onClick={closeCart}>Close</button>
            </div>
            {cart.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                    <h3 className="font-bold">{product.title}</h3> <p>{product.price} x {product.quantity} = {product.price * product.quantity}</p>
                    <button className=" bg-transparent primary-color px-2 py-1 rounded" onClick={() => removeFromCart(index)}>X</button>
                </div>
            ))}
            <div className="flex items-center justify-between">
                <span className="font-bold">Total Quantity:</span>
                <span className="font-bold">{totalQuantityInCart}</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="font-bold">Total Price:</span>
                <span className="font-bold">{totalPrice}</span>
            </div>
        </div>
    );
};

export default Cart;
