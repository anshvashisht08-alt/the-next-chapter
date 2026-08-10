import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Groups from "@/components/Groups";
import Memories from "@/components/Memories";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Groups />
      <Memories />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}