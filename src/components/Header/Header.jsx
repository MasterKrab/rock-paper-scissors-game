import React from "react";
import logo from "../../assets/images/logo.svg";
import Score from  "../Score/Score";
import { StyledHeader, StyledImage } from "./Header.styles";

const Header = ({score, }) => (
    <StyledHeader>
        <StyledImage src={logo} alt="logo" />
        <Score score={score} />
    </StyledHeader>
);

export default Header;