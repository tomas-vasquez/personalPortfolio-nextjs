import Icons from "@/componets/Icons";
import { projects } from "@/config";
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
          <div class="project-container mb-5">
            {projects.map((project, index) => (
              <div
                key={index}
                class={"project " + (index % 2 === 0 ? "project-rtl" : "")}
              >
                <div class="project-content">
                  <div class="project-details">
                    <h4 class="project-title">{project.title}</h4>
                    <p>
                      {project.details}
                      <ul>
                        {project.techList.map((tech, index) => (
                          <li key={index}>{tech}</li>
                        ))}
                      </ul>
                    </p>

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

                <div class="project-img">
                  <img
                    className="img-fluid "
                    src="/featured/capture.jpg"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </Col>
      </div>
    </div>
  );
};

export default Projects;
