import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import AppBarStyled from "../shared/AppBarStyled";
//icons:
import { BsFillCloudFill } from "react-icons/bs";
import { IconContext } from "react-icons";

export const AppBar = () => (
  <AppBarStyled>
    <Navbar expand="lg" className="shadow-lg">
      <Navbar.Brand>
        <IconContext.Provider value={{ className: "appIcon" }}>
          <BsFillCloudFill />
        </IconContext.Provider>
        Weather
        <Badge pill variant="info">
          APP
        </Badge>
      </Navbar.Brand>
    </Navbar>
  </AppBarStyled>
);
