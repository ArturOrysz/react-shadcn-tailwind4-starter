import man1 from '@/assets/images/men1.jpg';
import man2 from '@/assets/images/men2.jpg';
import man3 from '@/assets/images/men3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const reviews = [
	{
		text: 'Profesjonalna obsługa i doskonała znajomość rynku amerykańskiego. Sprowadzony samochód przekroczył moje oczekiwania pod względem stanu i ceny.',
		author: 'Jan Kowalski',
		position: 'Dyrektor AutoMax',
		image: man1,
	},
	{
		text: 'Zamówienie przebiegło sprawnie i bezproblemowo. Cały proces importu został przeprowadzony profesjonalnie, z dbałością o każdy szczegół.',
		author: 'Piotr Nowak',
		position: 'Menadżer CarExpert',
		image: man2,
	},
	{
		text: 'Wszystko odbyło się zgodnie z ustaleniami. Jestem pod wrażeniem jakości obsługi i komunikacji na każdym etapie realizacji zamówienia.',
		author: 'Marek Wiśniewski',
		position: 'Właściciel AutoLand',
		image: man3,
	},
];

export default function Testimonials() {
	return (
		<section className="relative py-24 bg-primary-900">
			{/* Tło z gradientem */}
			<div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 to-primary-900"></div>

			<div className="relative container mx-auto px-8 md:px-16 lg:px-24">
				<div className="text-center mb-16" data-aos="fade-up">
					<h2 className="text-4xl md:text-5xl font-rubik font-bold text-white mb-6">
						Co mówią o nas klienci
					</h2>
					<p className="text-lg text-white/80 max-w-3xl mx-auto font-sans">
						Poznaj opinie naszych klientów na temat współpracy z Detroit Cars
					</p>
				</div>

				{/* Grid z 1 kolumną na mobile, 2 na tablecie, 3 na desktopie */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{reviews.map((review, index) => (
						<div
							key={index}
							data-aos="fade-up"
							data-aos-delay={index * 100}
							className="bg-white rounded-2xl p-8 shadow-xl transform hover:-translate-y-1 transition-all duration-300"
						>
							<div className="flex items-center mb-6">
								<div className="mr-4">
									<img
										src={review.image}
										alt={review.author}
										className="w-16 h-16 rounded-full object-cover border-4 border-accent-400"
									/>
								</div>
								<div>
									<h4 className="font-rubik font-bold text-primary-900">
										{review.author}
									</h4>
									<p className="text-sm text-primary-600">{review.position}</p>
								</div>
							</div>

							<div className="flex mb-4">
								{Array(5)
									.fill(0)
									.map((_, i) => (
										<FontAwesomeIcon
											key={i}
											icon="star"
											className="text-accent-400 w-4 h-4 mr-1"
										/>
									))}
							</div>

							<div className="relative">
								<FontAwesomeIcon
									icon="quote-right"
									className="absolute -top-4 -left-2 text-4xl text-accent-400/10"
								/>
								<p className="text-primary-600 relative z-10 italic">
									"{review.text}"
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
