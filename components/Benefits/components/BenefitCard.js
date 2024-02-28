import Image from 'next/image';

import './BenefitCard.scss';

const BenefitsCard = ({ icon, title, text, altTxt }) => {
  return (
    <div className="benefit-card">
      <Image
        loading="eager"
        className="benefit-card__image"
        src={icon}
        alt={altTxt}
      />
      <h4 className="benefit-card__title">{title}</h4>
      <p className="benefit-card__text">{text}</p>
    </div>
  );
};

export default BenefitsCard;
