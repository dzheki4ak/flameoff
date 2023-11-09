import Products from '@/components/Products/Products';
import Benefits from '@/components/Benefits/Benefits';
import About from '@/components/About/About';
import './page.scss';
import Studies from '@/components/Studies/Studies';
import ContactUs from '@/components/Contact/ContactUs';

export default function Home() {
  return (
    <>
      <main className="main">
        <Products />
        <Benefits />
        <Studies />
        <About />
        <ContactUs />
      </main>
    </>
  );
}
