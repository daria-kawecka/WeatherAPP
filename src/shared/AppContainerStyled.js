import img from "../images/background.jpg";
import styled from "styled-components";

const AppContainerStyled = styled.div`
  background: radial-gradient(
      circle,
      rgba(122, 155, 211, 0.85) 0%,
      rgba(27, 42, 68, 0.9) 100%
    ),
    url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  text-align: center;
  height: 100vh;
  overflow-y: hidden;
`;
export default AppContainerStyled;
