import React from 'react';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = ({house}) => {
    return (
        <div >
            <h3>Father</h3>
            <p>{house}</p>
            <MySelf></MySelf>
            <Sister></Sister>
        </div>
    );
};

export default Father;