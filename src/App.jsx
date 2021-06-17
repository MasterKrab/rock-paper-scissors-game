import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Normalize from 'react-normalize';
import colors from "./theming/colors"
import Header from "./components/Header/Header";
import Game from "./components/Game/Game";
import Buttons from "./components/Buttons/Buttons";

const GlobalStyles = createGlobalStyle`
  html,
  body::-webkit-scrollbar-track{
    background-image: linear-gradient(${({theme}) => (
        `${theme.background.from}, ${theme.background.to}`
    )});
  }
  
  html{
    font-family: 'Barlow Semi Condensed', sans-serif;
    box-sizing: border-box;
  }
  
  *,
  *::before,
  *::after{
    box-sizing: inherit;
  }
  
  body{
    margin: 0;
    padding: 30px;
    min-height: 100vh;

    &::-webkit-scrollbar{
      width: 8px;
    }
    
    &::-webkit-scrollbar-thumb{
      background-color: ${({theme}) => theme.elementColor};
      border-radius: 5px;
    }
  }
  
  img{
    max-width: 100%;
  }
  
  .app{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: 720px;

    @media screen and (min-width: 768px){
      height: 900px;
    }

    @media screen and (min-width: 1024px){
      height: 800px;
    }
  }
`;

const App = () => {
    const [score, setScore] = useState(
        JSON.parse(localStorage.getItem("score")) || 0
    );
    const [gameMode, setGameMode] = useState("original");

    const handleMode = () => {
        gameMode === "original"
            ? setGameMode("bonus")
            : setGameMode("original");
    };

    const addScore = () => {
        const updatedScore = score + 1;
        setScore(updatedScore);
        localStorage.setItem("score", JSON.stringify(updatedScore));
    };

    return(
        <ThemeProvider theme={colors}>
            <Normalize />
            <GlobalStyles />
            <Header score={score} gameMode={gameMode}/>
            <main>
                <Game addScore={addScore} gameMode={gameMode}/>
            </main>
                <Buttons
                    gameMode={gameMode}
                    handleMode={handleMode}
                />
        </ThemeProvider>
    );
};

export default App;
