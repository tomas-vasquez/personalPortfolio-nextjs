import { useState } from "react";

import { Col, Row } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import BigProject from "./BigProject";
import Card from "./Card";

import { projects } from "@/config";
import * as gihtubData from "../../../githubData.json";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const repos = gihtubData.data.user.repositories.nodes;

  const firstSix = repos.slice(0, 9);
  const reposToShow = showMore ? repos : firstSix;

  return (
    <div id="projects" className="container section">
      <div
        className="row mx-0"
        style={{
          width: "100%",
        }}
      >
        <Col className="mt-5" xs="12">
          <h2>Projects</h2>

          <div className="project-container mb-3">
            {projects.map((project, index) => (
              <BigProject project={project} index={index} key={index} />
            ))}
          </div>
        </Col>
        <Col className="mb-5" xs="12">
          <div className="mt-4 text-center">
            <h3 className="mb-5">Other Noteworthy Projects</h3>
          </div>
          <Row style={{ transition: "1s" }}>
            {reposToShow.map((repo, index) => (
              <Col key={index} className="p-2" xs="12" md="6" lg="4">
                <ScrollAnimation
                  className="h-100"
                  animateOnce
                  delay={100 * index}
                  animateIn="animate__fadeInUp"
                >
                  <Card project={repo} />
                </ScrollAnimation>
              </Col>
            ))}
          </Row>
          <div className="mt-4 text-center">
            <button
              className="btn btn-primary"
              onClick={() => setShowMore(!showMore)}
            >
              Show {showMore ? "Less" : "More"}
            </button>
          </div>
        </Col>
      </div>
    </div>
  );
};

export default Projects;
