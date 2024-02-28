import Image from 'next/image';

const OverviewCard = ({ image, text, altTxt, text2part }) => {
  return (
    <div className="overview__cards_card">
      <Image
        loading="eager"
        className="overview__cards_card-image"
        src={image}
        alt={altTxt}
      />
      <div className="overview__cards_card-text">
        <p className="overview__cards_card-text_pt1">{text}</p>
        {text2part && (
          <p className="overview__cards_card-text_pt2">{text2part}</p>
        )}
      </div>
    </div>
  );
};

export default OverviewCard;
