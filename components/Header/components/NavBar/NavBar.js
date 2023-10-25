import Image from 'next/image';
import navlist from '@/constants/navlist';
import Button from '@/components/Button/Button';
import LogoImg from '@/public/images/flame_off_logo.svg';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Image
        className="navbar__logo"
        src={LogoImg}
        alt="flameoff logo"
      />
      <div className='navbar__links'>
        <ul className="navbar__links_list">
          {navlist.map(text => (
            <li key={text} className="navbar__links_list-item">
              {text}
            </li>
          ))}
        </ul>
        <Button text="Order now" />
      </div>
    </nav>
  );
};

export default NavBar;
