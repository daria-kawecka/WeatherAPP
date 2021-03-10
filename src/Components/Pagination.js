import React, { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationComp = ({ paginate, currentPage }) => {
  const pageNumbers = [1, 2];

  return (
    <Pagination>
      {pageNumbers.map((number) => (
        <Pagination.Item
          active={number === currentPage}
          onClick={() => paginate(number)}
        >
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default PaginationComp;
