import Audio from "@/componets/Audio";
import { useContext } from "react";
import IsReadyContext from "../contexts/IsReadyContext";
import { Col } from "reactstrap";

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
          <h1>Hi, my name is</h1>
          <h2 className="big-heading">Tomás Vasquez</h2>
          {/* <h3 className="big-heading">I am a web builder</h3> */}
          <p className="mb-4">
            I'm a software engineer based in Bolivia specializing in building
            web sites and applications and everything in between.
          </p>
          <p className="mb-4">
            I'm a software engineer based in Bolivia specializing in building
            web sites and applications and everything in between.
          </p>
          <dir className="d-flex p-0">
            <a className="btn btn-primary email-link mt-4 mx-auto mx-md-0">
              Get In Touch
            </a>
          </dir>
        </Col>
        <Col className="d-flex" xs="12" md="6" lg="5">
          <Audio />
        </Col>
      </div>
    </div>
  );
};

export default Hero;
