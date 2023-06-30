import { Icon, Temperature, Description, Img, Title, Wrapper } from "./styled";

export const DataPart = ({city, country, icon, description, temp}) => {
    return(
        <Wrapper>
                <Title>
                    {city},
                    {" "}
                    {country}
                </Title>
            <Temperature>{temp.toFixed()} °C</Temperature>
            <Icon>
                <Img src={icon}/>
                <Description>{description}</Description>
            </Icon>
        </Wrapper>
    );
}