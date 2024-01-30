import Image from 'next/image';

import './ShieldingCard.scss';

const ShieldingCard = ({ icon, text, altTxt }) => {
  return (
    <div className="shielding__cards_card shield-card">
      <Image className='shield-card__image' src={icon} alt={altTxt} />
      <p className='shield-card__text'>{text}</p>
    </div>
  );
};

export default ShieldingCard;
