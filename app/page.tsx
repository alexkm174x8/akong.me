import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-x-hidden">
      <div className="max-w-7xl w-full">
        <Navbar/>
        <Hero/>
        <Projects/>
        <AboutMe/>
        <Footer/>
      </div>
    </main>
  );
}
