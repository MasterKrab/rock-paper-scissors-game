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
    height: 800px;
  }
`;

const App = (key, value) => {
    const [score, setScore] = useState(
        parseInt(localStorage.getItem("score")) || 12
    );
    const [mode, setMode] = useState("original");

    const handleMode = () => {
        mode === "original"
            ? setMode("bonus")
            : setMode("original");
    };

    const addScore = () => {
        setScore(score + 1);
        localStorage.setItem("score", score);
    };

    return(
        <ThemeProvider theme={colors}>
            <Normalize />
            <GlobalStyles />
            <Header score={score}/>
            <main>
                <Game addScore={addScore} mode={mode}/>
            </main>
                <Buttons
                    mode={mode}
                    handleMode={handleMode}
                />
        </ThemeProvider>
    );
};

export default App;
