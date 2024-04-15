import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full  mb-8">
      <nav className="flex justify-between items-center max-container ">
        {/* Nike logo  */}
        <a href="/">
          <img src={headerLogo} alt="logo" width={400} height={60} />
        </a>
        {/* nav links */}
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-nomral text-lg text-slate-gray hover:text-orange-500 hover:font-bold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Hamburger menu for mobile navigation */}
        <div className="hidden max-lg:block ml-8">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
