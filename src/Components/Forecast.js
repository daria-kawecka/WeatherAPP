import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

import ForecastElement from "./ForecastElement";
import UnixConverter from "./date/UnixConverter";
import styled from "styled-components";

const StyledList = styled(ListGroup)`
  & .list-group-item {
    display: flex;
  }
`;

const Forecast = ({ data }) => {
  console.log(data[0]);
  return (
    <Container>
      <StyledList
        className="forecast"
        variant="flush"
        style={{ height: "100%", backgroundColor: "black" }}
      >
        {data.map((element, index) => (
          <ForecastElement data={element} key={index} />
        ))}
      </StyledList>
    </Container>
  );
};

export default Forecast;
