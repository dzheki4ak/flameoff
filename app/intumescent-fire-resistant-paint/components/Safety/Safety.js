import ImageSet from '@/components/ImageSet/ImageSet';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import { fbpDesignedForSafety } from '@/constants/sectionHeadingDetails';
import { designedForSafetyData } from '@/constants/IndustriesData';

import './Safety.scss'

const Safety = () => {
  return (
    <section className="safety">
      <SectionHeading {...fbpDesignedForSafety} />
      <ImageSet imageData={designedForSafetyData} />
    </section>
  );
};

export default Safety;
