import BlogFAQ from '@/components/BlogFAQ';
import BlogHero from '@/components/BlogHero';
import FeaturedPosts from '@/components/FeaturedPosts';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LatestPosts from '@/components/LatestPosts';

export const Blog = () => {
	return (
		<>
			<Header />
			<main>
				<BlogHero />
				<FeaturedPosts />
				<LatestPosts />
				<BlogFAQ />
			</main>
			<Footer />
		</>
	);
};
