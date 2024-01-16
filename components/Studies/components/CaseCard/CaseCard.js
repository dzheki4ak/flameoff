import Image from 'next/image';

import './CaseCard.scss';

const CaseCard = ({ imgSrc, altText, title, text }) => {
  return (
    <div className="studies-card">
      <Image
        className="studies-card__image"
        src={imgSrc}
        alt={`${altText}`}
      />
      <div className="studies-card__info">
        <h4 className="studies-card__info_title">{title}</h4>
        <p className="studies-card__info_text">{text}</p>
      </div>
    </div>
  );
};

export default CaseCard;
