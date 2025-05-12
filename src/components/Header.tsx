import logo from '@/assets/images/logo.svg';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
	{ path: '/', label: 'Strona główna' },
	{ path: '/proces-zakupu', label: 'Proces zakupu' },
	{ path: '/oferta', label: 'Nasza oferta' },
	{ path: '/kalkulator', label: 'Kalkulator cen' },
	{ path: '/salon', label: 'Salon samochodowy' },
	{ path: '/blog', label: 'Blog' },
];

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			// Sprawdzamy czy przewinięto 25% wysokości viewportu
			const scrollThreshold = window.innerHeight * 0.25;
			setIsScrolled(window.scrollY > scrollThreshold);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const isActive = (path: string) => location.pathname === path;

	return (
		<header
			className={`fixed w-full z-50 transition-all duration-300 ease-in-out
        ${
					isScrolled
						? 'bg-primary-900/95 backdrop-blur py-2'
						: 'bg-transparent py-4'
				}`}
		>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between">
					<Link to="/" className="flex items-center">
						<img
							src={logo}
							alt="Detroit Cars Logo"
							className={`transition-all duration-300 ease-in-out
                ${isScrolled ? 'h-8' : 'h-10'} w-auto hover:opacity-80`}
						/>
					</Link>

					{/* desktop menu */}
					<nav className="hidden md:flex space-x-8">
						{menuItems.map(({ path, label }) => (
							<Link
								key={path}
								to={path}
								className={`text-sm transition-all duration-300 ease-in-out
                  ${isScrolled ? 'py-1' : 'py-2'}
                  hover:text-accent-400 
                  ${
										isActive(path)
											? 'text-accent-400 font-medium'
											: 'text-white/90'
									}`}
							>
								{label}
							</Link>
						))}
					</nav>

					<div className="hidden md:flex space-x-4">
						<button
							className={`transition-all duration-300 ease-in-out
                border border-white/30 text-white rounded hover:bg-white/10
                ${isScrolled ? 'px-3 py-1.5' : 'px-4 py-2'}`}
						>
							Zaloguj
						</button>
						<button
							className={`transition-all duration-300 ease-in-out
                bg-accent-600 text-white rounded hover:bg-accent-700
                ${isScrolled ? 'px-3 py-1.5' : 'px-4 py-2'}`}
						>
							Zarejestruj
						</button>
					</div>

					{/* mobile burger */}
					<button
						className="md:hidden text-white"
						onClick={() => setMobileOpen(!mobileOpen)}
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							{mobileOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</div>

				{/* mobile menu */}
				{mobileOpen && (
					<div className="md:hidden mt-4 bg-primary-900/95 backdrop-blur-sm rounded-lg p-4">
						<nav className="flex flex-col space-y-4">
							{menuItems.map(({ path, label }) => (
								<Link
									key={path}
									to={path}
									className={`text-base hover:text-accent-400 transition-colors ${
										isActive(path)
											? 'text-accent-400 font-medium'
											: 'text-white/90'
									}`}
									onClick={() => setMobileOpen(false)}
								>
									{label}
								</Link>
							))}
							<button className="w-full px-4 py-2 border border-white/30 text-white rounded hover:bg-white/10 transition-colors">
								Zaloguj
							</button>
							<button className="w-full px-4 py-2 bg-accent-600 text-white rounded hover:bg-accent-700 transition-colors">
								Zarejestruj
							</button>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
