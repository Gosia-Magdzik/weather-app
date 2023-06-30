import { useState, useEffect } from "react";
import { ClockStyled } from "./styled";

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId); //cleaning f.
        };
    }, []); //pusta tablica zal. bo odpala się tylko raz

    return (
        <ClockStyled>
            {date.toLocaleString(undefined, {
                day: "numeric",
                month: "long",
                year: "numeric"
            })}
        </ClockStyled>
    )
};