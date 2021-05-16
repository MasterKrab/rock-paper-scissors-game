import React, { useState } from "react";
import { ButtonsContainer, Button }from "./Buttons.styles";
import Modal from "../Modal/Modal";

const Buttons = ({mode, handleMode}) => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => setOpenModal(true);

    const handleCloseModal = () => setOpenModal(false);

    return(
        <ButtonsContainer>
            <Button onClick={handleMode}>
                {
                    mode === "original"
                        ? "bonus"
                        : "original"
                }
            </Button>
            <Button onClick={handleOpenModal}>Rules</Button>
            <Modal openModal={openModal} handleCloseModal={handleCloseModal} mode={mode}/>
        </ButtonsContainer>
    )
};

export default Buttons;