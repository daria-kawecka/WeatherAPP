import styled from "styled-components";
import { keyframes } from "styled-components";

const LoadingBar = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(34, 45, 64, 0.65);
  .progress {
    width: 100%;
    height: 3%;
    opacity: 80%;
    box-shadow: 0px 3px 5px 2px #222d40;
    .bg-warning {
      background-color: #ffd06e !important;
    }
    .progress-bar {
      color: #222d40;
      font-size: 15px;
      font-weight: bold;
    }
  }
`;
const rotateAnimation = keyframes`
 0% { transform:rotateZ(0deg); }
 100% { transform:rotateZ(360deg) }
`;
const LoadingText = styled.p`
  font-size: 5vh;
  color: #222d40;
  margin: 1%;
  svg {
    color: #ffd06e;
    margin-right: 15px;
    font-size: 7vh;
    animation: ${rotateAnimation} 5s infinite linear;
  }
`;

export { LoadingBar, LoadingText };
