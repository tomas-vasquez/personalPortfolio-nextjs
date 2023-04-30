import React, { Component } from "react";
import { email, socialMedia } from "../config";
import Icons from "./Icons";

export default class Aside extends Component {
  render() {
    return (
      <>
        <div
          className="aside aside-left animate__animated animate__fadeInLeft"
          style={{ imationDelay: "0.7s" }}
        >
          <div className="wrapper">
            {socialMedia &&
              socialMedia.map(({ url, name }, i) => (
                <li key={i}>
                  <a href={url} aria-label={name} target="_blank">
                    <Icons icon={name} />
                  </a>
                </li>
              ))}
          </div>
        </div>
        <div
          className="aside  aside-right animate__animated animate__fadeInRight"
          style={{ imationDelay: "0.7s" }}
        >
          <div className="wrapper">
            <a href={`mailto:${email}`} target="_blank">
              {email}
            </a>
          </div>
        </div>
      </>
    );
  }
}
