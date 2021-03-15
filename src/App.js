import SearchResults from "./Components/SearchResults";
import { AppBar } from "./Components/AppBar";
import AppContainerStyled from "./shared/AppContainerStyled";

function App() {
  return (
    <AppContainerStyled>
      <AppBar />
      <SearchResults />
    </AppContainerStyled>
  );
}

export default App;
