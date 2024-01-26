import SectionHeading from '@/components/SectionHeading/SectionHeading';
import Image from 'next/image';
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
          <Image key={info.text} src={info.icon} alt={info.altTxt} />
        ))}
      </div>
    </section>
  );
};

export default Shielding;
