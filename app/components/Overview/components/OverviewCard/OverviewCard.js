import Image from 'next/image';

const OverviewCard = ({ image, text, altTxt }) => {
  return (
    <div className="overview__cards_card">
      <Image
        className="overview__cards_card-image"
        src={image}
        alt={altTxt}
      />
      <p className="overview__cards_card-text">{text}</p>
    </div>
  );
};

export default OverviewCard;
