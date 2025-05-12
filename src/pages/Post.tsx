import Header from '../components/Header';
import PostHeader from '../components/PostHeader';
import PostHero from '../components/PostHero';
import PostTOC from '../components/PostTOC';
import PostContent from '../components/PostContent';
import PostTestimonial from '../components/PostTestimonial';
import SocialJoin from '../components/SocialJoin';
import NewsletterCTA from '../components/NewsletterCTA';
import Footer from '../components/Footer';

export default function Post() {
  return (
    <>
      <Header />
      <main>
        <PostHeader />
        <PostHero />
        <PostTOC />
        <PostContent />
        <PostTestimonial />
        <SocialJoin />
        <NewsletterCTA />
      </main>
      <Footer />
    </>
  );
}
