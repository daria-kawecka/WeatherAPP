import styled from "styled-components";

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
    justify-self: stretch;
    align-self: stretch;
  }
`;

export default ResultContainerStyled;
