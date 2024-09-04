import './Header.css';
import logo2 from '../../assets/images/logo2.png';
import user from '../../assets/images/user.png';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { useEffect, useRef } from 'react';

const navLinks = [
  { path: '/home', display: 'Home' },
  { path: '/doctors', display: 'Find a Doctor' },
  { path: '/services', display: 'Services' },
  { path: '/contact', display: 'Contact' },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener('scroll', handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

  return (
    <header className="flex items-center p-4 bg-white shadow-md header" ref={headerRef}>
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img src={logo2} alt="Logo" className="w-[120px] md:w-[150px]" />
        </div>

        {/* Navigation Links */}
        <nav className="navigation" ref={menuRef} onClick={toggleMenu}>
          <ul className="flex items-center gap-4 menu">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-primaryColor text-[16px] leading-7 font-semibold'
                      : 'text-textColor text-[16px] leading-7 font-medium'
                  }
                >
                  {link.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Profile and Login Section */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <figure className="w-[35px] h-[35px] rounded-full cursor-pointer overflow-hidden">
              <img src={user} className="object-cover w-full h-full" alt="User" />
            </figure>
          </Link>

          <Link to="/login">
            <button className="bg-primaryColor py-2 px-6 text-black font-semibold h-[44px] flex items-center justify-center rounded-full">
              LOGIN
            </button>
          </Link>

          {/* Mobile Menu Icon */}
          <span className="md:hidden" onClick={toggleMenu}>
            <BiMenu className="w-6 h-6 cursor-pointer" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
