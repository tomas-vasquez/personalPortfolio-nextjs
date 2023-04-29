import Icons from "@/componets/Icons";
import React, { Component } from "react";
import { Container, Row } from "reactstrap";

export default class Contact extends Component {
  render() {
    return (
      <>
        <div id="contact" className="container section">
          <div className="row my-auto">
            <div className="my-auto pt-5  text-center ">
              <h2 className="numbered-heading overline">Contact</h2>

              <h3 className="mt-4 mb-3">What’s Next?</h3>

              <p>
                I am currently looking for new opportunities, my social networks
                are always open. Whether you have a question or just want to say
                hi, I will do my best to answer you!
              </p>

              <a className="btn btn-primary my-4" href={`mailto:${"/"}`}>
                Say Hello
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
