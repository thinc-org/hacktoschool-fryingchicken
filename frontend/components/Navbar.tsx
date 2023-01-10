import { useState } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';

const Navbar = () => {
  const [open, isOpen] = useState(false);
  const links = [
    { name: 'Main', link: '/' },
    { name: 'Courses', link: '/courses' },
  ];
  return (
    <>
      <header>
        <div className="nav-container px-[5%] mt-[2%] flex justify-between justify-items-center items-center h-[50px]">
          <BiMenuAltLeft className="text-3xl font-extralight" />
          <h1 className="font-bold tracking-[-0.05rem] text-xl text-center">
            Global Talk
          </h1>
          <h2 className="text-[#757575]">Sign In</h2>
        </div>
        <nav className="hidden">
          <ul>
            {links.map((link, index) => {
              return (
                <a key={index} href={link.link}>
                  {link.name}
                </a>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
