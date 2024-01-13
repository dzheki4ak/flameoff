'use client';

import { useState } from 'react';

import Button from '../Button/Button';
import NavBar from './components/NavBar/NavBar';
import CustomModal from '../QuoteModal/QuoteModal';
import MobileMenu from '../MobileMenu/MobileMenu';

import './Header.scss';

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isMobOpen, setIsMobOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const mobMenuToggle = () => {
    setIsMobOpen(!isMobOpen);
  };

  return (
    <header className="header">
      <div className="header__content">
        <NavBar
          btnClickFn={openModal}
          mobBtnClickFn={mobMenuToggle}
        />
        <div className="header__content_text header__text">
          <h1 className="header__text_main">
            Reputable Fire Protection Coatings
          </h1>
          <p className="header__text_intro">
            Trusted intumescent paint and fire retardant solutions
          </p>
          <Button clickFn={openModal} text="Get a free quote" />
        </div>
        <CustomModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
        <MobileMenu
          mainBtnsFn={openModal}
          closeBtnFn={mobMenuToggle}
          isMobMenuOpen={isMobOpen}
        />
      </div>
    </header>
  );
};

export default Header;
