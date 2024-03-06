'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import HeaderContent from './components/HeaderContent/HeaderContent';
import NavBar from './components/NavBar/NavBar';
import CustomModal from '../QuoteModal/QuoteModal';
import MobileMenu from '../MobileMenu/MobileMenu';
import Image from 'next/image';
import links from '@/constants/links';
import * as headContent from '@/constants/headerContent';

import './Header.scss';

const Header = () => {
  const pathname = usePathname().slice(1);

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

  let headerCont;

  if (pathname === links.fireBarrier) {
    headerCont = headContent.fbpHeaderContent;
  } else if (pathname === links.frClear) {
    headerCont = headContent.frcHeaderContent;
  } else {
    headerCont = headContent.homeHeaderContent;
  }

  return (
    <header className={`header ${pathname}`}>
      <div className="header__content">
        <NavBar
          btnClickFn={openModal}
          mobBtnClickFn={mobMenuToggle}
          pathname={pathname}
        />
        <HeaderContent btnClickFn={openModal} {...headerCont} />

        {pathname !== '' && pathname !== 'contact-us' && (
          <Image
            loading="eager"
            className="header__content_image"
            src={headerCont.imageSrc}
            alt="product image"
          />
        )}

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
