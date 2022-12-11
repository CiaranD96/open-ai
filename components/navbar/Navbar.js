import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-wrapper blue lighten-1'>
        <Link href='/' className='brand-logo'>
          OpenAI
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link href='/imageGenerator'>Image Generator</Link>
          </li>
          <li>
            <Link href='/textCompletion'>Text Completion</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
