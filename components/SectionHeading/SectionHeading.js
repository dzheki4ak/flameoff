import './SectionHeading.scss';

const ModifiedHeading = ({ classNm, headerTxt }) => {
  const basicClass = 'section-heading__header';

  if (headerTxt.includes('Shielding')) {
    return (
      <h2 className={`${basicClass} ${classNm}`}>
        Painting Today,{' '}
        <span style={{ color: 'red' }}>Shielding</span> Tomorrow
      </h2>
    );
  }

  if (headerTxt.includes('Safety')) {
    return (
      <h2 className={`${basicClass} ${classNm}`}>
        Designed For <span style={{ color: 'red' }}>Safety</span>
      </h2>
    );
  }

  return <h2 className={`${basicClass} ${classNm}`}>{headerTxt}</h2>;
};

const SectionHeading = ({ headerTxt, infoTxt, classNm = '' }) => {
  return (
    <div className="section-heading">
      <ModifiedHeading classNm={classNm} headerTxt={headerTxt} />
      {infoTxt && (
        <p className={`section-heading__intro ${classNm}`}>
          {infoTxt}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
