import { CardContainer, CardDetail } from "./styled";

export const Descriptions = ({ temp_min, temp_max, feels_like, pressure, humidity, wind, sunset, sunrise }) => {
    const cards = [
        {
            id: 1,
            //icon: <FaArrowDown />,
            title: "min",
            data: temp_min.toFixed(),
            unit: "°C",
        },
        {
            id: 2,
            //icon: <FaArrowUp />,
            title: "max",
            data: temp_max.toFixed(),
            unit: "°C",
        },
        {
            id: 3,
            //icon: <BiHappy />,
            title: "feels like",
            data: feels_like.toFixed(),
            unit: "°C",
        },
        {
            id: 4,
            //icon: <MdCompress />,
            title: "pressure",
            data: pressure,
            unit: "hPa",
        },
        {
            id: 5,
            //icon: <MdOutlineWaterDrop />,
            title: "humidity",
            data: humidity,
            unit: "%",
        },
        {
            id: 6,
            //icon: <FaWind />,
            title: "wind speed",
            data: wind.toFixed(),
            unit: "m/s",
        },
        {
            id: 7,
            //icon: <FaWind />,
            title: "sunset",
            data: new Date(1000 * sunset).toLocaleTimeString(),
            unit: " ",
        },
        {
            id: 8,
            //icon: <FaWind />,
            title: "sun rice",
            data: new Date(1000 * sunrise).toLocaleTimeString(),
            unit: " ",
        },
    ]

    return(
        <CardContainer>
            {cards.map(({id, icon, title, data, unit}) => (
                <CardDetail key={id}>
                    {icon}
                    <p>{title}</p>
                    <h2>{`${data} ${unit}`}</h2>
                </CardDetail>
            ))}
        </CardContainer>
    );
}