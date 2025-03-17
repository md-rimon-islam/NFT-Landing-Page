import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Shop from "@/components/Shop";
import Contact_Us from "@/components/Contact_Us";

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="shop">
        <Shop />
      </section>
      <section id="contact">
        <Contact_Us />
      </section>
    </>
  );
}