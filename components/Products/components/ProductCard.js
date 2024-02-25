import Image from 'next/image';
import Button from '@/components/Button/Button';

import './ProductCard.scss';

const ProductCard = ({
  header,
  imageSrc,
  descrTextPrime,
  descrTextSec,
  imgAltText,
  rtl,
  itemId,
  pageLink,
}) => {
  return (
    <div id={itemId} className={`product-card ${rtl && 'rtl'}`}>
      <div className="product-card__details">
        <h3 className="product-card__details_header">{header}</h3>
        <p className="product-card__details_prim-text">
          {descrTextPrime}
        </p>
        <p className="product-card__details_sec-text">
          {descrTextSec}
        </p>
        <Button
          text="Learn More"
          classNm="product-card__details_button"
          link={pageLink}
        />
      </div>
      <Image
        className="product-card__image"
        src={imageSrc}
        alt={imgAltText}
      />
      <Button
        text="Learn More"
        classNm="product-card__details_button-mob"
        link={pageLink}
      />
    </div>
  );
};

export default ProductCard;
