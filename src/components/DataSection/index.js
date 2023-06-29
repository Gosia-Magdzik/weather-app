import { Wrapper } from "../inputSection/styled";
import { Icon, Temperature, Description, Img } from "./styled";
import { useState } from "react";

export const DataPart = ({city, country, icon, description, temp}) => {
    
    const [units, setUnits] = useState("metric");
    
    return(
        <Wrapper>
            <Icon>
                <Description>
                    {city},
                    {" "}
                    {country}
                </Description>
                <Img src={icon}/>
                <Description>{description}</Description>
            </Icon>
            <Temperature>{`${temp.toFixed()} °${units === "metric" ? "C" : "F"}`}</Temperature>
        </Wrapper>
    );
}