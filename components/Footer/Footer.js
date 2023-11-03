import Link from 'next/link';
import FlameOffLogo from '../FlameOffLogo/FlameOffLogo';
import Navlist from '../NavList/Navlist';
import navlist from '@/constants/navlist';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <section className="footer__top">
      <FlameOffLogo classNm="footer__top_logo" />
      <p className="footer__top_text">
        Achieve a proper fire rating with an easy-to-apply, cost
        effective and environmentally friendly FlameOFF fire barrier
        paint.
      </p>
    </section>
    <section className="footer__bottom">
      <div className="footer__bottom_content foot-cont">
        <nav className="foot-cont__navbar">
          <FlameOffLogo classNm="foot-cont__navbar_logo" />
          <Navlist
            classNm="foot-cont__navbar_list"
            listData={navlist}
          />
        </nav>

        <Link
          className="foot-cont__email"
          href="mailto:info@flameoffcoatings.com"
          target="_blank"
        >
          info@flameoffcoatings.com
        </Link>

        <div className="foot-cont__features"></div>
        <div className="foot-cont__terms"></div>
      </div>
    </section>
  </footer>
);

export default Footer;
