import Loader from "@/componets/Loader";
import Navbar from "../componets/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Aside from "@/componets/Aside";
import Footer from "@/sections/Footer";
import { useContext } from "react";
import IsReadyContext from "@/contexts/IsReadyContext";
import Projects from "@/sections/Projects";

export default function Home() {
  const { isReady } = useContext(IsReadyContext);

  return (
    <>
      <main>
        <Loader />
        {isReady ? (
          <>
            <Navbar />
            <Aside />
            <div>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </div>
            <Footer />
          </>
        ) : (
          <></>
        )}
      </main>
    </>
  );
}
