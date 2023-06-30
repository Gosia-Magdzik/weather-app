import { Wrapper, Input, Img } from "./styled";
import magnifier from "./magnifier.svg";
import location from "./location.svg";

export const InputPart = ({ onKeyDown }) => {
    return(
        <Wrapper>
            <Img src={magnifier}/>
            <Img src={location}/>
            <Input
                onKeyDown={onKeyDown}
                type="text" 
                name="city" 
                placeholder= " Enter location..."
            />
        </Wrapper>
    );
}