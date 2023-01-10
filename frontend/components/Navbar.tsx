import MobileNavbar from './MobileNavbar';
import useWindowDimensions from '../hooks/useWindowDimensions';
import DesktopNavbar from './DesktopNavbar';

const Navbar = () => {
  // const { height, width } = useWindowDimensions();

  const links = [
    { name: 'Main', link: '#' },
    { name: 'Courses', link: '#' },
  ];
  return (
    <>
      <DesktopNavbar links={links} />
      {/* {width < 768 ? (
				<MobileNavbar links={links} />
				) : (
        <DesktopNavbar links={links} />
      )} */}
    </>
  );
};

export default Navbar;
