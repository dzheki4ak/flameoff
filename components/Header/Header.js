import Button from '../Button/Button';
import NavBar from './components/NavBar/NavBar';

import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="header__content">
      <NavBar />
      <div className="header__content_text header__text">
        <h1 className="header__text_main">
          Lorem ipsum dolor sit amet consectetur. Nulla.
        </h1>
        <p className="header__text_intro">
          Lorem ipsum dolor sit amet consectetur. Amet non netus
          aliquet lacus tincidunt sed quam risus. Nisl elit tincidunt
          fermentum phasellus.
        </p>
        <Button text="Get a free quote" />
      </div>
    </div>
  </header>
);

export default Header;
