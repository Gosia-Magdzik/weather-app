import { InputPart } from "./components/inputSection";
import { DataPart } from "./components/DataSection";
import { Background, Container } from "./Globalstyle";
import { Descriptions } from "./components/Descriptions";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherService";
import hot from "./images/hot.png";
import cold from "./images/cold.png"; 
import { Clock } from "./components/Clock";

function App() {
  const [city, setCity] = useState("Paris")
  const [weather, setWeather] = useState(null); 
  const [bg, setBg] = useState()

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city)
      setWeather(data);

      const ishot = (temp) => temp >= 0;
      if (ishot(data.temp)) {
        setBg(hot);
      } else {
        setBg(cold)
      }
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
      <Background
        style={{ backgroundImage: `url(${bg})` }}
      >
        {
          weather && (
            <Container>
              <InputPart
                onKeyDown={ enterKeyPressed }
              />
              <Clock/>
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

