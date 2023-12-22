import SectionHeading from '../SectionHeading/SectionHeading';
import { aboutDet } from '@/constants/sectionHeadingDetails';

import './About.scss';

const About = () => {
  return (
    <section className="about">
      <SectionHeading {...aboutDet} />
      <div className="about__details">
        <p className="about__details_text">
          Our goal is to offer aesthetically pleasing and high quality
          fire safety solutions that will improve the fire rating in
          your construction projects.
        </p>
        <picture className="about__details_image"></picture>
      </div>
    </section>
  );
};

export default About;
