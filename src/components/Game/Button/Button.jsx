import React from "react";
import {ButtonSpan, StyledButton} from "./Button.styles";

const Button = ({option, image, gridArea, handleClick, disabled, win, mode, top, left}) => (
    <StyledButton
        aria-label={option}
        option={option}
        gridArea={gridArea}
        onClick={() => handleClick(option)}
        disabled={disabled}
        win={win}
        mode={mode}
        top={top}
        left={left}
    >
        <ButtonSpan aria-hidden="true">
            <img src={image} alt={option} />
        </ButtonSpan>
    </StyledButton>
);

export default Button;