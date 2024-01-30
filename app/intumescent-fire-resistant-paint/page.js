import Safety from '../components/Safety/Safety';
import Shielding from '../components/Shielding/Shielding';
import Overview from '../components/Overview/Overview';

import {
  fbpDesignedForSafety,
  fbpShielding,
  fbpOverview,
} from '@/constants/sectionHeadingDetails';
import { designedForSafetyData } from '@/constants/IndustriesData';
import { fbpShieldingDetails } from '@/constants/shiedlingDetails';
import { fbpOverviewDet } from '@/constants/overviewDetails';

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
      <Overview
        fbpOverviewHeadDetails={fbpOverview}
        fbpOverviewCardDetails={fbpOverviewDet}
      />
    </>
  );
};

export default FireBarrierPaint;
