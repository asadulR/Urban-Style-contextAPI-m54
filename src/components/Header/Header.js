import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='bg-gray-600 py-6'>
            <div className=' container mx-auto flex flex-wrap items-center justify-between'>
                <div className='text-2xl text-sky-400 font-mono font-semibold mx-auto md:ml-1'>
                    <Link to='/'>Urban Style</Link>
                </div>
                <nav className='flex gap-3  text-xl'>
                    <CustomLink to='/home'>Home</CustomLink>
                    <CustomLink to='/orderreview'>Order Review</CustomLink>
                    <CustomLink to='/grandpa'>Grandpa</CustomLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;