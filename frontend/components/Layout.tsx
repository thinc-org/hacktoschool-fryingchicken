import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const links = [
    { name: 'Courses', link: '/courses' },
    { name: 'My Courses', link: 'mycourses' },
  ];
  return (
    <>
      <Navbar links={links} />
      <div className="min-h-[93vh] lg:min-h-[90vh]">{children}</div>
      <Footer links={links} />
    </>
  );
};

export default Layout;
