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


const Game = ({addScore, mode}) => {
    const options = mode === "original" ? original : bonus;
    const [userOption, setUserOption] = useState("");
    const [houseOption, setHouseOption] = useState("");
    const [winner, setWinner] = useState("");

    const setWinnerOption = (user, house) => {
        if(user.name === house.name) {
            setWinner("draw");
        }else if(user.beat.includes(house.name)) {
            setWinner("user");
            addScore();
        }else if(user.beat !== house.name){
            setWinner("house");
        }
    };

    const handleClick = (selectedOption) => {
        const user = options.find(option => option.name === selectedOption);
        const randomNumber = Math.round(Math.random() * options.length);
        const house = options[randomNumber];
        console.log(randomNumber);

        console.log(user, house)
        setUserOption(user);
        setHouseOption(house);
        setWinnerOption(user, house);
    };

    const handleReset = () => {
        setUserOption("");
        setHouseOption("");
    };

    return (
        userOption.length === 0 ? (
            <ButtonsContainer svg={mode === "bonus" ? PentagonSvg : TriangleSvg} mode={mode}>
                {
                    options.map(({name, svg, gridArea, top, left}) => (
                        <Button
                            option={name}
                            image={svg}
                            gridArea={gridArea}
                            handleClick={handleClick}
                            key={id()}
                            mode={mode}
                            top={top}
                            left={left}
                        />
                    ))
                }
            </ButtonsContainer>
        ) : ( (winner.length > 0 || houseOption.length > 0 || userOption.length > 0) && (
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
                                ? "¡Draw!"
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