import Icons from "@/componets/Icons";
import { skills } from "@/config";
import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Col } from "reactstrap";

export default class About extends Component {
  render() {
    return (
      <div id="about" className="container section d-flex">
        <div
          className="row mx-0 my-lg-auto"
          style={{
            width: "100%",
          }}
        >
          <Col className="my-5" xs="12" md="6" lg="7">
            <ScrollAnimation animateIn="animate__fadeInUp">
              <h2 className="numbered-heading">About Me</h2>

              <div>
                <p>
                  Began my academic training at the university studying
                  Informatics Engineering and later studying self-taught in
                  online education platforms, first in EDteam and then in
                  Platzi.
                </p>
                <p>
                  I am currently looking to insert working in the technology
                  area. I am very self-taught and I constantly look for new
                  challenges that challenge my abilities and help me grow.
                </p>

                <p>
                  Here are a few technologies I've been working with recently:
                </p>

                <ul className="skills-list">
                  {skills.map((skill, index) => (
                    <ScrollAnimation
                      animateIn="animate__fadeInUp"
                      delay={index * 200}
                    >
                      <li key={index}>
                        <Icons
                          icon={skill}
                          style={{
                            fontSize: "60px",
                            color: "var(--colorText)",
                          }}
                        />
                      </li>
                    </ScrollAnimation>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          </Col>
          <Col className="d-flex" xs="12" md="6" lg="5">
            <div className="my-auto p-5">
              <ScrollAnimation animateIn="animate__fadeInUp">
                <img
                  className="img"
                  style={{ width: "100%" }}
                  src="https://github.com/tomas-vasquez.png"
                  alt=""
                />
              </ScrollAnimation>
            </div>
          </Col>
        </div>
      </div>
    );
  }
}
