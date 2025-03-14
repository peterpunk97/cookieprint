import React from 'react'
import { Link } from 'react-router-dom'

export const Logo = () => {
  return( <Link to='/' className={`text-2xl font-bold tracking-tighter transition-all`}>

    <p className='hidden md:block'>
        Cookie
        <span className='text-yellow-400'>Print</span>
    </p>

    <p className='flex text-4xl lg:hidden'>
        <span className='skew-x-6'>C</span>
        <span className='text-yellow-400 skew-x-6'>P</span>
    </p>
  </Link>
  );
};
