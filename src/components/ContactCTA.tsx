import contactCta from '@/assets/images/contact-cta.jpg';

export default function ContactCTA() {
	return (
		<section
			className="relative py-16 bg-cover bg-center bg-fixed"
			style={{ backgroundImage: `url(${contactCta})` }}
		>
			{/* Ciemna nakładka */}
			<div className="absolute inset-0 bg-primary-900/60 -z-10" />

			<div className="relative container mx-auto px-4 text-center">
				{/* Zmieniony kolor czcionki na ciemnoszary */}
				<h2 className="text-4xl md:text-5xl font-rubik font-bold text-black mb-4">
					Skontaktuj się z nami
				</h2>
				<p className="mb-8 text-lg text-black">
					Zacznij swoją przygodę z importem samochodów już dziś...
				</p>
				<div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
					<button
						className="px-8 py-4 bg-accent-600 text-white rounded-full
                       hover:bg-accent-700 transition-all duration-300 font-rubik"
					>
						Oblicz
					</button>
					<button
						className="px-8 py-4 border-2 border-accent-600 text-accent-600 rounded-full
                       hover:bg-accent-600 hover:text-white transition-all duration-300 font-rubik"
					>
						Kontakt
					</button>
				</div>
			</div>
		</section>
	);
}
