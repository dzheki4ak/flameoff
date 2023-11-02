import CaseCard from './components/CaseCard/CaseCard';
import studiesCardDetails from '@/constants/studiesCardDetails';
import './Studies.scss';

const Studies = () => {
  return (
    <section className="studies">
      <h2 className="studies__header section-header">Case Studies</h2>
      <div className="studies__cards">
        {studiesCardDetails.map(info => (
          <CaseCard key={info.title} {...info}/>
        ))}
      </div>
    </section>
  );
};

export default Studies;
