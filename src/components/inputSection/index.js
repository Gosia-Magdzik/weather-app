import { Wrapper, Input, Img } from "./styled";
import magnifier from "./magnifier.svg"

export const InputPart = ({ onKeyDown }) => {
    return(
        <Wrapper>
            <Img src={magnifier}/>
            <Input
                onKeyDown={onKeyDown}
                type="text" 
                name="city" 
                placeholder="Enter location..."
            />
        </Wrapper>
    );
}