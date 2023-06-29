import { InputPart } from "./components/inputSection";
import { DataPart } from "./components/DataSection";
import { Background, Container } from "./Globalstyle";
import { Descriptions } from "./components/Descriptions";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherService";

function App() {

  const [weather, setWeather] = useState(null); 

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData('paris')
      setWeather(data);
    };

    fetchWeatherData(); //call the function
  }, [])

  return (
    <>
      <Background>
        {
          weather && (
            <Container>
            <InputPart/>
            <DataPart
              city={weather.name}
              country={weather.country}
              icon={weather.iconURL}
            />
            <Descriptions/>
            </Container>
          )
        }
      </Background>
    </>
  );
}

export default App;

