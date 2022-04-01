import React, { createContext } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';
import Uncle from '../Uncle/Uncle';



// context api 
// 1. call createContext with a default value
// 2. set a variable of the context with uppercase
// 3. make sure you export the context to use it other places
// 4. wrap your child content using context.provider
// 5. provide a value
// 6. To consume the context from child component 
// 7. useContext hook and you will need to pass the contextname
export const RingContext = createContext('Diamond Ring');

const Grandpa = () => {
    const house = 7;
    return (
        <RingContext.Provider value='Diamond Ring'>
            <div className='container mx-auto py-6'>
                <div className='flex gap-4'>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                    <MySelf house={house}></MySelf>
                    <Sister house={house}></Sister>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;