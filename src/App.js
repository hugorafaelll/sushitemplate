import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "@material-ui/core";
import Exemplo from "./components/exemplo/Exemplo";
import Main from "./components/exemplo/Main";

const App = () => {
  return (
    <Container>
      <Router>
        <Header />
      </Router>

      <Exemplo />
      <Main />
    </Container>
  );
};

export default App;
