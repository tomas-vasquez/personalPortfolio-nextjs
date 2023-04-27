import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div id="about" className="section d-flex">
        <div className="container-lg my-auto">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-8 p-4 ">
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
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 p-4 d-flex">
              <div className="my-auto">
                <img
                  className="img"
                  style={{ width: "100%" }}
                  src="https://github.com/tomas-vasquez.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
