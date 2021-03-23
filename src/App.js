import SearchResults from "./Components/SearchResults";
import { AppBar } from "./Components/AppBar";
import AppContainerStyled from "./shared/AppContainerStyled";
import LoadingProgress from "./Components/LoadingProgress";
function App() {
  return (
    <AppContainerStyled>
      <LoadingProgress></LoadingProgress>
      <AppBar />
      <SearchResults />
    </AppContainerStyled>
  );
}

export default App;
