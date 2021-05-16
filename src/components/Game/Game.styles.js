import styled, {keyframes} from "styled-components";

const flip = keyframes`
  from{
    transform: rotateY(0);
  }
  to{
    transform: rotateY(180deg);
  }
`;

const opacity = keyframes`
  from{
    opacity: 0;
  }
  
  to{
    opacity: 1;
  }
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: ${({gameMode}) => gameMode === "bonus" ? "repeat(4, min-content)" : "repeat(3, min-content)"};
  grid-template-rows: ${({gameMode}) => gameMode === "bonus" ? "repeat(3, min-content)" : "repeat(2, min-content)"};
  justify-content: center;
  row-gap: ${({gameMode}) => gameMode === "bonus" ? "0" : "50px"};
  background-image: ${({svg}) => `url(${svg})`};
  background-repeat: no-repeat;
  background-position: center 50px;
  margin-top: 100px;
  transform: scale(0.7);
  transition: transform 0.2s;
  
  @media screen and (min-width: 350px) {
    transform: scale(0.8);
  }

  @media screen and (min-width: 420px) {
    transform: scale(1);
  }

  @media screen and (min-width: 768px) {
    margin-top: ${({mode}) => mode === "original" ? "100px" : "60px"};
    background-position-y: background-position: ${({mode}) => mode === "original" ? "100px" : "center"};
  }
`;

export const ResultContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  justify-items: center;
  align-items: center;
  column-gap: 80px;
  row-gap: 80px;
  margin-top: 60px;
  max-width: 950px;
  margin-left: auto;
  margin-right: auto;
  transform: scale(0.7);
  transition: transform 0.2s;

  @media screen and (min-width: 350px) {
    transform: scale(0.8);
  }

  @media screen and (min-width: 420px) {
    column-gap: 50px;
    transform: scale(1);
  }
  
  @media screen and (min-width: 1024px) {
    column-gap: 0;
    grid-template-columns: 1fr 350px 1fr;
    height: 400px;
  }
`;

export const ResultOption = styled.section`
  position: relative;
  z-index: -1;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  text-align: center;
  width: 100%;
  
  &:first-child{
    z-index: 100; 
  }
  
  @media screen and (min-width: 768px) {
    height: 410px;
    flex-direction: column;
    
      &:first-child{
        grid-column: 1 / 2;
      }
    
      &:nth-child(2){
        grid-column: 3 / 4;
      }
  }
`;

export const ResultOptionFlip = styled.div`
  position: relative;
  display: grid;
  justify-items: center;
  perspective: 800px;
  transition: transform 2s;
  transform-style: preserve-3d;
  animation: ${flip} 2s forwards;
`;

export const ResultOptionFront = styled(ResultOption).attrs({
    as: "div"
})`
  position: relative;
  backface-visibility: hidden;

  transform: rotateY( 180deg);
`;

export const ResultOptionBack = styled.div`
  position: absolute;
  background-color: #1A2946;
  backface-visibility: hidden;
  border-radius: 50%;
  width: 130px;
  height: 130px;

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

export const ResultTitle = styled.h2`
  position: relative;
  z-index: 100;
  color: ${({theme}) => theme.elementColor};
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 2px;

  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 60px;
  }
`;

export const ResultMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  color: ${({theme}) => theme.elementColor};
  opacity: 0;
  animation: ${opacity} 2s 2s forwards;
  order: 10;
  grid-column: span 2;
  
  @media screen and (min-width: 1024px) {
    grid-area: 1 / 2 / 2 / 3;
  }
`;

export const ResultMessageText = styled.div`
  text-transform: uppercase;
  font-size: 3rem;
`;

export const ResultMessageButton = styled.button`
  color: ${({theme}) => theme.darkText};
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  cursor: pointer;
  
  &:focus{
    outline: 3px dashed ${({theme}) => theme.elementColor};
    outline-offset: 5px;
  }
`;