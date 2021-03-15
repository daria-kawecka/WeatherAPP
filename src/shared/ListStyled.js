import styled from "styled-components";
import ListGroup from "react-bootstrap/ListGroup";

const ListStyled = styled(ListGroup)`
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
      line-height: 1;
      font-size: 0.9rem;
    }
    .page-item.active .page-link {
      color: #ffd06e;
      background-color: #222d40;
    }
  }
`;

export default ListStyled;
