import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import News from "@/components/News";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <Services />
        <About />
        <Projects />
        <WhyChooseUs />
        <CTABanner />
        <Testimonials />
        <News />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
