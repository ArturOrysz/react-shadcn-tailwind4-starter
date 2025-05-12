import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const Posts = () => {
	return (
		<>
			<Header />
			<main className="container mx-auto px-4 py-8">
				<div className="max-w-7xl mx-auto">
					<h1 className="text-4xl font-bold mb-8">Aktualności</h1>

					{/* Grid z postami */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{/* Przykładowy post */}
						<article className="bg-white rounded-lg shadow-md overflow-hidden">
							<img
								src="https://via.placeholder.com/400x250"
								alt="Post thumbnail"
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<span className="text-blue-600 text-sm font-medium">
									Nowości
								</span>
								<h2 className="text-xl font-bold mt-2 mb-3">Tytuł posta</h2>
								<p className="text-gray-600 mb-4">
									Krótki opis posta, który wprowadza czytelnika w temat...
								</p>
								<div className="flex justify-between items-center">
									<span className="text-sm text-gray-500">12 maja 2024</span>
									<button className="text-blue-600 hover:underline">
										Czytaj więcej
									</button>
								</div>
							</div>
						</article>

						{/* Tutaj można dodać więcej postów */}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};
