import Safety from '../components/Safety/Safety';
import Shielding from '../components/Shielding/Shielding';

import { fbpDesignedForSafety } from '@/constants/sectionHeadingDetails';
import { designedForSafetyData } from '@/constants/IndustriesData';
import { fbpShielding } from '@/constants/sectionHeadingDetails';
import { fbpShieldingDetails } from '@/constants/shiedlingDetails';

const FireBarrierPaint = () => {
  return (
    <>
      <Safety
        fbpSafetyHeadDetails={fbpDesignedForSafety}
        fbpSafetyImageDetails={designedForSafetyData}
      />
      <Shielding
        fbpShieldingHeadDetails={fbpShielding}
        fbpShieldingImageDetails={fbpShieldingDetails}
      />
    </>
  );
};

export default FireBarrierPaint;
