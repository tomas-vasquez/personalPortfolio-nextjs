import Audio from "@/componets/Audio";
import { useContext } from "react";
import IsReadyContext from "../contexts/IsReadyContext";
import { Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

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
          <ScrollAnimation animateIn="animate__fadeInUp">
            <h1>Hi, my name is</h1>
          </ScrollAnimation>

          <ScrollAnimation animateIn="animate__fadeInUp">
            <h2 className="big-heading">Tomás Vasquez</h2>
          </ScrollAnimation>

          {/* <h3 className="big-heading">I am a web builder</h3> */}
          <ScrollAnimation animateIn="animate__fadeInUp">
            <p
              className="mb-4 animate__animated animate__fadeInUp"
              style={{ "animation-delay": "0.7s" }}
            >
              I'm a software engineer based in Bolivia specializing in building
              web sites and applications and everything in between.
            </p>
            <p
              className="mb-4 animate__animated animate__fadeInUp"
              style={{ "animation-delay": "0.8s" }}
            >
              I'm a software engineer based in Bolivia specializing in building
              web sites and applications and everything in between.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="animate__fadeInUp">
            <dir className="d-flex p-0">
              <a
                className="btn btn-primary email-link mt-4 mx-auto mx-md-0 animate__animated animate__fadeInUp"
                style={{ "animation-delay": "0.7s" }}
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
