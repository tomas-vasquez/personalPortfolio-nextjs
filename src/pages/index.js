import Loader from "@/componets/Loader";
import Navbar from "../componets/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import { Container } from "reactstrap";
import Aside from "@/componets/Aside";

export default function Home() {
  return (
    <>
      <main>
        <Loader />
        <Navbar />
        <Aside />
        <Container sm>
          <Hero />
          <About />
          <Contact />
        </Container>
      </main>
    </>
  );
}
