import { CardContainer, CardDetail, Icon, SunWrapper, Sun } from "./styled";
import wilgotnosc from "./images/humidity.svg";
import wiatr from "./images/wind.svg";
import cisnienie from "./images/pressure.svg";
import wschod from "./images/sunrise.svg";
import zachod from "./images/sunset.svg";

export const Descriptions = ({ temp_min, temp_max, feels_like, pressure, humidity, wind, sunset, sunrise }) => {
    const cards = [
        {
            id: 1,
            icon: < Icon src={cisnienie} />,
            title: "pressure",
            data: pressure,
            unit: "hPa",
        },
        {
            id: 2,
            icon: <Icon src={wilgotnosc} />,
            title: "humidity",
            data: humidity,
            unit: "%",
        },
        {
            id: 3,
            icon: < Icon src={wiatr} />,
            title: "wind speed",
            data: wind.toFixed(),
            unit: "m/s",
        },
    ]

    return(
        <>
        <div>
        Now it feels feels like {feels_like.toFixed()} °C <br/>
        the temperature is felt in the range from {temp_min.toFixed()} °C to {temp_max.toFixed()} °C
        </div>
        <CardContainer>
            {cards.map(({id, icon, title, data, unit}) => (
                <CardDetail key={id}>
                    {icon}
                    <p>{`${data} ${unit}`}</p>
                    <p>{title}</p>
                </CardDetail>
            ))}
        </CardContainer>
        <SunWrapper>
            <Sun>
                < Icon src={wschod} />
                <h2>{new Date(1000 * sunrise).toLocaleTimeString()}</h2>
            </Sun>
            <Sun>
                < Icon src={zachod} />
                <h2>{new Date(1000 * sunset).toLocaleTimeString()}</h2>
            </Sun>
        </SunWrapper>    
        </>
    );
}