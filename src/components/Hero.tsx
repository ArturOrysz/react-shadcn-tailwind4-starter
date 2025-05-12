import landingPage from '@/assets/images/landingpage.jpg';
import { useEffect, useState } from 'react';

const slides = [
	{
		image: landingPage,
		label: 'Nowość',
		title: 'Ekskluzywne Samochody Premium',
		description: 'Odkryj naszą najnowszą kolekcję luksusowych pojazdów',
	},
	{
		image: landingPage,
		label: 'Wyróżnione',
		title: 'Klasyka w Nowoczesnym Wydaniu',
		description: 'Perfekcyjne połączenie klasycznej elegancji z nowoczesnością',
	},
	{
		image: landingPage,
		label: 'Popularne',
		title: 'Sportowa Doskonałość',
		description: 'Poznaj nasze najbardziej pożądane modele',
	},
];

export default function Hero() {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 6000);
		return () => clearInterval(timer);
	}, []);

	return (
		<section className="relative h-[60vh] md:h-screen overflow-hidden bg-primary-900 font-sans">
			<div className="absolute inset-0">
				{slides.map((slide, index) => (
					<div
						key={index}
						className={`absolute inset-0 transition-opacity duration-1000 ${
							currentSlide === index ? 'opacity-100' : 'opacity-0'
						}`}
					>
						<div
							className="absolute inset-0 bg-cover bg-center"
							style={{ backgroundImage: `url(${slide.image})` }}
						>
							<div className="absolute inset-0 bg-primary-900/50" />
						</div>
						<div className="relative h-full flex items-center">
							<div className="container mx-auto px-8 md:px-16 lg:px-24">
								{' '}
								{/* Zwiększone paddingi */}
								<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
									<div className="md:col-span-7">
										<div
											className="text-center md:text-left"
											data-aos="fade-up"
											data-aos-duration="1000"
										>
											<span className="inline-block text-accent-400 mb-2 font-rubik text-sm tracking-wider uppercase">
												{slide.label}
											</span>
											<h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-rubik leading-tight">
												{slide.title}
											</h2>
											<button className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-primary-900 transition-colors font-rubik">
												<span>Zobacz szczegóły</span>
											</button>
										</div>
									</div>
									<div className="md:col-span-5 flex justify-center md:justify-end">
										<button
											className="w-16 h-16 rounded-full bg-accent-500 hover:bg-accent-600 flex items-center justify-center transition-colors"
											aria-label="Odtwórz film"
										>
											<svg
												className="w-8 h-8 text-white"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M8 5v10l7-5-7-5z" />
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
