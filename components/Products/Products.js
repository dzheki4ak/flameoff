import ProductCard from './components/ProductCard';
import productCardDetails from '@/constants/productCardDetails';
import { productsDet } from '@/constants/sectionHeadingDetails';
import SectionHeading from '../SectionHeading/SectionHeading';

import './Products.scss';

const Products = () => {
  return (
    <section className="products">
      <SectionHeading {...productsDet} />
      <div className="products__details">
        {productCardDetails.map(cardInfo => (
          <ProductCard key={cardInfo.header} {...cardInfo} />
        ))}
      </div>
    </section>
  );
};

export default Products;
