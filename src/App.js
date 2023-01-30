import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "@material-ui/core";
import SliderComponent from "./components/SliderComponent";
import Exemplo from "./components/exemplo/Exemplo";

const App = () => {
  return (
    <Container>
      <Router>
        <Header />
      </Router>
      <SliderComponent />
      <Exemplo />
    </Container>
  );
};

export default App;
