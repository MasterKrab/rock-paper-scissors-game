import React, {useEffect} from "react";
import {
    Dialog,
    ModalContainer,
    ModalTop,
    Title,
    CloseButton,
    Image
} from "./Modal.styles";
import RulesSvg from "../../assets/images/image-rules.svg";
import RulesBonusSvg from "../../assets/images/image-rules-bonus.svg";
import CloseSvg from "../../assets/images/icon-close.svg";

const Modal = ({openModal, handleCloseModal, gameMode}) => {
    useEffect(() => {
        const handleKeyDown = (e) => e.key === "Escape" && handleCloseModal();
        
        document.addEventListener("keydown", handleKeyDown);

        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [handleCloseModal]);

    const handleClick = (e) => {
        e.target.classList.contains("modal") && handleCloseModal();
    };
    
    return (
        <Dialog role="dialog" className="modal" onClick={handleClick} >
            <ModalContainer>
                <ModalTop>
                    <Title>Rules</Title>
                    <CloseButton
                        image={CloseSvg}
                        aria-label={"Close Rules"}
                        onClick={handleCloseModal}
                    />
                </ModalTop>
                <Image
                    src={gameMode === "bonus" ? RulesBonusSvg : RulesSvg}
                    alt={
                        gameMode === "bonus"
                            ? "Scissors beats paper and lizard, paper beats rock and pock, rock beats lizard and scissors, lizard beats paper and pock, and pock beats scissors and rock"
                            : "Paper beats rock, rock beats scissors and scissors beats paper"
                    }
                />
            </ModalContainer>
        </Dialog>
    )
};

export default Modal;