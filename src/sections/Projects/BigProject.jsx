import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Icons from "@/componets/Icons";

export default class BigProject extends Component {
  render() {
    const { index, project } = this.props;

    return (
      <ScrollAnimation
        animateOnce
        key={index}
        animateIn={
          index % 2 === 0 ? "animate__fadeInRight" : "animate__fadeInLeft"
        }
      >
        <div
          className={
            "project rounded " + (index % 2 === 0 ? "project-rtl" : "")
          }
        >
          <div className="project-content shadow">
            <div className="project-details">
              <h4 className="project-title">{project.title}</h4>
              <div className="project-description">
                <p>{project.details}</p>
                <ul>
                  {project.techList.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>

              <a
                target={project.externalLink}
                href={project.externalLink}
                className="btn btn-primary mt-4 py-1 px-4 me-2"
              >
                preview <Icons icon="external" />
              </a>
              <a
                target={project.codeLink}
                href={project.codeLink}
                className="btn btn-primary mt-4 py-1 px-4"
              >
                code <Icons icon="github" />
              </a>
            </div>
          </div>

          <div className="project-img shadow">
            <img className="img-fluid " src="/featured/capture.jpg" alt="" />
          </div>
        </div>
      </ScrollAnimation>
    );
  }
}
