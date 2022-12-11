import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <main className='main'>{children}</main>
    </div>
  );
};

export default Layout;
