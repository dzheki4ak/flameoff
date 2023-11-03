import Image from 'next/image';
import LogoImg from '@/public/images/flame_off_logo.svg';

const FlameOffLogo = ({ classNm }) => {
  return (
    <Image className={classNm} src={LogoImg} alt="flameoff logo" />
  );
};

export default FlameOffLogo;
