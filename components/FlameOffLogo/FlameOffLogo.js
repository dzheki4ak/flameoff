import Image from 'next/image';
import LogoImg from '@/public/images/flame_off_logo.svg';
import LogoImgMob from '@/public/images/flame_off_logo_grey.svg';
import Link from 'next/link';

const FlameOffLogo = ({ classNm }) => {
  return (
    <Link href="/">
      <Image
        loading="eager"
        className={classNm}
        src={classNm.includes('mob') ? LogoImgMob : LogoImg}
        alt="flameoff logo"
      />
    </Link>
  );
};

export default FlameOffLogo;
