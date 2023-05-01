import Icons from "@/componets/Icons";
import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const getLanguageColor = function (language) {
      switch (language) {
        case "CSS":
          return "#563d7c";

        case "SCSS":
          return "#c76494";

        case "HTML":
          return "#dd4b25";

        case "JavaScript":
          return "#f1e05a";

        case "PHP":
          return "#4f5d95";

        default:
          return "#586069";
      }
    };
    const { project } = this.props;
    return (
      <a
        className="card p-0 mb-3 shadow"
        href={project.url}
        target={project.name}
      >
        <div>
          <div className="card-header mb-0 d-flex">
            <Icons
              icon="github"
              style={{
                fontSize: "40px",
                color: "var(--green)",
              }}
              className="me-2"
            />

            <h4>{project.name}</h4>
          </div>

          <div className="card-body">
            <div className="project-details">
              <p>{project.description}</p>
            </div>
          </div>

          <div className="card-footer">
            <ul className="">
              {project.languages.nodes.map((language, index) => (
                <li key={index} style={{ listStyle: "none" }}>
                  <small className="mr-2">
                    {/* <small style={{ color: getLanguageColor(language.name) }}>
                      <Icons icon="dot" />{" "}
                    </small> */}
                    {language.name}
                  </small>
                </li>
              ))}
            </ul>
            {/* <a href={project.externalLink} className="me-3">
            <Icons icon="external" />
          </a>
          <a href={project.codeLink} className="me-3">
            <Icons icon="github" />
          </a> */}
          </div>
        </div>
      </a>
    );
  }
}
