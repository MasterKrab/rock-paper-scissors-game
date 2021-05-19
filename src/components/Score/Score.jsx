import React from "react";
import { ScoreName, ScoreNumber, StyledScore } from "./Score.styles";

const Score = ({score}) => (
    <StyledScore>
        <ScoreName>Score</ScoreName>
        <ScoreNumber aria-live="polite">{score}</ScoreNumber>
    </StyledScore>
);

export default Score;