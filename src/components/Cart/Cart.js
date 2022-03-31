import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {


    
    return (
        <div className='flex items-center py-4 flex-wrap justify-between'>
            <div>{cart.name}</div>
            <div><button onClick={() => handleRemoveFromCart(cart)} className='bg-sky-300 px-2 text-lg font-semibold rounded-full hover:rounded-sm hover:text-red-500'>X</button></div>
        </div>
    );
};

export default Cart;