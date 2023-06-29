import { Wrapper } from "../inputSection/styled";
import { Icon, Temperature, Desription, Img } from "./styled";

export const DataPart = ({city, country, icon}) => {
    return(
        <Wrapper>
            <Icon>
                <Desription>
                    {city},
                    {" "}
                    {country}
                </Desription>
                <Img src={icon}/>
                <Desription>Cloudly</Desription>
            </Icon>
            <Temperature>26 °C</Temperature>
        </Wrapper>
    );
}