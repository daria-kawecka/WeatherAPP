import styled from "styled-components";
import ListGroup from "react-bootstrap/ListGroup";
import { device } from "./device";

const ListStyled = styled(ListGroup)`
  padding: 0rem 1rem;
  height: 100%;

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
  @media ${device.laptop} {
    .pagination {
      & .page-link {
        line-height: 0.8;
        font-size: 0.7rem;
      }
    }
  }
  @media ${device.tabletL} {
    height: 100%;
    .pagination {
      .page-link {
        line-height: 1;
        font-size: 1rem;
      }
    }
  }
  @media ${device.mobileLand} {
    height: 90%;
    .pagination {
      .page-link {
        line-height: 0.3;
        font-size: 0.6rem;
        padding: 0.4rem 0.5rem;
      }
    }
  }
  @media ${device.mobileL} {
    padding: 0;
    height: 95%;
    .pagination {
      .page-link {
        line-height: 0.5;
        font-size: 0.6rem;
      }
    }
  }
  @media ${device.mobileM} {
    .pagination {
      .page-link {
        line-height: 0.2;
        font-size: 0.7rem;
      }
    }
  }
`;

export default ListStyled;
