import hot from "./images/hot.jpg";
import cold from "./images/cold.jpg";
import { InputPart } from "./components/inputSection";
import { DataPart } from "./components/DataSection";
import { Container } from "./components/Container/styled";
import { Background } from "./Globalstyle";

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

