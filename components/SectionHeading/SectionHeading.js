import './SectionHeading.scss';

const SectionHeading = ({ headerTxt, infoTxt, classNm = '' }) => {
  return (
    <>
      <h2 className="section-header">{headerTxt}</h2>
      {infoTxt && (
        <p className={`section-intro ${classNm}`}>{infoTxt}</p>
      )}
    </>
  );
};

export default SectionHeading;
