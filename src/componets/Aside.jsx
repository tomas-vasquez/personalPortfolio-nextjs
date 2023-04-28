import React, { Component } from "react";
import { email, socialMedia } from "../config";
import Icons from "./Icons";

export default class Aside extends Component {
  render() {
    return (
      <>
        <div className="aside aside-left">
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
        <div className="aside  aside-right">
          <div className="wrapper">
            <a href={`mailto:${email}`} target="_blank">
              <Icons icon="gmail" className="fa-rotate-90" /> {email}
            </a>
          </div>
        </div>
      </>
    );
  }
}
