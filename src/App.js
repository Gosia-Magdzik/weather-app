import hot from "./images/hot.jpg";
import cold from "./images/cold.jpg";
import { InputPart } from "./components/inputSection";
import { DataPart } from "./components/DataSection";
import { Background, Container } from "./Globalstyle";

function App() {
  return (
    <>
      <Background>
        <Container>
          <InputPart/>
          <DataPart/>
        </Container>
    </Background>
    </>
  );
}

export default App;

