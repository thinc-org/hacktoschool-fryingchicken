import { useAuth } from '../providers/AuthProvider';
import Link from 'next/link';

interface props {
  links: {
    name: string;
    link: string;
  }[];
}

const DesktopNavbar = ({ links }: props) => {
  const { isLoggedIn, username, logout } = useAuth();

  return (
    <header className="hide-md bg-grey-light z-10 nav-container flex justify-between h-[10vh] px-[8%] items-center sticky top-0">
      <div className="flex items-center">
        <Link
          href="/"
          className="font-black tracking-[-0.05rem] text-2xl text-center"
        >
          Global Talk
        </Link>
        <div className="h-[25px] ver-line ml-10 self-center"></div>
        <nav className="self-center">
          {
            <ul className="flex">
              {links.map((link, index) => {
                return (
                  <Link
                    key={index}
                    href={link.link}
                    className="text-grey-dark hover:scale-[1.05] hover:text-black text-xl pl-10 self-center"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </ul>
          }
        </nav>
      </div>
      {!isLoggedIn ? (
        <Link
          href="/login"
          className="text-[#757575] text-xl font-montserrat hover:underline hover:text-black"
        >
          Login
        </Link>
      ) : (
        <span className="text-[#757575] text-xl font-montserrat">
          Welcome {username}
          <Link
            href="/"
            onClick={logout}
            className="ml-2 hover:underline hover:text-black"
          >
            <b>Log Out</b>
          </Link>
        </span>
      )}
    </header>
  );
};

export default DesktopNavbar;
