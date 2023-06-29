import { Wrapper, Input, Button } from "./styled";

export const InputPart = () => {
    return(
        <Wrapper>
            <Input type="text" name="city" placeholder="Enter location..."></Input>
            <Button>°C</Button>
        </Wrapper>
    );
}