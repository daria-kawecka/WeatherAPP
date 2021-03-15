import React, { useState } from "react";

import ListStyled from "../shared/ListStyled";
import ForecastElement from "./ForecastElement";
import Pagination from "./Pagination";

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
    <ListStyled className="forecast" variant="flush">
      {currentPosts.map((element, index) => (
        <ForecastElement data={element} key={index} />
      ))}
      <Pagination currentPage={currentPage} paginate={paginate}></Pagination>
    </ListStyled>
  );
};

export default Forecast;
