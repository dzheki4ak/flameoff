import Image from 'next/image';
import Link from 'next/link';

import arrowRight from '@/public/images/icons/arrow-right.svg';

import './CaseCard.scss';

const CaseCard = ({ imgSrc, altText, title, text }) => {
  return (
    <div className="studies-card">
      <Image
        className="studies-card__image"
        src={imgSrc}
        alt={altText}
      />
      <div className="studies-card__info">
        <h4 className="studies-card__info_title">{title}</h4>
        <p className="studies-card__info_text">{text}</p>
        <Link
          className="studies-card__info_link studies-link"
          href={``}
        >
          <div className="studies-link__details">
            <span className="studies-link__details_text">
              More Info
            </span>
            <Image src={arrowRight} alt="arrow right"/>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CaseCard;
