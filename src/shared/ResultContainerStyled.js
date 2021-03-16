import styled from "styled-components";
import { device } from "./device";

const ResultContainerStyled = styled.div`
  width: 100%;
  height: 80vh;
  display: grid;
  grid-template-columns: 31% 35% 31%;
  grid-template-rows: 50% 50%;
  gap: 10px 20px;
  justify-items: stretch;
  grid-template-areas:
    "Left Center Forecast"
    "Left Bottom Forecast";

  .lineChart {
    grid-area: Left;
    height: 100%;
    padding: 18px 8px;
  }
  .barChart {
    grid-area: Bottom;
  }
  .weather {
    grid-area: Center;
  }
  .forecast {
    grid-area: Forecast;
  }
  @media ${device.laptop} {
    .lineChart {
      height: 90%;
      width: 100%;
      padding: 5px;
    }
  }
  @media ${device.tabletL} {
    height: 85vh;
    grid-template-columns: 40% 25% 32%;
    gap: 10px 10px;
    grid-template-areas:
      "Bottom Center Forecast"
      "Left Left Forecast";
  }
  @media ${device.tablet} {
  }
  @media ${device.mobileLand} {
    grid-template-columns: 32% 32% 35%;
    grid-template-rows: 45% 55%;
    .lineChart {
      height: 90%;
      width: 95%;
      bottom: 0px;
      margin-left: 0px;
      padding-bottom: 15px;
    }
  }

  @media ${device.mobileL} {
    grid-template-columns: 53% 47%;
    grid-template-rows: 45% 55%;
    gap: 5px 5px;
    grid-template-areas:
      "Bottom Center"
      "Left  Forecast";
    .lineChart {
      height: 95%;
      width: 98%;
      padding: 15px;
      margin-left: 10px;
    }
    .barChart {
      grid-area: Bottom;
      padding: 10px;
    }
    .forecast {
      width: 100%;
    }
  }
`;

export default ResultContainerStyled;
