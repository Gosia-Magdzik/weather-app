const API_KEY = '3ade835e82debd51c3b8e2e2618a4589'

const getFormattedWeatherData = async (city, units = 'metric') => {

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`

    const data = await fetch(URL)
        .then((res) => res.json())
        .then((data) => data);

    console.log(data);
}

export { getFormattedWeatherData };