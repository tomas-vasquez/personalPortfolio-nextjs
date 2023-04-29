import Icons from "@/componets/Icons";
import { email } from "@/config";
import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Container, Row } from "reactstrap";

export default class Contact extends Component {
  render() {
    return (
      <>
        <div id="contact" className="container section">
          <div className="row my-auto">
            <div className="my-auto pt-5  text-center ">
              <ScrollAnimation className="player" animateIn="animate__fadeInUp">
                <h2 className="numbered-heading overline">Contact</h2>

                <h3 className="mt-4 mb-3">What’s Next?</h3>

                <p>
                  I am currently looking for new opportunities, my social
                  networks are always open. Whether you have a question or just
                  want to say hi, I will do my best to answer you!
                </p>

                <a
                  className="btn btn-primary my-4 mx-auto px-5"
                  href={`mailto:${email}`}
                >
                  Say Hello
                </a>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </>
    );
  }
}
