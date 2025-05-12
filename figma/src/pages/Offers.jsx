import Header from '../components/Header';
import OffersIntro from '../components/OffersIntro';
import FeaturedOffer from '../components/FeaturedOffer';
import SpecialOffer from '../components/SpecialOffer';
import ProductGrid from '../components/ProductGrid';
import ContactOffersCTA from '../components/ContactOffersCTA';
import Footer from '../components/Footer';

export default function Offers() {
  return (
    <>
      <Header />
      <main>
        <OffersIntro />
        <FeaturedOffer
          title="Odkryj naszą najnowszą ofertę samochodów"
          description="Nasze samochody to połączenie jakości i przystępnej ceny. Sprawdź szczegóły i opcje finansowania."
          buttonText="Szczegóły →"
          reverse
        />
        <SpecialOffer />
        <ProductGrid />
        <ContactOffersCTA />
      </main>
      <Footer />
    </>
  );
}
