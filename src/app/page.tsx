import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Shows from "@/components/landing/shows";
import Mixes from "@/components/landing/mixes";
import About from "@/components/landing/about";
import Connect from "@/components/landing/connect";
import Contact from "@/components/landing/contact";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Shows />
        <Mixes />
        <About />
        <Connect />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
