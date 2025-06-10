import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import AIChatWidget from '@/components/AIChatWidget';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-poppins" style={{ background: '#e0e1e3' }}>
      <Header />
      <main >
        <HeroSection />
        <ActivitiesSection />
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
};

export default Index;
