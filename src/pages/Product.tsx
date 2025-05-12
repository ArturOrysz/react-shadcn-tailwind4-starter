import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const Product = () => {
	return (
		<>
			<Header />
			<main className="container mx-auto px-4 py-8">
				<h1 className="text-3xl font-bold mb-6 text-primary-800">Produkty</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<div className="bg-secondary-50 p-6 rounded-lg shadow-md">
						<h2 className="text-xl font-semibold text-primary-700 mb-3">
							Samochód Premium
						</h2>
						<p className="text-secondary-600 mb-4">
							Luksusowy samochód z pełnym wyposażeniem...
						</p>
						<button className="bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-md transition-colors">
							Zobacz szczegóły
						</button>
					</div>
					{/* Więcej elementów produktów */}
				</div>
			</main>
			<Footer />
		</>
	);
};
