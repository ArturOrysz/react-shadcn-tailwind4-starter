import logo from '@/assets/images/logo.svg';

export default function Footer() {
	const socialIcons = [
		{
			name: 'Facebook',
			icon: 'fab fa-facebook-f',
			link: '#',
			bgClass: 'bg-[#3B5998]',
		},
		{
			name: 'Twitter',
			icon: 'fab fa-twitter',
			link: '#',
			bgClass: 'bg-[#00ACEE]',
		},
		{
			name: 'LinkedIn',
			icon: 'fab fa-linkedin',
			link: '#',
			bgClass: 'bg-[#0E76A8]',
		},
		{
			name: 'Instagram',
			icon: 'fab fa-instagram',
			link: '#',
			bgClass: 'bg-[#E1306C]',
		},
	];

	const recentPosts = [
		{
			title: 'Jak wybrać samochód z USA?',
			date: '10 maja 2024',
			link: '#',
		},
		{
			title: 'Transport samochodów z USA',
			date: '5 maja 2024',
			link: '#',
		},
		{
			title: 'Procedura zakupu auta w USA',
			date: '1 maja 2024',
			link: '#',
		},
	];

	return (
		<footer className="bg-primary-900 text-white">
			{/* Główna zawartość stopki */}
			<div className="container mx-auto px-4 py-16">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
					{/* Logo i informacje kontaktowe */}
					<div className="lg:col-span-4">
						<img src={logo} alt="Detroit Cars" className="h-12 mb-6" />
						<p className="mb-6 text-white/80">
							Specjalizujemy się w imporcie samochodów z USA. Zapewniamy
							profesjonalną obsługę na każdym etapie zakupu.
						</p>
						<div className="space-y-2">
							<p className="flex items-center text-white/80">
								<span className="w-6">
									<i className="fas fa-map-marker-alt"></i>
								</span>
								ul. Przykładowa 123, 00-000 Warszawa
							</p>
							<p className="flex items-center text-white/80">
								<span className="w-6">
									<i className="fas fa-phone"></i>
								</span>
								+48 123 456 789
							</p>
							<p className="flex items-center text-white/80">
								<span className="w-6">
									<i className="fas fa-envelope"></i>
								</span>
								kontakt@detroitcars.pl
							</p>
						</div>
					</div>

					{/* Linki */}
					<div className="lg:col-span-4">
						<h4 className="text-xl font-rubik font-bold mb-6">
							Przydatne linki
						</h4>
						<ul className="space-y-3">
							{[
								'Proces zakupu',
								'Kalkulator cen',
								'FAQ',
								'Blog',
								'Kontakt',
								'Polityka prywatności',
							].map((link) => (
								<li key={link}>
									<a
										href="#"
										className="text-white/80 hover:text-accent-400 transition-colors"
									>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Ostatnie wpisy */}
					<div className="lg:col-span-4">
						<h4 className="text-xl font-rubik font-bold mb-6">
							Ostatnie wpisy
						</h4>
						<div className="space-y-4">
							{recentPosts.map((post) => (
								<div key={post.title} className="border-b border-white/10 pb-4">
									<a
										href={post.link}
										className="hover:text-accent-400 transition-colors"
									>
										<h5 className="font-medium mb-1">{post.title}</h5>
										<p className="text-sm text-white/60">{post.date}</p>
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Prawa autorskie i social media */}
			<div className="border-t border-white/10">
				<div className="container mx-auto px-4 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<div className="text-white/80 text-sm">
							© 2024 Detroit Cars. Wszelkie prawa zastrzeżone.
						</div>
						<div className="flex space-x-4">
							{socialIcons.map((social) => (
								<a
									key={social.name}
									href={social.link}
									className={`w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity ${social.bgClass}`}
									aria-label={social.name}
								>
									<i className={social.icon}></i>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
