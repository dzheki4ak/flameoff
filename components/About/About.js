'use client';
import Image from 'next/image';
import SectionHeading from '../SectionHeading/SectionHeading';
import { aboutDet } from '@/constants/sectionHeadingDetails';
import AboutImg from '@/public/images/about_us_image.svg';
import AboutMob from '@/public/images/about_us_image_mob.svg'

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
        <picture>
          <source media="(min-width: 730px)" srcSet="../../public/images/about_us_image.svg" />
          <source media="(min-width: 100px)" srcSet="../../public/images/about_us_image_mob.svg" />
          <source srcSet="../../public/images/about_us_image_mob.svg" />
          <Image
            className="about__details_image"
            src={AboutImg}
            alt="firefighters image"
          />
        </picture>
      </div>
    </section>
  );
};

export default About;
