import './SectionHeading.scss';

const SectionHeading = ({
  headerTxt,
  redText,
  infoTxt,
  classNm = '',
}) => {
  return (
    <div className="section-heading">
      <h2 className={`section-heading__header ${classNm}`}>
        {headerTxt} <span style={{ color: '#B40404' }}>{redText}</span>
      </h2>
      {infoTxt && (
        <p className={`section-heading__intro ${classNm}`}>
          {infoTxt}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
