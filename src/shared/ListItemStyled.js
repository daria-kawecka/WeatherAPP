import ListGroup from "react-bootstrap/ListGroup";
import styled from "styled-components";

const ListItemStyled = styled(ListGroup.Item)`
  p {
    margin-bottom: 0.3rem;
  }
  .icon-main {
    font-size: 2.9rem;
  }
  .icons {
    font-size: 2rem;
    height: 90%;
  }
  .icon-compass {
    font-size: 1.2rem;
    height: 90%;
    margin-right: 5px;
  }
  .item__date {
    font-size: 0.7rem;
    text-align: left;
    margin-bottom: 1px;
  }
  .item__icon {
    width: 100%;
    margin-bottom: 0px;
  }
  .temperature {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &--day {
      width: 10%;
      margin-bottom: 0.2rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    }
  }
`;

export default ListItemStyled;
