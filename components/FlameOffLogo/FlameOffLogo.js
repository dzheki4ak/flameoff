import Image from 'next/image';
import LogoImg from '@/public/images/flame_off_logo.svg';
import LogoImgMob from '@/public/images/flame_off_logo_grey.svg';

const FlameOffLogo = ({ classNm }) => {
  return (
    <Image
      className={classNm}
      src={classNm.includes('mob') ? LogoImgMob : LogoImg}
      alt="flameoff logo"
    />
  );
};

export default FlameOffLogo;
