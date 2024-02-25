import Safety from '../components/Safety/Safety';
import Shielding from '../components/Shielding/Shielding';
import Overview from '../components/Overview/Overview';
import TechData from '../components/TechData/TechData';
import {
  fbpDesignedForSafety,
  fbpShielding,
  fbpOverview,
  productTechData,
} from '@/constants/sectionHeadingDetails';
import { designedForSafetyData } from '@/constants/IndustriesData';
import { fbpShieldingDetails } from '@/constants/shiedlingDetails';
import { fbpOverviewDet } from '@/constants/overviewDetails';
import {
  fbpTechTable1Det,
  fbpTechTable2Det,
} from '@/constants/technicalTableData';

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
      <TechData
        fbpTechHeadingData={productTechData}
        fbpTechData1={fbpTechTable1Det}
        fbpTechData2={fbpTechTable2Det}
      />
    </>
  );
};

export default FireBarrierPaint;
