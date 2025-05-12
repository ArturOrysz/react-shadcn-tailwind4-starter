import Header from '../components/Header';
import ProductGallery from '../components/ProductGallery';
import ProductHeader from '../components/ProductHeader';
import ProductVariants from '../components/ProductVariants';
import ProductDetails from '../components/ProductDetails';
import ProductOverview from '../components/ProductOverview';
import ProductWhy from '../components/ProductWhy';
import ProductTestimonial from '../components/ProductTestimonial';
import ProductCTA from '../components/ProductCTA';
import Footer from '../components/Footer';

export default function Product() {
  return (
    <>
      <Header />
      <main>
        <ProductGallery />
        <ProductHeader />
        <ProductVariants />
        <ProductDetails />
        <ProductOverview />
        <ProductWhy />
        <ProductTestimonial />
        <ProductCTA />
      </main>
      <Footer />
    </>
  );
}
