import Products from '@/components/Products/Products';
import Benefits from '@/components/Benefits/Benefits';
import About from '@/components/About/About';
import Studies from '@/components/Studies/Studies';
import ContactUs from '@/components/Contact/ContactUs';
import Industries from '@/components/Industries/Industries';
import './page.scss';

export default function Home() {
  return (
    <>
      <main className="main">
        <Products />
        <Industries />
        <Benefits />
        <Studies />
        <About />
        <ContactUs />
      </main>
    </>
  );
}
