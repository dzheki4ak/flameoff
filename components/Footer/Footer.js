'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import FlameOffLogo from '../FlameOffLogo/FlameOffLogo';
import Navlist from '../NavList/Navlist';
import SocialMedia from './components/SocialMedia/SocialMedia';
import termsData from '@/constants/termsData';
import GooglePlay from '@/public/images/googleplay.svg';
import AppStore from '@/public/images/appstore.svg';
import Subscribe from './components/Subscribe/Subscribe';
import { navlist } from '@/constants/navlist';
import Location from '@/public/images/icons/location.svg';
import Letter from '@/public/images/icons/letter_white.svg';
import './Footer.scss';

const Footer = () => {
  const pathname = usePathname().slice(1);
  return (
    <footer className={`footer ${pathname}-footer`}>
      <section className="footer__bottom">
        <div className="footer__bottom_content foot-cont">
          <div className="foot-cont__block left">
            <nav className="foot-cont__block_navbar">
              <FlameOffLogo classNm="foot-cont__block_navbar-logo" />
              <Navlist
                classNm="foot-cont__block_navbar-list"
                listData={navlist}
                pathname={pathname}
              />
            </nav>
            <Link
              className="foot-cont__block_navbar-email"
              href="mailto:info@flameoffcoatings.com"
              target="_blank"
            >
              <Image loading="eager" src={Letter} alt="letter icon" />
              <p>info@flameoffcoatings.com</p>
            </Link>
            <div className="foot-cont__block_navbar-address">
              <Image loading="eager" src={Location} alt="pin icon" />
              <p>3915 Beryl Rd, Suite 130, Raleigh, NC 27607</p>
            </div>
            <SocialMedia />
          </div>
  
          <div className="foot-cont__block right">
            <div className="foot-cont__block_subscribe">
              <p>
                Get our latest news, product updates and special offers!
              </p>
              <Subscribe btnClassNm="foot-cont__block_subscribe-btn" />
            </div>
  
            <div className="foot-cont__block_app app-links">
              <p className="app-links__text">FlameOFF Estimator</p>
              <div className="app-links__store">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.flameoff.estimationV3&pli=1"
                  target="_blank"
                >
                  <Image
                    loading="eager"
                    className="app-links__store_icon"
                    src={GooglePlay}
                    alt="google play icon"
                  />
                </Link>
                <Link
                  href="https://apps.apple.com/us/app/flameoff-estimator/id6467631953"
                  target="_blank"
                >
                  <Image
                    loading="eager"
                    className="app-links__store_icon"
                    src={AppStore}
                    alt="app store icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
  
        <div className="footer__bottom_terms">
          <div className="footer__bottom_terms-links">
            {termsData.map(data => (
              <Link
                className="footer__bottom_terms-links-link"
                key={data.link}
                href={data.link}
                target="_blank"
              >
                {data.text}
              </Link>
            ))}
          </div>
          <p className="footer__bottom_terms-copyright">
            Copyright © 2023 FlameOFF® | All Rights Reserved
          </p>
        </div>
      </section>
    </footer>
  );
} 


export default Footer;
