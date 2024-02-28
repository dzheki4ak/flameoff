import Image from 'next/image';

import './ImageSet.scss';

const ImageSet = ({ imageData }) => {
  return (
    <div className="set__images">
      {imageData.map(data => (
        <Image
          loading="eager"
          key={data.altTxt}
          className="set__images_image"
          src={data.image}
          alt={data.altTxt}
        />
      ))}
    </div>
  );
};

export default ImageSet;
