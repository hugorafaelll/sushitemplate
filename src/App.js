import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "@material-ui/core";
import SliderComponent from "./components/SliderComponent";

const App = () => {
  return (
    <Container>
      <Router>
        <Header />
      </Router>
      <SliderComponent />
    </Container>
  );
};

export default App;
