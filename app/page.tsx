import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar/>
        <Hero/>
        <Projects/>
        <AboutMe/>
      </div>
    </main>
  );
}
