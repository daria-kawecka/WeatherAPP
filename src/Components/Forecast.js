import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ForecastElement from "./ForecastElement";
import UnixConverter from "./date/UnixConverter";
const Forecast = ({ data }) => {
  console.log(UnixConverter(data[1].dt));
  return (
    <ListGroup
      className="forecast"
      variant="flush"
      style={{ height: "100%", backgroundColor: "black" }}
    >
      {data.slice(1, 8).map((element, index) => (
        <ForecastElement data={element} key={index} />
      ))}
    </ListGroup>
  );
};

export default Forecast;
