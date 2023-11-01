import './SectionHeading.scss';

const SectionHeading = ({ headerTxt, infoTxt }) => {
  return (
    <>
      <h2 className="section-header">{headerTxt}</h2>
      <p className="section-intro">{infoTxt}</p>
    </>
  );
};

export default SectionHeading;
