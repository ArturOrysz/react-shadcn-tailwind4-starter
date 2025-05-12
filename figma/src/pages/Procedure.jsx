import Header from '../components/Header';
import PurchaseProcedure from '../components/PurchaseProcedure';
import Benefits from '../components/Benefits';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function Procedure() {
  return (
    <>
      <Header />
      <main>
        <PurchaseProcedure />
        <Benefits />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
