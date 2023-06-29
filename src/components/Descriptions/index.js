//import { Wrapper } from "../inputSection/styled";
import { CardContainer, CardDetail } from "./styled";

export const Descriptions = () => {
    return(
            <CardContainer>
                <CardDetail><img/>sunrice</CardDetail>
                <CardDetail>sunset</CardDetail>
                <CardDetail>temp_min</CardDetail>
                <CardDetail>temp_max</CardDetail>
                <CardDetail>humidity</CardDetail>
                <CardDetail>pressure</CardDetail>
                <CardDetail>visibility</CardDetail>
                <CardDetail>wind</CardDetail>
                <CardDetail>clouds</CardDetail>
            </CardContainer>
    );
}