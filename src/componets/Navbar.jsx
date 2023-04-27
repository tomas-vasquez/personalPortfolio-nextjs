import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Collapse,
  Navbar as RNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import IconLoader from "./IconLoader";

import useScrollDirection from "@/hooks/useScrollDirection";
import anime from "animejs";

const myNavbar = () => {
  const scrollDirection = useScrollDirection("down");
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolledToTop(window.pageYOffset < 50);
      setCollapsed(true);
    });
  }, []);

  return (
    <RNavbar
      dark
      expand="sm"
      className={
        "navbar px-0 py-lg-0  px-lg-5 py-0" +
        (scrollDirection === "up" && !scrolledToTop ? " showed-navbar" : "") +
        (scrollDirection === "down" && !scrolledToTop ? " hidden-navbar" : "")
      }
    >
      {/* <StyledNav> */}
      <NavbarBrand href="/">
        <div id="brand-logo">
          <div className="logo-wrapper">
            <IconLoader />
          </div>
        </div>
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="me-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar className="ms-auto py-2 py-lg-0">
          <NavItem>
            <Link href="domain" className="nav-item nav-link">
              About
            </Link>
          </NavItem>
          <NavItem>
            <Link href="domain.html" className="nav-item nav-link">
              Experience
            </Link>
          </NavItem>
          <NavItem>
            <Link href="contact.html" className="nav-item nav-link">
              Work
            </Link>
          </NavItem>
          <NavItem>
            <Link href="contact.html" className="nav-item nav-link">
              Contact
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
      {/* </StyledNav> */}
    </RNavbar>
  );
};

export default myNavbar;
