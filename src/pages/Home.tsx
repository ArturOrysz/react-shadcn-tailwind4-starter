import About from '@/components/About';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';

export const Home = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Services />
				<About />
				<Testimonials />
				<ContactCTA />
			</main>
			<Footer />
		</>
	);
};
