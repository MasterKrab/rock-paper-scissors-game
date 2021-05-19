import React, { useState } from "react";
import { nanoid as id } from "nanoid";
import Button from "./Button/Button";
import { original, bonus } from "./Mode";
import TriangleSvg from "../../assets/images/bg-triangle.svg";
import PentagonSvg from "../../assets/images/bg-pentagon.svg"

import {
    ButtonsContainer,
    ResultContainer,
    ResultMessage,
    ResultMessageButton,
    ResultMessageText,
    ResultOption,
    ResultTitle,
    ResultOptionFront,
    ResultOptionBack,
    ResultOptionFlip
} from "./Game.styles";


const Game = ({addScore, gameMode}) => {
    const options = gameMode === "original" ? original : bonus;
    const [userOption, setUserOption] = useState({});
    const [houseOption, setHouseOption] = useState({});
    const [winner, setWinner] = useState("");

    const setWinnerOption = (user, house) => {
        if(user.name === house.name) {
            setWinner("draw");
        }else if(user.beat.includes(house.name)) {
            setWinner("user");
            setTimeout(() => addScore(), 2000);
        }else if(user.beat !== house.name){
            setWinner("house");
        }
    };

    const handleClick = (selectedOption) => {
        const user = options.find(option => option.name === selectedOption);
        const randomNumber = Math.round(Math.random() * (options.length - 1));
        const house = options[randomNumber];

        setUserOption(user);
        setHouseOption(house);
        setWinnerOption(user, house);
    };

    const handleReset = () => {
        setUserOption({});
        setHouseOption({});
    };

    return (
        !userOption.name ? (
            <ButtonsContainer
                svg={gameMode === "bonus" ? PentagonSvg : TriangleSvg}
                gameMode={gameMode}
            >
                {
                    options.map(({name, svg, gridArea, top, left}) => (
                        <Button
                            option={name}
                            image={svg}
                            gridArea={gridArea}
                            handleClick={handleClick}
                            key={id()}
                            gameMode={gameMode}
                            top={top}
                            left={left}
                        />
                    ))
                }
            </ButtonsContainer>
        ) : ( (winner.length > 0 || houseOption.name || userOption.name ) && (
            <ResultContainer>
                <ResultOption>
                    <ResultTitle>You picked</ResultTitle>
                    <Button
                        option={userOption.name}
                        image={userOption.svg}
                        gridArea={""}
                        disabled
                        win={winner === "user"}
                        top={{mobile: "0", desktop: "0"}}
                        left={{mobile: "0", desktop: "0"}}
                    />
                </ResultOption>
                <ResultMessage>
                    <ResultMessageText>
                        {
                            winner === "draw"
                                ? "It's a tie"
                                : winner === "user"
                                    ? "You Win"
                                    : "You Lose"
                        }
                    </ResultMessageText>
                    <ResultMessageButton onClick={handleReset}>
                        Play Again
                    </ResultMessageButton>
                </ResultMessage>
                <ResultOption>
                    <ResultTitle>The house picked</ResultTitle>
                    <ResultOptionFlip>
                        <ResultOptionBack />
                        <ResultOptionFront>
                            <Button
                                option={houseOption.name}
                                image={houseOption.svg}
                                gridArea={""}
                                disabled
                                win={winner === "house"}
                                top={{mobile: "0", desktop: "0"}}
                                left={{mobile: "0", desktop: "0"}}
                            />
                        </ResultOptionFront>
                    </ResultOptionFlip>
                </ResultOption>

            </ResultContainer>
        ))
    )
};

export default Game;