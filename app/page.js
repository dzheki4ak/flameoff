import Products from '@/components/Products/Products';
import Benefits from '@/components/Benefits/Benefits';
import About from '@/components/About/About';
import Studies from '@/components/Studies/Studies';
import ContactUs from '@/components/Contact/ContactUs';
import Industries from '@/components/Industries/Industries';

export default function Home() {
  return (
    <>
      <Products />
      <Industries />
      <Benefits />
      <Studies />
      <About />
      <ContactUs />
    </>
  );
}
