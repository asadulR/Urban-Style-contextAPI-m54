import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';
import Uncle from '../Uncle/Uncle';

const Grandpa = () => {
    const house =  7;
    return (
        <div className='container mx-auto py-6'>
            <div className='flex gap-4'>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
                <MySelf house={house}></MySelf>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Grandpa;