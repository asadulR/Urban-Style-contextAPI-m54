import React, { useState } from 'react';
import useTShirts from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';

const Home = () => {

    const [tShirts, setTShirts] = useTShirts();

    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {

        const exist = cart.find(tShirt => tShirt._id === selectedItem._id);
        if (!exist) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else{
            alert('Item Already Added!')
        }

    }

    const handleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);

        setCart(rest);
    }
    return (
        <div className='grid py-10 grid-cols-6 gap-4 container mx-auto'>
            <div className="justify-items-center col-span-4 t-shirt-container grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container col-span-2">
                <h2 className='text-lg text-sky-600 mb-6 text-center font-semibold'>Items Selected: {cart.length}</h2>
                {
                    cart.map(tShirt => <Cart
                        cart={tShirt}
                        key={tShirt._id}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></Cart>)
                }
            </div>
        </div>
    );
};

export default Home;