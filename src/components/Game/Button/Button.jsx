import React from "react";
import {ButtonSpan, StyledButton} from "./Button.styles";

const Button = ({option, image, gridArea, handleClick, disabled, win, gameMode, top, left}) => (
    <StyledButton
        aria-label={option}
        option={option}
        gridArea={gridArea}
        onClick={() => handleClick(option)}
        disabled={disabled}
        win={win}
        gameMode={gameMode}
        top={top}
        left={left}
    >
        <ButtonSpan aria-hidden="true">
            <img src={image} alt={option} />
        </ButtonSpan>
    </StyledButton>
);

export default Button;