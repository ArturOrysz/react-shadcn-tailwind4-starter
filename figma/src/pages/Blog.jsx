import Header from '../components/Header';
import BlogHero from '../components/BlogHero';
import FeaturedPosts from '../components/FeaturedPosts';
import LatestPosts from '../components/LatestPosts';
import BlogFAQ from '../components/BlogFAQ';
import Footer from '../components/Footer';

export default function Blog() {
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
}
