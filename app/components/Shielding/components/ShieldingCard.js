import Image from 'next/image';

import './ShieldingCard.scss';

const ShieldingCard = ({ icon, mainText, secText, altTxt }) => {
  return (
    <div className="shielding__cards_card shield-card">
      <Image className="shield-card__image" src={icon} alt={altTxt} />
      <h4 className="shield-card__text-main">{mainText}</h4>
      <p className="shield-card__text-sec">{secText}</p>
    </div>
  );
};

export default ShieldingCard;
