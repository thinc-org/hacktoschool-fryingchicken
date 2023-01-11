import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useAuth } from '../providers/AuthProvider';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAuth();
  const links = [{ name: 'Courses', link: '/courses' }];

  if (isLoggedIn) {
    links.push({ name: 'My Courses', link: 'mycourses' });
  }

  return (
    <>
      <Navbar links={links} />
      <div className="min-h-[93vh] lg:min-h-[90vh]">{children}</div>
      <Footer links={links} />
    </>
  );
};

export default Layout;
