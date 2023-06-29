import { Wrapper, Input } from "./styled";

export const InputPart = ({ onKeyDown }) => {
    return(
        <Wrapper>
            <Input
                onKeyDown={onKeyDown}
                type="text" 
                name="city" 
                placeholder="Enter location..."
            />
        </Wrapper>
    );
}