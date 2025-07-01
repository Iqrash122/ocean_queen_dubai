import ContactForm from "../components/home/ContactForm";
import Decks from "../components/home/Decks";
import Dinners from "../components/home/Dinners";
import Entertainment from "../components/home/Entertainment";
import Experience from "../components/home/experience";
import HeroSection from "../components/home/HeroSection";
import Map from "../components/home/Map";
import Service from "../components/home/Service";
import SliderText from "../components/home/SliderText";
import Testimonials from "../components/home/Testimonials";
import VideoSection from "../components/home/VideoSection";
import Yacht from "../components/home/yacht";
import About from "../components/home/homrAbout";
import Menu from "../components/home/Menu";

export default function Home() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>

      <section id="yacht">
        <Yacht />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="slider-text">
        <SliderText />
      </section>

      <section id="video">
        <VideoSection />
      </section>

      <section id="dinners">
        <Dinners />
      </section>

      <section id="entertainment">
        <Entertainment />
      </section>

      <section id="about">
        <About />
      </section>
   

      <section id="decks">
        <Decks />
      </section>
      
      <section id="service">
        <Service />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>


    
      <section id="menu">
        <Menu />
      </section>
      <section id="destination">
        <Map />
      </section>


      <section id="contact">
        <ContactForm />
      </section>
    </>
  );
}
