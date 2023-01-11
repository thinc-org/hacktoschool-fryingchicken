import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const links = [
    { name: 'Courses', link: '#' },
    { name: 'My Courses', link: '#' },
  ];
  return (
    <>
      <Navbar links={links} />
      {children}
      <Footer links={links} />
    </>
  );
};

export default Layout;
