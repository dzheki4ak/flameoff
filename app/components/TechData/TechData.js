import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading/SectionHeading';

import Image from 'next/image';

import './TechData.scss';

const TechData = ({ fbpTechHeadingData, fbpTechData }) => {
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
      <table className="technical__table t-table">
        <tbody className="t-table__body">
          <tr className="t-table__body_row">
            <th>Agency Name</th>
            <th>Report Number</th>
            <th>Details</th>
            <th>PDF</th>
          </tr>
          {fbpTechData.map(data => (
            <tr className="t-table__body_row" key={data.reportN}>
              <td>
                <Image src={data.agency} alt={data.altTxt} />
              </td>
              <td>{data.reportN}</td>
              <td>{data.details}</td>
              <td>
                <Image src={data.file} alt={data.altTxt} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TechData;
