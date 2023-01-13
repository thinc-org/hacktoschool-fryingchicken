import Image from 'next/image';
import Cleverse from '../public/Cleverse.jpg';
import Thinc from '../public/Thinc.jpg';
import Link from 'next/link';

interface props {
  links: {
    name: string;
    link: string;
  }[];
}

const Footer = ({ links }: props) => {
  return (
    <footer className="bg-grey-light flex flex-col items-center font-semibold text-grey-dark py-[5%] text-[0.8rem] sm:text-base text-center lg:py-[2%] relative bottom-0">
      <section className="flex items-center flex-col flex-wrap lg:flex-nowrap lg:flex-row lg:justify-center lg:w-[100vw]">
        {links.map((link, index) => {
          return (
            <a key={index} href={link.link} className="pt-1 lg:mx-[2%]">
              {link.name}
            </a>
          );
        })}
      </section>
      <hr className="w-[90%] h-[0.5px] mx-auto my-4 bg-grey-dark border-0 rounded"></hr>
      <div className="flex flex-col items-center">
        <section className="pb-[3%] lg:pb-[1%] flex justify-center w-[100vw]">
          <span className="mx-[2%]">
            <Image
              className="mx-auto"
              src={Cleverse}
              alt="Cleverse Logo"
              width="40"
              height="40"
            />
            Cleverse
          </span>
          <span className="mx-[2%]">
            <Image
              className="mx-auto"
              src={Thinc}
              alt="Thinc Logo"
              width="40"
              height="40"
            />
            Thinc.
          </span>
        </section>
        <span className="text-[0.6rem] sm:text-xs">
          ©2021 Thinc. x Cleverse. Project for <u>hack to school</u>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
