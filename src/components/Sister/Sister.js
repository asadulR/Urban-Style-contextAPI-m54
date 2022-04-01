import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h3>Sister</h3>
            {ring}
        </div>
    );
};

export default Sister;