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
		const checkScroll = () => {
			setIsScrolled(window.scrollY > window.innerHeight * 0.25);
		};
		checkScroll();
		window.addEventListener('scroll', checkScroll);
		return () => window.removeEventListener('scroll', checkScroll);
	}, []);

	const isActive = (path: string) => location.pathname === path;

	const linkClasses = (active: boolean) =>
		`relative text-base transition-all duration-300 ease-in-out ${
			active ? 'text-accent-400 font-medium' : 'text-white/90'
		} before:content-[''] before:absolute before:left-0 before:-bottom-2 before:h-0.5 before:bg-accent-400 before:w-0 before:transition-all before:duration-300 hover:before:w-full`;

	return (
		<header
			className={`fixed w-full z-50 transition-all duration-300 ${
				isScrolled ? 'bg-primary-900/95 py-2' : 'bg-transparent py-4'
			}`}
		>
			<div className="container mx-auto px-6">
				<div className="flex items-center justify-between">
					<Link to="/" className="flex items-center">
						<img
							src={logo}
							alt="Detroit Cars Logo"
							className={`transition-all duration-300 ease-in-out ${
								isScrolled ? 'h-8' : 'h-10'
							} w-auto hover:opacity-80`}
						/>
					</Link>

					{/* desktop menu: show only >=lg, z paddingiem wokół */}
					<nav className="hidden lg:flex px-6 py-4 space-x-12 bg-primary-900/0">
						{menuItems.map(({ path, label }) => (
							<Link
								key={path}
								to={path}
								className={linkClasses(isActive(path))}
							>
								{label}
							</Link>
						))}
					</nav>

					{/* burger: show below lg */}
					<button
						className="lg:hidden text-white p-3"
						onClick={() => setMobileOpen(!mobileOpen)}
					>
						<svg
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							className="w-6 h-6"
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

				{/* mobile menu: show below lg, z paddingiem wokół */}
				{mobileOpen && (
					<div className="lg:hidden mt-4 bg-primary-900/95 backdrop-blur-sm rounded-lg">
						<nav className="flex flex-col px-6 py-4 space-y-6">
							{menuItems.map(({ path, label }) => (
								<Link
									key={path}
									to={path}
									className={`
                    ${linkClasses(isActive(path))} 
                    block
                  `}
									onClick={() => setMobileOpen(false)}
								>
									{label}
								</Link>
							))}
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
