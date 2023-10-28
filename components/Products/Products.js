import ProductCard from './components/ProductCard';
import productCardDetails from '@/constants/productCardDetails';

const Products = () => {
  return (
    <section className="products">
      <h2 className="products__header">Our Products</h2>
      <p className="products__intro">
        Lorem ipsum dolor sit amet consectetur. Faucibus odio est
        vitae ut et blandit eget cursus. Leo aliquet elit augue
        hendrerit turpis suspendisse turpis dui. Porttitor pharetra
        est suspendisse turpis vitae sagittis sit. At amet convallis
        massa at lacus ipsum ornare gravida. Metus accumsan
        pellentesque.
      </p>
      <div className="products__details">
        {productCardDetails.map(cardInfo => (
          <ProductCard key={cardInfo.header} {...cardInfo} />
        ))}
      </div>
    </section>
  );
};

export default Products;
