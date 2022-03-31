import React from 'react';
// import { Link } from 'react-router-dom';

const TShirt = (props) => {
    const {handleAddToCart, tShirt} = props
    const {name, picture, price} = tShirt;
    return (
        <div className='text-center rounded-lg bg-slate-700 p-3 text-white'>
            <img className='h-[250px] rounded-md' src={picture} alt="" />
            <h2 className='text-lg font-semibold'>{name}</h2>
            <p>Price: ${price}</p>
            
            <button onClick={() => handleAddToCart(tShirt)} className='bg-sky-600 px-3 py-1 rounded-full hover:rounded-none'>
                Add to Cart
            </button>

        </div>
    );
};

export default TShirt;