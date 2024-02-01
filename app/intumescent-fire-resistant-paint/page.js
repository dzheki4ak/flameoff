import Safety from '../components/Safety/Safety';
import Shielding from '../components/Shielding/Shielding';
import Overview from '../components/Overview/Overview';
import TechData from '../components/TechData/TechData';

import {
  fbpDesignedForSafety,
  fbpShielding,
  fbpOverview,
  productTechData
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
      <TechData fbpTechHeadingData={productTechData}/>
    </>
  );
};

export default FireBarrierPaint;
