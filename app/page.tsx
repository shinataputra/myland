import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portofolio from "./components/Portofolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";



export const metadata = {
  title: "MyLand - Shinata Putra",
};


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portofolio />
      <Contact />
      <Footer />
    </main>
  );
}
