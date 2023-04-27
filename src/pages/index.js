import Loader from "@/componets/Loader";
import Navbar from "../componets/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <main>
        <Loader />
        <Navbar />
        <Hero />
        <About />
        <Contact />
      </main>
    </>
  );
}
