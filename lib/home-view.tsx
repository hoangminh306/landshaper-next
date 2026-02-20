import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
// import Services from "@/components/Services";
// import About from "@/components/About";
// import Projects from "@/components/Projects";
import { FeaturedProducts, OtherProducts } from "@/components/HomeProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
// import CTABanner from "@/components/CTABanner";
import News from "@/components/News";
// import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const HomeView = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        {/* <Services /> */}
        {/* <About /> */}
        {/* <Projects /> */}
        <FeaturedProducts />
        <OtherProducts />
        <WhyChooseUs />
        {/* <CTABanner /> */}
        <Testimonials />
        <News />
        {/* <ContactForm /> */}
      </main>
      <Footer />
    </div>
  );
};

export default HomeView;
