import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import BookingForm from './components/BookingForm';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import StickyCallButton from './components/StickyCallButton';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BookingForm />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <StickyCallButton />
    </div>
  );
}

export default App;
