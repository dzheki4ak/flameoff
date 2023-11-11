import Button from '../Button/Button';
import NavBar from './components/NavBar/NavBar';

import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="header__content">
      <NavBar />
      <div className="header__content_text header__text">
        <h1 className="header__text_main">
          Reputable Fire Protection Coatings
        </h1>
        <p className="header__text_intro">
          Trusted intumescent paint and fire retardant solutions
        </p>
        <Button text="Get a free quote" />
      </div>
    </div>
  </header>
);

export default Header;
