import HeaderLogo from "../assets/images/header-logo.svg";
import HamBurger from '../assets/icons/hamburger.svg'
import { navLinks } from "../contants";

const Nav = () => {
  console.log(navLinks);
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={HeaderLogo} alt="logo" width={130} height={25}></img>
        </a>
        <ul className="flex-1 flex justify-center item-center gap-16 max-lg:hidden">
          {navLinks.map((item) => {
            console.log(item);
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="hidden max-lg:block">
            <img src={HamBurger} alt="HamBuger" width={25} height={24}></img>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
