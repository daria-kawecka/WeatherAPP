import ListGroup from "react-bootstrap/ListGroup";
import styled from "styled-components";
import { device } from "./device";

const ListItemStyled = styled(ListGroup.Item)`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: rgba(1, 24, 68, 0.15);
  color: #e4e2e2;
  padding: 0.5rem 1rem;
  height: 100%;
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
    color: #c4c4c3;
    width: 100%;
    font-size: 0.7rem;
    text-align: left;
    margin-bottom: 1px;
  }
  .item__icon {
    width: 100%;
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
  @media ${device.desktop} {
    p {
      font-size: 0.9rem;
      margin-bottom: 0.1rem;
    }
    .icon-main {
      font-size: 2.3rem;
    }
    .icons {
      font-size: 1.8rem;
      height: 80%;
    }
    .icon-compass {
      font-size: 1.1rem;
      height: 78%;
    }
    .item__date {
      font-size: 0.6rem;
    }
  }
  @media ${device.laptop} {
    justify-content: space-between;
    align-items: center;
    height: 24%;
    padding: 0.5rem 1rem;

    p {
      font-size: 0.7rem;
    }
    .item__icon {
      height: 10%;
    }
    .icon-main {
      font-size: 1.8rem;
    }
    .icons {
      font-size: 1.6rem;
    }
    .icon-compass {
      font-size: 0.9rem;
    }
    .item__date {
      font-size: 0.5rem;
      margin-bottom: 0;
      height: 5px;
    }
    .temperature {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      &--day {
        width: 12%;
        margin-right: 0.3rem;
        margin-bottom: 0;
        border-bottom: none;
        border-right: 2px solid rgba(0, 0, 0, 0.125);
      }
    }
  }
  @media ${device.laptop} {
    height: 23%;
    padding: 1rem;
    p {
      font-size: 0.9rem;
      margin: 0;
    }
    .item__date {
      font-size: 0.9rem;
    }
    .temperature {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      &--day {
        width: 20%;
        padding-right: 8px;
      }
      &--night {
        width: 15%;
      }
    }
  }
  @media ${device.tabletL} {
    height: 23%;
    p {
      font-size: 1rem;
      margin: 0;
    }
    .item__date {
      font-size: 0.9rem;
    }
    .icon-main {
      font-size: 2.5rem;
    }
    .icons {
      font-size: 1.8rem;
    }
    .icon-compass {
      font-size: 1rem;
    }
  }
  @media ${device.tablet} {
    p {
      font-size: 1rem;
    }
    .item__date {
      font-size: 0.7vw;
    }
    .icon-main {
      font-size: 2.2rem;
    }
    .icons {
      font-size: 1.6rem;
    }
  }
  @media ${device.mobileLand} {
    padding: 3%;
    p {
      font-size: 2.3vh;
    }
    .item__icon {
      height: auto;
    }
    .item__date {
      font-size: 0.9vh;
    }
    .icon-main {
      font-size: 4.5vh;
    }
    .icons {
      font-size: 4.7vh;
    }
    .icon-compass {
      font-size: 3.2vh;
    }
    svg {
      vertical-align: bottom;
    }
  }
  @media ${device.mobileL} {
    width: 95%;
    padding: 5px;
    p {
      font-size: 0.6rem;
    }
    .item__icon {
      height: 30%;
    }
    .item__date {
      font-size: 0.2rem;
    }
    .icon-main {
      font-size: 1.2rem;
      margin-bottom: 2px;
    }
    .icons {
      font-size: 0.7rem;
    }
    .icon-compass {
      font-size: 0.7rem;
    }
  }
  @media ${device.mobileM} {
    width: 95%;
    padding: 5px;
    p {
      font-size: 0.5rem;
    }
    .item__date {
      font-size: 0.1rem;
    }
    .icon-main {
      font-size: 1.1rem;
    }
    .icons {
      font-size: 0.5rem;
    }
    .icon-compass {
      font-size: 0.6rem;
    }
    svg {
      vertical-align: top;
    }
  }
  @media ${device.mobileS} {
    width: 95%;
    padding: 5px;
    p {
      font-size: 0.4rem;
    }

    .icon-main {
      font-size: 0.9rem;
    }
    .icons {
      font-size: 0.4rem;
    }
    .icon-compass {
      font-size: 0.5rem;
    }
  }
`;

export default ListItemStyled;
