import Image from 'next/image';
import SectionHeading from '../SectionHeading/SectionHeading';
import { aboutDet } from '@/constants/sectionHeadingDetails';
import about from '@/public/images/about_us_image.svg';

import './About.scss';

const About = () => {
  return (
    <section className="about">
      <SectionHeading {...aboutDet} />
      <div className="about__details">
        <div className="about__details_info">
          <p className="about__details_info-text">
            Lorem ipsum dolor sit amet consectetur. Dictum pulvinar ut
            eu ut neque. Consectetur amet tincidunt arcu consequat sed
            ultrices eu mauris. Ipsum nulla id lectus convallis
            suspendisse mauris. Et leo volutpat elementum egestas
            fusce cursus egestas.
          </p>
          <p className="about__details_info-text">
            Urna neque mollis ipsum pharetra pulvinar sed. Augue
            mauris hac tellus suscipit vitae. Congue in eget in nunc
            magna adipiscing massa turpis dolor. Senectus morbi augue
            sit elementum odio facilisi elit urna. Amet imperdiet et
            sit donec. Ultrices commodo et dict
          </p>
        </div>
        <Image
          className="about__details_image"
          src={about}
          alt="firefighters image"
        />
      </div>
    </section>
  );
};

export default About;
