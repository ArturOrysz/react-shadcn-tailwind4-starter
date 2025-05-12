import car1 from '@/assets/images/car1.jpg';
import car2 from '@/assets/images/car2.jpg';
import car3 from '@/assets/images/car3.jpg';
import car4 from '@/assets/images/car4.jpg';
import car5 from '@/assets/images/car5.jpg';
import car6 from '@/assets/images/car6.jpg';
import car7 from '@/assets/images/car7.jpg';
import car8 from '@/assets/images/car8.jpg';

const products = [
	{ name: 'Ford Mustang GT', price: '$55', image: car1 },
	{ name: 'Chevrolet Camaro SS', price: '$52', image: car2 },
	{ name: 'Dodge Charger R/T', price: '$58', image: car3 },
	{ name: 'Tesla Model S', price: '$75', image: car4 },
	{ name: 'Jeep Wrangler Rubicon', price: '$60', image: car5 },
	{ name: 'Chrysler 300 C', price: '$50', image: car6 },
	{ name: 'Ford Explorer XLT', price: '$45', image: car7 },
	{ name: 'Nissan Altima SL', price: '$40', image: car8 },
];

export default function ProductGrid() {
	return (
		<section className="container mx-auto px-4 py-16">
			<h2 className="text-3xl font-rubik font-bold text-primary-900 mb-8 text-center">
				Nasze samochody
			</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
				{products.map((p, i) => (
					<div
						key={i}
						className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
						data-aos="fade-up"
						data-aos-delay={i * 50}
					>
						<img
							src={p.image}
							alt={p.name}
							className="w-full h-48 object-cover"
						/>
						<div className="p-4 flex-1 flex flex-col">
							<h3 className="font-rubik font-medium text-lg text-primary-900 mb-2">
								{p.name}
							</h3>
							<p className="text-accent-600 font-bold text-xl mb-4">
								{p.price}
							</p>
							<button
								className="mt-auto inline-flex items-center justify-center px-4 py-2 bg-accent-600 text-white 
                           rounded-full hover:bg-accent-700 transition-colors duration-300 font-rubik"
							>
								Dodaj do koszyka
							</button>
						</div>
					</div>
				))}
			</div>
			<div className="mt-12 text-center">
				<button
					className="px-8 py-3 border-2 border-accent-600 text-accent-600 rounded-full 
                     hover:bg-accent-600 hover:text-white transition-colors duration-300 font-rubik"
				>
					Zobacz wszystkie
				</button>
			</div>
		</section>
	);
}
