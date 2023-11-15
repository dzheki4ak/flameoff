import SectionHeading from '../SectionHeading/SectionHeading';
import BenefitsCard from './components/BenefitCard';
import benefitCardDetails from '@/constants/benefitCardDetails';
import { benefitsDet } from '@/constants/sectionHeadingDetails';

import './Benefits.scss';

const Benefits = () => {
  return (
    <section className="benefits">
      <SectionHeading {...benefitsDet} />
      <div className="benefits__details">
        {benefitCardDetails.map(info => (
          <BenefitsCard key={info.title} {...info} />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
