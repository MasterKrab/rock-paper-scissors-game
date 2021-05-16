import React, { useState } from "react";
import { ButtonsContainer, Button }from "./Buttons.styles";
import Modal from "../Modal/Modal";

const Buttons = ({gameMode, handleMode}) => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => setOpenModal(true);

    const handleCloseModal = () => setOpenModal(false);

    return(
        <ButtonsContainer>
            <Button onClick={handleMode}>
                {
                    gameMode === "original"
                        ? "bonus"
                        : "original"
                }
            </Button>
            <Button onClick={handleOpenModal}>Rules</Button>
            <Modal openModal={openModal} handleCloseModal={handleCloseModal} gameMode={gameMode}/>
        </ButtonsContainer>
    )
};

export default Buttons;