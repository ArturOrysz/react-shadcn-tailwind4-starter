import auction from '@/assets/images/auction.svg';
import carimport from '@/assets/images/import.svg';
import homologation from '@/assets/images/repairs.svg';
import service from '@/assets/images/services.svg';
import usaFlagBg from '@/assets/images/usa-flag-red.png';
import { Link } from 'react-router-dom';

const services = [
	{
		title: 'Import samochodów z USA do Polski',
		description:
			'Kompleksowa obsługa importu samochodów z rynku amerykańskiego.',
		icon: carimport,
		link: '/import',
	},
	{
		title: 'Sprzedaż pojazdów z aukcji',
		description: 'Dostęp do największych aukcji samochodowych w USA.',
		icon: auction,
		link: '/aukcje',
	},
	{
		title: 'Usługi homologacji',
		description: 'Pełna obsługa procesu homologacji pojazdów.',
		icon: homologation,
		link: '/homologacja',
	},
	{
		title: 'Naprawy i serwis',
		description: 'Profesjonalny serwis i naprawy.',
		icon: service,
		link: '/serwis',
	},
];

export default function Services() {
	return (
		<section className="relative py-24 isolate overflow-hidden bg-primary-900">
			{/* Tło z flagą USA i filtrem - dodajemy z-index */}
			<div className="absolute inset-0 -z-10">
				<div
					className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay"
					style={{ backgroundImage: `url(${usaFlagBg})` }}
				/>
				{/* Czerwona poświata */}
				<div className="absolute inset-0 bg-gradient-to-b from-accent-600/30 via-primary-900/80 to-primary-900/40" />
				{/* Dodatkowy efekt świecenia */}
				<div className="absolute inset-0 bg-accent-600/20 blur-3xl" />
			</div>

			<div className="relative container mx-auto px-8 md:px-16 lg:px-24">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
					{/* Lewa kolumna z nagłówkiem */}
					<div className="lg:col-span-5" data-aos="fade-right">
						<div className="sticky top-24">
							<h2 className="text-4xl md:text-5xl font-rubik font-bold text-white mb-6">
								Nasze główne usługi w Detroit Cars
							</h2>
							<p className="text-lg text-white/80 max-w-xl font-sans mb-8">
								Oferujemy kompleksowy import samochodów z USA, zapewniając pełną
								obsługę na każdym etapie procesu, od wyboru pojazdu po
								rejestrację.
							</p>
							<Link
								to="/oferta"
								className="inline-flex items-center px-6 py-3 border-2 border-white text-white 
                          rounded-full hover:bg-white/20 
                          transition-all duration-300 font-rubik"
							>
								<span className="mr-2">Zobacz pełną ofertę</span>
								<span className="text-xl">→</span>
							</Link>
						</div>
					</div>

					{/* Prawa kolumna z siatką usług */}
					<div className="lg:col-span-7">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{services.map((service, index) => (
								<div
									key={service.title}
									data-aos="fade-up"
									data-aos-delay={index * 100}
									className="group p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 bg-transparent"
								>
									<div className="mb-6">
										<img
											src={service.icon}
											alt={service.title}
											className="w-16 h-16 [filter:brightness(0)_invert(1)]"
										/>
									</div>
									<h3 className="text-xl font-rubik font-bold text-white mb-4">
										{service.title}
									</h3>
									<p className="text-white/80 mb-6">{service.description}</p>
									<Link
										to={service.link}
										className="inline-flex items-center px-4 py-2 border-2 border-white/30 
                              text-white rounded-full hover:bg-white/20
                              transition-all duration-300 font-rubik text-sm"
									>
										<span>Szczegóły</span>
										<span className="group-hover:translate-x-1 transition-transform ml-2">
											→
										</span>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
