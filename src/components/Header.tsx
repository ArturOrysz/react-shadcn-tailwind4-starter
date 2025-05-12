import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
	{ path: '/', label: 'Strona główna' },
	{ path: '/procedure', label: 'Proces zakupu' },
	{ path: '/offers', label: 'Nasza oferta' },
	{ path: '/product', label: 'Produkty' },
	{ path: '/posts', label: 'Aktualności' },
];

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const location = useLocation();

	const isActive = (path: string) => location.pathname === path;

	return (
		<header className="bg-white shadow-md">
			<div className="container mx-auto px-4 py-4 flex items-center justify-between">
				<Link to="/" className="text-2xl font-bold">
					Logo
				</Link>

				{/* desktop menu */}
				<nav className="hidden md:flex space-x-8 text-sm">
					{menuItems.slice(1).map(({ path, label }) => (
						<Link
							key={path}
							to={path}
							className={`hover:underline ${
								isActive(path) ? 'text-blue-600 font-medium' : ''
							}`}
						>
							{label}
						</Link>
					))}
				</nav>

				<div className="hidden md:flex space-x-4">
					<button className="px-4 py-2 border rounded">Zaloguj</button>
					<button className="px-4 py-2 bg-black text-white rounded">
						Zarejestruj
					</button>
				</div>

				{/* mobile burger */}
				<button
					className="md:hidden"
					onClick={() => setMobileOpen(!mobileOpen)}
				>
					<svg className="w-6 h-6" fill="currentColor">
						{mobileOpen ? (
							<path d="M6 18L18 6M6 6l12 12" />
						) : (
							<path d="M4 6h16M4 12h16M4 18h16" />
						)}
					</svg>
				</button>
			</div>

			{/* mobile menu */}
			{mobileOpen && (
				<div className="md:hidden bg-white border-t">
					<nav className="px-4 py-6 space-y-4">
						{menuItems.map(({ path, label }) => (
							<Link
								key={path}
								to={path}
								className={`block text-base hover:underline ${
									isActive(path) ? 'text-blue-600 font-medium' : ''
								}`}
								onClick={() => setMobileOpen(false)}
							>
								{label}
							</Link>
						))}
						<button className="w-full px-4 py-2 border rounded mb-2">
							Zaloguj
						</button>
						<button className="w-full px-4 py-2 bg-black text-white rounded">
							Zarejestruj
						</button>
					</nav>
				</div>
			)}
		</header>
	);
}
