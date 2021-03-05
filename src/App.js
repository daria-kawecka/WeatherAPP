import styled from "styled-components";
import Search from "./Components/Search";
import Forecast from "./Components/Forecast";
import { AppBar } from "./Components/AppBar";
import img from "./images/background.jpg";
const AppDiv = styled.div`
  background: radial-gradient(
      circle,
      rgba(122, 155, 211, 0.85) 0%,
      rgba(27, 42, 68, 0.9) 100%
    ),
    url(${img});
  text-align: center;
  height: 100vh;
`;

function App() {
  return (
    <AppDiv>
      <AppBar></AppBar>
      <Search></Search>
      <Forecast></Forecast>
    </AppDiv>
  );
}

export default App;
