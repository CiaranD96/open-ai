import React, { useEffect, Fragment } from 'react';
import Link from 'next/link';

const Navbar = () => {
  useEffect(() => {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  return (
    <Fragment>
      <nav>
        <div className='nav-wrapper blue lighten-1'>
          <Link href='/' className='brand-logo'>
            OpenAI
          </Link>
          <Link href='#' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </Link>
          <ul className='right hide-on-med-and-down'>
            <li>
              <Link href='/imageGenerator'>Image Generator</Link>
            </li>
            <li>
              <Link href='/textCompletion'>Text Completion</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className='sidenav' id='mobile-demo'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/imageGenerator'>Image Generator</Link>
        </li>
        <li>
          <Link href='/textCompletion'>Text Completion</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navbar;
