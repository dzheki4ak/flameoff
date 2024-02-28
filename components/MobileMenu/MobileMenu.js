import Button from '../Button/Button';
import Navlist from '../NavList/Navlist';
import { navListMob } from '@/constants/navlist';
import CloseCross from '@/public/images/icons/close_cross.svg';
import FlameOffLogo from '../FlameOffLogo/FlameOffLogo';
import './MobileMenu.scss';
import Image from 'next/image';

const MobileMenu = ({ mainBtnsFn, closeBtnFn, isMobMenuOpen }) => {
  const mainButtonsFunction = () => {
    closeBtnFn();
    mainBtnsFn();
  };

  return (
    <div className={`mob-menu ${isMobMenuOpen ? 'open' : ''}`}>
      <div className="mob-menu__head">
        <FlameOffLogo classNm="mob-menu__head_logo" />
        <Image
          loading="eager"
          onClick={closeBtnFn}
          src={CloseCross}
          alt="close btn"
        />
      </div>
      <nav className="mob-menu__nav">
        <Navlist
          listData={navListMob}
          classNm="mob-menu__nav_list"
          itemClickFn={closeBtnFn}
        />
      </nav>
      <hr className="mob-menu__divider" />
      <div className="mob-menu__btn-group btn-group">
        <Button
          text="Get a free quote"
          clickFn={mainButtonsFunction}
          classNm="btn-group__quote"
        />
        <Button
          text="Order now"
          clickFn={mainButtonsFunction}
          classNm="btn-group__order"
        />
      </div>
    </div>
  );
};

export default MobileMenu;
