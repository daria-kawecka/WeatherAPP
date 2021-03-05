import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import styled from "styled-components";
//icons:
import { BsFillCloudFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const AppBarStyles = styled.div`
  .navbar {
    background: #222d40;
  }
  .navbar-brand {
    color: #aaaaaa;
  }
  .navbar-brand:hover {
    color: #fafafa;
  }
  .badge {
    background-color: #ffd06e;
    color: #222d40;
    font-weight: 800;
  }
  .appIcon {
    font-size: 22px;
    color: #0069d9;
  }
`;

export const AppBar = () => (
  <AppBarStyles>
    <Navbar expand="lg" className="shadow-lg">
      <Navbar.Brand href="/">
        <IconContext.Provider value={{ className: "appIcon" }}>
          <BsFillCloudFill />
        </IconContext.Provider>
        Weather{" "}
        <Badge pill variant="info">
          APP
        </Badge>{" "}
      </Navbar.Brand>
    </Navbar>
  </AppBarStyles>
);
