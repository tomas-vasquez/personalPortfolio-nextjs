import { Container, Row, Col } from "reactstrap";

const Hero = () => {
  return (
    <div id="hero">
      <Container
        className="d-flex mt-5 pt-5 my-md-0 "
        style={{
          minHeight: "100vh",
        }}
      >
        <Row
          className="d-flex my-auto"
          style={{
            width: "100%",
          }}
        >
          <Col xs="12" md="6" lg="7" className="my-auto">
            <h1>Hi, my name is</h1>
            <h2 className="big-heading">Tomás Vasquez</h2>
            <h3 className="big-heading">I am a web builder</h3>
            <p className="mb-4">
              I'm a software engineer based in Bolivia specializing in building
              web sites and applications and everything in between.
            </p>
            <a className="btn btn-primary email-link">Get In Touch</a>
          </Col>
          <Col xs="12" md="6" lg="5" className="my-auto">
            {<div style={{ transitionDelay: `100ms` }}></div>}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
