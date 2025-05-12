import { Home } from '@/pages/Home';
import { Offers } from '@/pages/Offers';
import { Posts } from '@/pages/Posts';
import { Procedure } from '@/pages/Procedure';
import { Product } from '@/pages/Product';

import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/proces-zakupu" element={<Procedure />} />
			<Route path="/oferta" element={<Offers />} />
			<Route path="/product" element={<Product />} />
			<Route path="/posts" element={<Posts />} />
		</Routes>
	);
}

export default App;
