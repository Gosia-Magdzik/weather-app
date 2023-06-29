import { Wrapper, Input, Button } from "./styled";

export const InputPart = () => {
    const enterKeyPressed = (e) => {
        if (e.keyCode === 13) {
            setCity(e.currentTarget.value);
            e.currentTarget.blur()
        }
    }

    return(
        <Wrapper>
            <Input 
                onKeyDown={enterKeyPressed}
                type="text" 
                name="city" 
                placeholder="Enter location..."
            />
            <Button>°C</Button>
        </Wrapper>
    );
}