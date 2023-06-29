import { Wrapper, Input } from "./styled";

export const InputPart = () => {
    return(
        <Wrapper>
            <Input type="text" name="city" placeholder="Enter location..."></Input>
            <button>°C</button>
        </Wrapper>
    );
}