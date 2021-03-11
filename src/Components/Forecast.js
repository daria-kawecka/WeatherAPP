import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import styled from "styled-components";

import ForecastElement from "./ForecastElement";
import Pagination from "./Pagination";

const StyledList = styled(ListGroup)`
  padding: 0rem 1rem;
  height: 100%;
  & .list-group-item {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: rgba(1, 24, 68, 0.15);
    color: #e4e2e2;
    padding: 0.5rem 1rem;
    height: 100%;
    & .item__date {
      color: #c4c4c3;
      width: 100%;
    }
  }
  .pagination {
    margin: 7px auto;
    text-align: center;

    & .page-link {
      background-color: #c4c4c3;
      border: none;
      color: #222d40;
      line-height: 0.8;
      font-size: 0.9rem;
    }
    .page-item.active .page-link {
      color: #ffd06e;
      background-color: #222d40;
    }
  }
`;

const Forecast = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1); //to set "active page" status
  const [elementsPerPage, setElementsPerPage] = useState(4);

  const indexOfLastElement = currentPage * elementsPerPage; //last element on page
  const indexOfFirstElement = indexOfLastElement - elementsPerPage; //first element on page
  const currentPosts = data.slice(indexOfFirstElement, indexOfLastElement);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <StyledList className="forecast" variant="flush">
      {currentPosts.map((element, index) => (
        <ForecastElement data={element} key={index} />
      ))}
      <Pagination currentPage={currentPage} paginate={paginate}></Pagination>
    </StyledList>
  );
};

export default Forecast;
