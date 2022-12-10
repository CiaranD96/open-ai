import React from 'react';
import Link from 'next/link';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header>
      <div className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <Link href='/' className={styles.navLink}>
            OpenAI
          </Link>
        </div>
        <nav>
          <ul className={styles.navbarLinks}>
            <li>
              <Link href='/imageGenerator' className={styles.navLink}>
                Image Generator
              </Link>
            </li>
            <li>
              <Link href='/textCompletion' className={styles.navLink}>
                Text Completion
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
