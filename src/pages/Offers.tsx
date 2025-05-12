import ContactOffersCTA from '@/components/ContactOffersCTA';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import OffersIntro from '@/components/OffersIntro';
import ProductGrid from '@/components/ProductGrid';
import ProductTestimonial from '@/components/ProductTestimonial';

export const Offers = () => {
	return (
		<>
			<Header />
			<OffersIntro />
			<ProductGrid />
			<ProductTestimonial />
			{/* Sekcja CTA Kontakt/Umów się */}
			<ContactOffersCTA />
			<Footer />
		</>
	);
};
