import { ThemeProvider } from '@/components/theme-provider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './styles/globals.css';

AOS.init({
	duration: 1000,
	once: true,
	easing: 'ease-in-out',
	offset: 100,
});

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider defaultTheme="system" storageKey="detroit-cars-theme">
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>,
);
