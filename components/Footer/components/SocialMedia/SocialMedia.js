import Image from 'next/image';
import Link from 'next/link';
import socMediaData from '@/constants/socMediaData';

import './SocialMedia.scss';

const SocialMedia = () => {
  return (
    <div className="social-media">
      {socMediaData.map(data => (
        <Link
          className="social-media__link"
          key={data.link}
          href={data.link}
        >
          <Image
            className="social-media__link_icon"
            src={data.icon}
            alt={data.altTxt}
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
