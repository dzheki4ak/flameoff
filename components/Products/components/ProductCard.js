import Image from 'next/image';
import Button from '@/components/Button/Button';


import './ProductCard.scss';

const ProductCard = ({ header, imageSrc, descrTextPrime, descrTextSec, imgAltText, rtl }) => {
  return (
    <div className={`product-card ${rtl && 'rtl'}`} >
      <div className="product-card__details">
        <h3 className="product-card__details_header">{header}</h3>
        <p className="product-card__details_prim-text">{descrTextPrime}</p>
        <span className="product-card__details_sec-text">{descrTextSec}</span>
        <Button text="Read More" />
      </div>
      <Image
        className="product-card__image"
        src={imageSrc}
        alt={imgAltText}
      />
    </div>
  );
};

export default ProductCard;
