import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';

const Navbar = () => {
  const links = [
    { name: 'Main', link: 'http://localhost:5678' },
    { name: 'Courses', link: 'allcourses' },
  ];
  return (
    <>
      <DesktopNavbar links={links} />
      <MobileNavbar links={links} />
    </>
  );
};

export default Navbar;
