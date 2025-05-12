import { ThemeProvider } from '@/components/theme-provider';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/global.css'; // Dodaj ten import
import './styles/globals.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<App />
		</ThemeProvider>
	</StrictMode>,
);
