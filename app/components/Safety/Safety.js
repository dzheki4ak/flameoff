import ImageSet from '@/components/ImageSet/ImageSet';
import SectionHeading from '@/components/SectionHeading/SectionHeading';

import './Safety.scss';

const Safety = ({ fbpSafetyHeadDetails, fbpSafetyImageDetails }) => {
  return (
    <section className="safety">
      <SectionHeading {...fbpSafetyHeadDetails} />
      <ImageSet imageData={fbpSafetyImageDetails} />
    </section>
  );
};

export default Safety;
