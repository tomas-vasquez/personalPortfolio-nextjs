import Icons from "@/componets/Icons";
import { projects } from "@/config";
import ScrollAnimation from "react-animate-on-scroll";
import { Col } from "reactstrap";

const Projects = () => {
  return (
    <div id="projects" className="container section d-flex">
      <div
        className="row mx-0 my-5 my-lg-auto"
        style={{
          width: "100%",
        }}
      >
        <Col className="my-5" xs="12">
          <h2>Projects</h2>
          <div className="project-container mb-5">
            {projects.map((project, index) => (
              <ScrollAnimation
                animateOnce
                key={index}
                animateIn={
                  index % 2 === 0
                    ? "animate__fadeInRight"
                    : "animate__fadeInLeft"
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
                        href={project.externalLink}
                        className="btn btn-primary mt-4 py-1 px-4 me-2"
                      >
                        preview <Icons icon="external" />
                      </a>
                      <a
                        href={project.codeLink}
                        className="btn btn-primary mt-4 py-1 px-4"
                      >
                        code <Icons icon="github" />
                      </a>
                    </div>
                  </div>

                  <div className="project-img shadow">
                    <img
                      className="img-fluid "
                      src="/featured/capture.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </Col>
      </div>
    </div>
  );
};

export default Projects;
