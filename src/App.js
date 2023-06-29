import { InputPart } from "./components/inputSection";
import { DataPart } from "./components/DataSection";
import { Background, Container } from "./Globalstyle";
import { Descriptions } from "./components/Descriptions";
import { useEffect } from "react";
import { getFormattedWeatherData } from "./weatherService";

function App() {

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData('paris')
    };

    fetchWeatherData(); //call the function
  }, [])

  return (
    <>
      <Background>
        <Container>
          <InputPart/>
          <DataPart/>
          <Descriptions/>
        </Container>
    </Background>
    </>
  );
}

export default App;

