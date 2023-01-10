interface props {
  links: {
    name: string;
    link: string;
  }[];
}

const DesktopNavbar = ({ links }: props) => {
  return (
    <header className="nav-container flex justify-between py-[2%] px-[4%] content-center">
      <div className="flex content-center">
        <h1 className="font-bold tracking-[-0.05rem] text-2xl text-center">
          Global Talk
        </h1>
        <div className="h-[25px] ver-line ml-10 self-center"></div>
        <nav>
          {
            <ul className="flex content-center">
              {links.map((link, index) => {
                return (
                  <a
                    key={index}
                    href={link.link}
                    className="text-grey-dark hover:text-cyan-dark text-xl pl-10"
                  >
                    {link.name}
                  </a>
                );
              })}
            </ul>
          }
        </nav>
      </div>
      <h2 className="text-[#757575] text-xl">Sign In</h2>
    </header>
  );
};

export default DesktopNavbar;
