import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPaperPlane,
  faStar,
  faTimes,
  faArrowDown,
  faGlobe,
  faUser,
  faRocket,
  faArchive,
  faMapPin,
  faCircle,
  faFile,
  faDownload,
  faBars,
  faArrowRight,
  faFilePdf,
  faForward,
  faBackward,
  faVolumeMute,
  faVolumeUp,
  faVolumeDown,
  faPlay,
  faPause,
  faHeart,
  faFolder,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
  faReact,
  faAngular,
  faVuejs,
  faBootstrap,
  faJsSquare,
  faNodeJs,
  faWhatsapp,
  faFirefoxBrowser,
  faDocker,
  faHtml5,
  faMonero,
} from "@fortawesome/free-brands-svg-icons";

import { GiMongolia } from "react-icons/gi";
import Mongo from "./mongodb-svgrepo-com.svg";
import Mysql from "./mariadb-svgrepo-com.svg";
import Next from "./nextjs-fill-svgrepo-com.svg";
import Astro from "./astro-logo-icon.svg";
import Firebase from "./firebase-svgrepo-com.svg";

import Image from "next/image";
import { InMemoryCache } from "@apollo/client";

const getIcon = (icon) => {
  switch (icon) {
    case "pdf":
      return faFilePdf;

    case "arrowRight":
      return faArrowRight;

    case "menu":
      return faBars;

    case "download":
      return faDownload;

    case "file":
      return faFile;

    case "dot":
      return faCircle;

    case "globe":
      return faFirefoxBrowser;

    case "vercel":
      return faGlobe;

    case "pointer":
      return faMapPin;

    // case "briefcase":
    //   return faBriefcase;

    case "archive":
      return faArchive;

    case "rocket":
      return faRocket;
    case "user":
      return faUser;

    case "hear":
      return faHeart;

    case "folder":
      return faFolder;

    case "arrowDown":
      return faArrowDown;

    case "send":
      return faPaperPlane;

    case "gmail":
      return faEnvelope;

    case "wathsapp":
      return faWhatsapp;

    case "external":
      return faExternalLinkAlt;

    case "star":
      return faStar;

    case "github":
      return faGithub;

    case "facebook":
      return faFacebook;

    case "twitter":
      return faTwitter;

    case "instagram":
      return faInstagram;

    case "youtube":
      return faYoutube;

    case "linkedin":
      return faLinkedin;

    case "node":
      return faNodeJs;

    case "javascript":
      return faJsSquare;

    case "react":
      return faReact;

    case "angular":
      return faAngular;

    case "vuejs":
      return faVuejs;

    case "bootstrap":
      return faBootstrap;

    case "html5":
      return faHtml5;

    case "docker":
      return faDocker;

    case "next":
      return faForward;

    case "prev":
      return faBackward;

    case "play":
      return faPlay;

    case "pause":
      return faPause;

    case "mute":
      return faVolumeMute;

    case "volumeUp":
      return faVolumeUp;

    case "volumeDown":
      return faVolumeDown;

    default:
      return null;
  }
};

export default (props) => {
  const faIcon = getIcon(props.icon);
  if (faIcon) {
    return <FontAwesomeIcon {...props} icon={faIcon} />;
  }

  var icon = null;

  switch (props.icon) {
    case "mongo":
      icon = Mongo;
      break;

    case "mysql":
      icon = Mysql;
      break;

    case "nextjs":
      icon = Next;
      break;

    case "astro":
      icon = Astro;
      break;

    case "firebase":
      icon = Firebase;
      break;
  }

  if (icon) {
    return (
      <Image
        style={{
          width: props.style.fontSize,
          height: props.style.fontSize,
        }}
        src={icon}
      />
    );
  } else {
    return <FontAwesomeIcon {...props} icon={faTimes} />;
  }
};
