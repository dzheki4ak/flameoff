import SectionHeading from '@/components/SectionHeading/SectionHeading';
import OverviewCard from './components/OverviewCard/OverviewCard';

import './Overview.scss';

const Overview = ({
  fbpOverviewHeadDetails,
  fbpOverviewCardDetails,
}) => {
  return (
    <section className="overview">
      <SectionHeading {...fbpOverviewHeadDetails} />
      <div className="overview__cards">
        {fbpOverviewCardDetails.map(cardDet => (
          <OverviewCard key={cardDet.text} {...cardDet} />
        ))}
      </div>
    </section>
  );
};

export default Overview;
