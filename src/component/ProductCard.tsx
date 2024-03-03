import React from 'react';
import { TbShoppingCartMinus, TbShoppingCartPlus } from 'react-icons/tb';

interface ProductCardProps {
    title: string;
    price: number;
    image: string;
    handleAddToCart: (title: string, price: number) => void;
    handleRemoveFromCart: (title: string) => void;
    cartItemQuantity: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, handleAddToCart, handleRemoveFromCart, cartItemQuantity }) => {
    return (
        <div className="bg-white drop-shadow-xl rounded-md flex flex-col px-6 py-3">
            <div className="relative">
                <img src={image} alt={title} className="w-full object-cover mb-4 rounded-md" loading='lazy' />

            </div>
            <h3 className="font-bold text-2xl">{title}</h3>
            <div className="flex justify-between items-center">

                {cartItemQuantity > 0 ? (
                    <div className="flex justify-center items-center">
                        <p
                            className=" text-xl border-2 border-black rounded-full p-2 flex justify-center items-center"
                            onClick={() => handleRemoveFromCart(title)}
                        >
                            <TbShoppingCartMinus />
                        </p>
                        <span className="text-xl px-2">{cartItemQuantity}</span>
                        <p
                            className="text-xl border-2 border-black rounded-full p-2  flex justify-center items-center"
                            onClick={() => handleAddToCart(title, price)}
                        >
                            <TbShoppingCartPlus />
                        </p>
                    </div>
                ) : (
                    <p
                        className="text-xl border-2 border-black rounded-full p-2 flex justify-center items-center"
                        onClick={() => handleAddToCart(title, price)}
                    >
                        <TbShoppingCartPlus />
                    </p>
                )}
                <p className="text-xl text-md opacity-70 font-semibold">Price: {price}</p>
            </div>

        </div>
    );
};

export default ProductCard;
