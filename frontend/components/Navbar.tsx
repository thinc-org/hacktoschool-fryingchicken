import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';

const Navbar = () => {
  const links = [
    { name: 'Main', link: '#' },
    { name: 'Courses', link: '#' },
  ];
  return (
    <>
      <DesktopNavbar links={links} />
      <MobileNavbar links={links} />
    </>
  );
};

export default Navbar;
