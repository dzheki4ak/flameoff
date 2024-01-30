import SectionHeading from '@/components/SectionHeading/SectionHeading';
import ShieldingCard from './components/ShieldingCard';
import './Shielding.scss';

const Shielding = ({
  fbpShieldingHeadDetails,
  fbpShieldingImageDetails,
}) => {
  return (
    <section className="shielding">
      <SectionHeading {...fbpShieldingHeadDetails} />
      <div className="shielding__cards">
        {fbpShieldingImageDetails.map(info => (
          <ShieldingCard key={info.text} {...info} />
        ))}
      </div>
    </section>
  );
};

export default Shielding;
