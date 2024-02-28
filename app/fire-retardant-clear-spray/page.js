import Safety from '../components/Safety/Safety';
import Shielding from '../components/Shielding/Shielding';
import Overview from '../components/Overview/Overview';
import TechData from '../components/TechData/TechData';
import {
  frcDesignedForSafety,
  frcShielding,
  frcOverview,
  productTechData,
} from '@/constants/sectionHeadingDetails';
import { versatileFireDefenceData } from '@/constants/IndustriesData';
import { frcShieldingDetails } from '@/constants/shiedlingDetails';
import { frcOverviewDet } from '@/constants/overviewDetails';
import {
  frcTechTable1Det,
  frcTechTable2Det,
} from '@/constants/technicalTableData';

const fireRetardantClear = () => {
  return (
    <>
      <Safety
        fbpSafetyHeadDetails={frcDesignedForSafety}
        fbpSafetyImageDetails={versatileFireDefenceData}
      />
      <Shielding
        fbpShieldingHeadDetails={frcShielding}
        fbpShieldingImageDetails={frcShieldingDetails}
      />
      <Overview
        fbpOverviewHeadDetails={frcOverview}
        fbpOverviewCardDetails={frcOverviewDet}
      />
      <TechData
        fbpTechHeadingData={productTechData}
        fbpTechData1={frcTechTable1Det}
        fbpTechData2={frcTechTable2Det}
      />
    </>
  );
};

export default fireRetardantClear;
