import React from "react";
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

const Modal = ({openModal, handleCloseModal, mode}) => (
    <Dialog open={openModal}>
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
                src={mode === "bonus" ? RulesBonusSvg : RulesSvg}
                alt="Paper beats rock, rock beats scissors and scissors beats paper"
            />
        </ModalContainer>
    </Dialog>
);

export default Modal;