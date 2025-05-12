import offersContactCta from '@/assets/images/offers-contact-cta.jpg';

export default function ContactOffersCTA() {
	return (
		<section className="relative py-16 bg-white">
			<div className="container mx-auto px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center gap-8">
				{/* Tekst */}
				<div className="md:w-1/2" data-aos="fade-right">
					<h2 className="text-3xl md:text-4xl font-rubik font-bold text-primary-900 mb-4">
						Skontaktuj się z nami
					</h2>
					<p className="text-lg text-primary-600 mb-6">
						Uzyskaj więcej informacji lub rozpocznij proces importu samochodu
						już dziś.
					</p>
					<div className="flex space-x-4">
						<button className="px-6 py-3 bg-accent-600 text-white rounded-full hover:bg-accent-700 transition-colors duration-300 font-rubik">
							Kontakt
						</button>
						<button className="px-6 py-3 border-2 border-accent-600 text-accent-600 rounded-full hover:bg-accent-600 hover:text-white transition-colors duration-300 font-rubik">
							Rozpocznij import
						</button>
					</div>
				</div>
				{/* Tło */}
				<div
					className="md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden bg-cover bg-center"
					style={{ backgroundImage: `url(${offersContactCta})` }}
					data-aos="fade-left"
				/>
			</div>
		</section>
	);
}
