import offersIntroImg from '@/assets/images/offers-intro.jpg';
import { Link } from 'react-router-dom';

export default function OffersIntro() {
	return (
		<section className="relative py-24 bg-white">
			<div className="container mx-auto px-8 md:px-16 lg:px-24">
				<div className="md:flex md:items-center md:space-x-12">
					{/* Tekst */}
					<div className="md:w-1/2" data-aos="fade-right">
						<h1 className="text-4xl font-rubik font-bold text-primary-900 mb-4">
							Nasze dostępne oferty
						</h1>
						<p className="text-lg text-primary-600 mb-8">
							Oferujemy szeroki wybór samochodów importowanych z USA,
							dostosowanych do Twoich potrzeb. Każdy pojazd jest starannie
							przygotowany i gotowy do sprzedaży.
						</p>
						<ul className="list-disc list-inside text-primary-600 space-y-2 mb-8">
							<li>Wysoka jakość i konkurencyjne ceny</li>
							<li>Sprawdź specyfikacje wybranych modeli</li>
							<li>Skontaktuj się z nami, aby dowiedzieć się więcej</li>
						</ul>
						<div className="flex space-x-4">
							<Link
								to="/oferta"
								className="px-6 py-3 bg-accent-600 text-white rounded-full
                           hover:bg-accent-700 transition-colors duration-300 font-rubik"
							>
								Zobacz →
							</Link>
							<Link
								to="/contact"
								className="px-6 py-3 border-2 border-accent-600 text-accent-600 rounded-full
                           hover:bg-accent-600 hover:text-white transition-colors duration-300 font-rubik"
							>
								Więcej →
							</Link>
						</div>
					</div>
					{/* Obraz */}
					<div
						className="md:w-1/2 h-64 md:h-96 rounded-2xl overflow-hidden"
						data-aos="fade-left"
					>
						<img
							src={offersIntroImg}
							alt="Oferty samochodów"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
