import styled from "styled-components";

export const Dialog = styled.dialog`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  padding: 0;
  width: 100vw;
  height: 100vh;
`;

export const ModalContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({theme}) => theme.elementColor};
  border: none;
  padding-top: 85px;
  padding-bottom: 100px;
  height: 100%;

  @media screen and (min-width: 1024px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 15px;
    padding: 15px 33px 45px;
    width: 400px;
    height: max-content;
  }
`;

export const ModalTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 1024px) {
    justify-content: space-between;
  }
`;

export const Title = styled.h2`
  color: ${({theme}) => theme.darkText};
  text-transform: uppercase;
  margin-top: 0;

  @media screen and (min-width: 1024px) {
    margin-top: 20px;
  }
`;

export const CloseButton = styled.button`
  border: none;
  background-image: url(${({image}) => image});
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  width: 20px;
  height: 20px;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    position: absolute;
    bottom: 65px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  &:focus{
    outline: 3px dashed ${({theme}) => theme.darkText};
    outline-offset: 5px;
  }
`;

export const Image = styled.img`
  margin-top: auto;
  margin-bottom: auto;
`;