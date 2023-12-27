'use client';
import CaseCard from './components/CaseCard/CaseCard';
import studiesCardDetails from '@/constants/studiesCardDetails';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Studies.scss';

const Studies = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="studies">
      <h2 className="studies__header section-header">Case Studies</h2>
      <div className="studies__cards">
        {studiesCardDetails.map(info => (
          <CaseCard key={info.title} {...info} />
        ))}
      </div>
      <Slider {...settings} className="studies__slider">
        {studiesCardDetails.map(info => (
          <CaseCard key={info.title} {...info} />
        ))}
      </Slider>
    </section>
  );
};

export default Studies;
