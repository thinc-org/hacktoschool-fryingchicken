import { useAuth } from '../providers/AuthProvider';

interface props {
  links: {
    name: string;
    link: string;
  }[];
}

const DesktopNavbar = ({ links }: props) => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <header className="hide-md bg-grey-light z-10 nav-container flex justify-between h-[10vh] px-[8%] items-center sticky top-0">
      <div className="flex items-center">
        <a
          href="/"
          className="font-black tracking-[-0.05rem] text-2xl text-center"
        >
          Global Talk
        </a>
        <div className="h-[25px] ver-line ml-10 self-center"></div>
        <nav className="self-center">
          {
            <ul className="flex">
              {links.map((link, index) => {
                return (
                  <a
                    key={index}
                    href={link.link}
                    className="text-grey-dark hover:scale-[1.05] hover:text-black text-xl pl-10 self-center"
                  >
                    {link.name}
                  </a>
                );
              })}
            </ul>
          }
        </nav>
      </div>
      {!isLoggedIn ? (
        <a href="login" className="text-[#757575] text-xl font-montserrat">
          Sign In
        </a>
      ) : (
        <a
          href="/"
          onClick={logout}
          className="text-[#757575] text-xl font-montserrat"
        >
          Log Out
        </a>
      )}
    </header>
  );
};

export default DesktopNavbar;