import Audio from "@/componets/Audio";
import { useContext } from "react";
import IsReadyContext from "../contexts/IsReadyContext";
import { Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import Typist from "react-typist";
import { email } from "@/config";

const Hero = () => {
  return (
    <div id="hero" className="container section d-flex">
      <div
        className="row mx-0 my-5 my-lg-auto"
        style={{
          width: "100%",
        }}
      >
        <Col className="my-5" xs="12" md="6" lg="7">
          <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
            <h1>Hi, my name is</h1>

            <h2 className="big-heading mb-4">Tomás Vasquez</h2>

            {/* <h3 className="big-heading">I am a web builder</h3> */}
            <Typist>
              <span>I am a </span>
              <span>web developer</span>
              <Typist.Backspace count={13} delay={1000} />
              <span>backend developer</span>
              <Typist.Backspace count={17} delay={500} />
              <span>fullstack developer</span>
            </Typist>
            <p
              className="mb-4 animate__animated animate__fadeInUp"
              style={{ imationDelay: "0.7s" }}
            >
              I'm a software engineer based in Bolivia specializing in building
              web sites and applications and everything in between.
            </p>
            <p
              className="mb-4 animate__animated animate__fadeInUp"
              style={{ imationDelay: "0.8s" }}
            >
              I'm a software engineer based in Bolivia specializing in building
              web sites and applications and everything in between.
            </p>

            <dir className="d-flex p-0">
              <a
                className="btn btn-primary email-link mt-4 mx-auto mx-md-0 animate__animated animate__fadeInUp"
                style={{ imationDelay: "0.7s" }}
                href={`mailto:${email}`}
              >
                Get In Touch
              </a>
            </dir>
          </ScrollAnimation>
        </Col>
        <Col className="d-flex" xs="12" md="6" lg="5">
          <Audio />
        </Col>
      </div>
    </div>
  );
};

export default Hero;
