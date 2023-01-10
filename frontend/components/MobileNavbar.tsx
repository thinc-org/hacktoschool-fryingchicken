import { useState } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { RiCloseFill } from 'react-icons/ri';

interface props {
  links: {
    name: string;
    link: string;
  }[];
}

const MobileNavbar = ({ links }: props) => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 w-screen">
      <div className="bg-white w-screen nav-container px-[5%] pt-[2%] flex justify-between justify-items-center items-center h-[50px]">
        {!open ? (
          <BiMenuAltLeft
            onClick={() => setOpen(!open)}
            className="hover:cursor-pointer text-3xl font-extralight"
          />
        ) : (
          <RiCloseFill
            onClick={() => setOpen(!open)}
            className="hover:cursor-pointer text-3xl font-extralight"
          />
        )}
        <h1 className="font-bold tracking-[-0.05rem] text-xl text-center">
          Global Talk
        </h1>
        <h2 className="text-[#757575]">Sign In</h2>
      </div>
      <nav>
        {
          <ul
            className={`flex flex-col overflow-x-hidden justify-center items-center h-[95vh] z-10 bg-white fixed duration-500 transition-all ${
              !open ? 'w-0' : 'w-screen'
            }`}
          >
            {links.map((link, index) => {
              return (
                <a
                  key={index}
                  href={link.link}
                  className="text-grey-dark hover:text-cyan-dark text-xl my-[2.5%]"
                >
                  {link.name}
                </a>
              );
            })}
          </ul>
        }
      </nav>
    </header>
  );
};

export default MobileNavbar;
