import './SectionHeading.scss';

const SectionHeading = ({ headerTxt, infoTxt, classNm = '' }) => {
  return (
    <div className='section-heading'>
      <h2 className="section-heading__header">{headerTxt}</h2>
      {infoTxt && (
        <p className={`section-heading__intro ${classNm}`}>{infoTxt}</p>
      )}
    </div>
  );
};

export default SectionHeading;
