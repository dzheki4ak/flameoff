import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading/SectionHeading';

import './TechData.scss';

const TechData = ({ fbpTechHeadingData }) => {
  return (
    <section className="technical">
      <SectionHeading {...fbpTechHeadingData} />
      <div className="technical__listing">
        <h4 className="technical__listing_header">Listings</h4>
        <p className="technical__listing_text">
          As we work on passing performance criteria for European
          standards, our product currently surpasses the performance
          criteria of many testing standards in the US and Canada. See
          below our tests which have been completed by national
          accredited testing laboratories. Their unbiased results are
          the basis for our certification listings.
        </p>
        <Link className="technical__listing_legend" href="#">
          View Legend
        </Link>
      </div>
      <table>
        <tbody>
          <tr key=""></tr>
        </tbody>
      </table>
    </section>
  );
};

export default TechData;
