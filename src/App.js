import { InputPart } from "./components/inputSection";
import { DataPart } from "./components/DataSection";
import { Background, Container } from "./Globalstyle";
import { Descriptions } from "./components/Descriptions";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherService";

function App() {
  const [city, setCity] = useState("Paris")
  const [weather, setWeather] = useState(null); 

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city)
      setWeather(data);
    };

    fetchWeatherData(); //call the function
  }, [city]);

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
        setCity(e.currentTarget.value);
        e.currentTarget.blur()
    }
}
  return (
    <>
      <Background>
        {
          weather && (
            <Container>
              <InputPart
                onKeyDown={ enterKeyPressed }
              />
              <DataPart
                city={weather.name}
                country={weather.country}
                icon={weather.iconURL}
                description={weather.description}
                temp={weather.temp}
              />
              <Descriptions
                temp_min={weather.temp_min} 
                temp_max={weather.temp_max}
                feels_like={weather.feels_like}
                humidity={weather.humidity}
                pressure={weather.pressure} 
                wind={weather.speed} 
                sunrise={weather.sunrise} 
                sunset={weather.sunset}
              />
            </Container>
          )
        }
      </Background>
    </>
  );
}

export default App;

