import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import Button from '@/components/Button/Button';
import './TechData.scss';

const TechData = ({
  fbpTechHeadingData,
  fbpTechData1,
  fbpTechData2,
}) => {
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
      </div>
      <div className="technical__tables">
        <table
          className="technical__tables_table t-table"
          cellspacing="0"
        >
          <tbody className="t-table__body">
            <tr className="t-table__body_row">
              <th className="t-table__head file-cell">PDF</th>
              <th className="t-table__head">Name</th>
            </tr>
            {fbpTechData1.map(data => (
              <tr className="t-table__body_row" key={data.reportN}>
                <td className="t-table__data file-cell">
                  <Link href={data.fileLink} target="_blank">
                    <Image
                      className="t-table__data_image"
                      src={data.file}
                      alt={data.altTxt}
                    />
                  </Link>
                </td>
                <td className="t-table__data">{data.reportName}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table
          className="technical__tables_table t-table"
          cellspacing="0"
        >
          <tbody className="t-table__body">
            <tr className="t-table__body_row mob-hide">
              <th className="t-table__head file-cell">PDF</th>
              <th className="t-table__head">Name</th>
            </tr>
            {fbpTechData2.map(data => (
              <tr className="t-table__body_row" key={data.reportN}>
                <td className="t-table__data file-cell">
                  <Link href={data.fileLink} target="_blank">
                    <Image
                      className="t-table__data_image"
                      src={data.file}
                      alt={data.altTxt}
                    />
                  </Link>
                </td>
                <td className="t-table__data">{data.reportName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="technical__support">
        Ensure proper application contact our support team with any
        questions
      </p>
      <Button text="order now" classNm="technical__button" />
      <Link
        className="technical__listing_legend"
        href="https://flameoffcoatings.com"
        target="_blank"
      >
        Official website
      </Link>
    </section>
  );
};

export default TechData;
