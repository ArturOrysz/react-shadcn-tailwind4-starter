import aboutCar from '@/assets/images/about-car.jpg';
import { Link } from 'react-router-dom';

export default function About() {
	return (
		<section className="relative py-24 bg-white">
			<div className="container mx-auto px-8 md:px-16 lg:px-24">
				<div className="md:grid md:grid-cols-12 md:items-center gap-12">
					{/* Tekst */}
					<div className="md:col-span-6" data-aos="fade-right">
						<h2 className="text-4xl md:text-5xl font-rubik font-bold text-primary-900 mb-6">
							Nasza historia i wartości Detroit Cars
						</h2>
						<p className="text-lg text-primary-600 mb-8 font-sans">
							Detroit Cars to firma z pasją do samochodów. Od lat sprowadzamy
							najlepsze amerykańskie auta do Polski, stawiając na jakość,
							transparentność i satysfakcję klienta.
						</p>
						<div className="flex flex-wrap gap-4">
							<Link
								to="/about"
								className="inline-flex items-center px-8 py-3 bg-accent-600 text-white 
                           rounded-full hover:bg-accent-700 transition-all duration-300 font-rubik"
							>
								Dowiedz się więcej
							</Link>
							<Link
								to="/contact"
								className="inline-flex items-center px-8 py-3 border-2 border-accent-600 text-accent-600 
                           rounded-full hover:bg-accent-600 hover:text-white transition-all duration-300 font-rubik"
							>
								Skontaktuj się →
							</Link>
						</div>
					</div>
					{/* Obraz */}
					<div
						className="md:col-span-6 h-80 md:h-[400px] bg-gray-100 rounded-2xl overflow-hidden"
						data-aos="fade-left"
					>
						<img
							src={aboutCar}
							alt="Samochód Detroit Cars"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
