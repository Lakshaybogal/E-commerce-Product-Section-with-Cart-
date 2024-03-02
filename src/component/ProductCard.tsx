import React from 'react';

interface ProductCardProps {
    title: string;
    price: number;
    image: string;
    handleAddToCart: (title: string, price: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, handleAddToCart }) => {

    return (
        <div className="bg-white drop-shadow-xl rounded-md">
            <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded-md" />
            <div className='text-left px-4'>
                <div className='flex items-center justify-between'>
                    <h3 className="font-bold text-2xl">{title}</h3>
                    <button className="text-white px-3 py-1 rounded-xl" onClick={() => handleAddToCart(title, price)}>Add to Cart</button>
                </div>
                <p className='text-xl text-md opacity-70 font-semibold'>Price: {price}</p>
                <p className='text-md opacity-50'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elitptate
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
