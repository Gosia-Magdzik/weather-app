import { Wrapper } from "../inputSection/styled";
import { Icon, Temperature, Desription, Img } from "./styled";
import icon from "../../images/icon.svg"

export const DataPart = () => {
    return(
        <Wrapper>
            <Icon>
                <Desription>London, GB</Desription>
                <Img src={icon}/>
                <Desription>Cloudly</Desription>
            </Icon>
            <Temperature>26 °C</Temperature>
        </Wrapper>
    );
}