import Products from '@/components/Products/Products';
import Benefits from '@/components/Benefits/Benefits';
import About from '@/components/About/About';
import './page.scss';

export default function Home() {
  return (
    <>
      <main className="main">
        <Products />
        <Benefits />
        <About />
      </main>
    </>
  );
}
