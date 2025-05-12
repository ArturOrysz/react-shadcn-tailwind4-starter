import { useState } from 'react';
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
	const location = useLocation();

	const isActive = (path: string) => location.pathname === path;

	return (
		<header className="fixed w-full z-50 transition-colors duration-300">
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between bg-transparent">
					<Link to="/" className="text-2xl font-bold text-white">
						Logo
					</Link>

					{/* desktop menu */}
					<nav className="hidden md:flex space-x-8">
						{menuItems.map(({ path, label }) => (
							<Link
								key={path}
								to={path}
								className={`text-sm hover:text-accent-400 transition-colors ${
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
						<button className="px-4 py-2 border border-white/30 text-white rounded hover:bg-white/10 transition-colors">
							Zaloguj
						</button>
						<button className="px-4 py-2 bg-accent-600 text-white rounded hover:bg-accent-700 transition-colors">
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
