import './SectionHeading.scss';

const ModifiedHeading = ({ classNm }) => (
  <h2 className={`section-heading__header ${classNm}`}>
    Painting Today, <span style={{ color: 'red' }}>Shielding</span>{' '}
    Tomorrow
  </h2>
);

const SectionHeading = ({ headerTxt, infoTxt, classNm = '' }) => {
  return (
    <div className="section-heading">
      {headerTxt.includes('Shielding') ? (
        <ModifiedHeading classNm={classNm} />
      ) : (
        <h2 className={`section-heading__header ${classNm}`}>
          {headerTxt}
        </h2>
      )}

      {infoTxt && (
        <p className={`section-heading__intro ${classNm}`}>
          {infoTxt}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
