import styled from "styled-components";
import { device } from "./device";

const WeatherCardStyles = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  .card {
    width: 20rem;
    background-color: rgba(1, 24, 68, 0.15);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-color: transparent;
    color: #e4e2e2;
  }
  .icon-main {
    font-size: 3rem;
  }
  .icons {
    font-size: 2.5rem;
  }
  .icons-aside {
    font-size: 2.1rem;
  }
  .card-title {
    font-size: 2rem;
    border-bottom: 2px solid #e4e2e2;
  }
  .text-muted {
    font-size: 1.2rem;
    color: #c4c4c3 !important;
  }
  .card-text {
    font-size: 1.4rem;
    margin-right: 10px;
  }
  .icons {
    font-size: 1.6rem;
  }
  @media ${device.desktop} {
    .card {
      width: 15rem;
    }
    .card-title {
      font-size: 1.4rem;
    }
    .card-text {
      font-size: 0.91rem;
      margin-right: 0;
    }
  }
  @media ${device.laptop} {
    .card {
      margin-right: 5px;
    }
    .card-title {
      font-size: 1rem;
    }
    .text-muted {
      font-size: 0.9rem;
    }
    .card-text {
      font-size: 0.8rem;
      display: block !important;
    }
    .icon-main {
      font-size: 2.5rem;
    }
    .icons {
      font-size: 1.5rem;
    }
    .icons-aside {
      font-size: 1.3rem;
    }
  }
  @media ${device.tabletL} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .card {
      width: 100%;
      height: 47%;
      margin: 0;
    }
    .card-body {
      padding: 10px;
    }
    p {
      margin: 0;
    }
    .card-title {
      font-size: 2.2vw;
    }
    .text-muted {
      font-size: 1.5vh;
    }
    .card-text {
      font-size: 1.3vh;
    }
    .icon-main {
      font-size: 2.2rem;
    }
    .icons {
      font-size: 1.4rem;
    }
    .icons-aside {
      font-size: 1.7rem;
    }
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .card {
      width: 100%;
      height: 47%;
    }

    .text-muted {
      font-size: 0.7rem;
    }
    .card-text {
      font-size: 1rem;
    }
    .icon-main {
      font-size: 2rem;
    }
    .icons {
      font-size: 1.2rem;
    }
    .icons-aside {
      font-size: 1.5rem;
    }
  }
  @media ${device.mobileLand} {
    .card {
      width: 105%;
      height: 48%;
    }
    .card-body {
      flex-direction: row;
      flex-wrap: nowrap;
    }
    .card-title {
      font-size: 3vh;
      margin-top: 5px;
    }
    .text-muted {
      font-size: 2.2vh;
    }
    .card-text {
      font-size: 2.2vh;
      display: inline !important;
    }
    .icon-main,
    .icons {
      font-size: 2vh;
      margin-right: 2px;
    }

    .icons-aside {
      margin-right: 4px;
      font-size: 3.6vh;
    }
  }
  @media ${device.mobileL} {
    .card {
      width: 95%;
      height: 49%;
    }
    .card-title {
      font-size: 1.2rem;
    }
    .text-muted {
      font-size: 0.7rem;
    }
    .card-text {
      font-size: 0.7rem;
    }
    .icon-main {
      font-size: 1.8rem;
    }
    .icons {
      font-size: 1rem;
    }
    .icons-aside {
      font-size: 1.3rem;
    }
  }
  @media ${device.mobileM} {
    .card {
      width: 95%;
      height: 47%;
      padding: 5px;
    }
    .card-title {
      margin-top: 3px;
      font-size: 0.8rem;
      border-bottom-width: 0.5px;
    }
    .text-muted {
      font-size: 0.5rem;
    }
    .card-text {
      font-size: 0.6rem;
    }
    .icon-main {
      font-size: 1.3rem;
    }
    .icons {
      font-size: 0.8rem;
    }
    .icons-aside {
      font-size: 1rem;
    }
  }
  @media ${device.mobileS} {
    .card-title {
      font-size: 0.6rem;
    }
    .text-muted {
      font-size: 0.3rem;
    }
    .card-text {
      font-size: 0.5rem;
    }
    .icon-main {
      font-size: 1.1rem;
    }
    .icons {
      font-size: 0.6rem;
    }
    .icons-aside {
      font-size: 0.8rem;
    }
  }
`;

export default WeatherCardStyles;
