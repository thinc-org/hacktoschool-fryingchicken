import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';

interface props {
  links: {
    name: string;
    link: string;
  }[];
}

const Navbar = ({ links }: props) => {
  return (
    <>
      <DesktopNavbar links={links} />
      <MobileNavbar links={links} />
    </>
  );
};

export default Navbar;
