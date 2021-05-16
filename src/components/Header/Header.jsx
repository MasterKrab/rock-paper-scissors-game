import React from "react";
import logo from "../../assets/images/logo.svg";
import logoBonus from "../../assets/images/logo-bonus.svg";
import Score from  "../Score/Score";
import { StyledHeader, StyledImage } from "./Header.styles";

const Header = ({score, gameMode}) => (
    <StyledHeader>
        <StyledImage src={gameMode === "bonus" ? logoBonus : logo} alt="logo" gameMode={gameMode}/>
        <Score score={score} />
    </StyledHeader>
);

export default Header;