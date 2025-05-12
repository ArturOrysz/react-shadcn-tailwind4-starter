import Footer from '@/components/Footer';
import Header from '@/components/Header';
import OffersIntro from '@/components/OffersIntro';
import ProductGrid from '@/components/ProductGrid';

export const Offers = () => {
	return (
		<>
			<Header />
			{/* Sekcja wprowadzająca oferty */}
			<OffersIntro />
			{/* Siatka produktów */}
			<ProductGrid />
			<main className="container mx-auto px-4 py-8">
				<h1 className="text-3xl font-bold mb-6">Nasza oferta</h1>
				{/* Tutaj treść strony */}
			</main>
			<Footer />
		</>
	);
};
