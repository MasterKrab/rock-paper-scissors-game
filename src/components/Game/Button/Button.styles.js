import styled, { keyframes } from "styled-components";

const winAnimation = ({color}) => {
    return keyframes`
      10%{
        box-shadow: inset 0 -5px 2px 2px ${(color)};
      }
      
      30%{
        box-shadow: inset 0 -5px 2px 2px $${(color)},
                    0 0 0 20px #2d3e5c;
      }
      
      60%{
        box-shadow: inset 0 -5px 2px 2px ${(color)},
                    0 0 0 20px #2d3e5c,
                    0 0 0 50px #273856;
      }
      
      100%{
        box-shadow: inset 0 -5px 2px 2px ${(color)},
                    0 0 0 20px #2d3e5c,
                    0 0 0 50px #273856,
                    0 0 0 80px #223150;
      }
    `;
}


export const StyledButton = styled.button`
  position: relative;
  background-image: linear-gradient(${({theme, option}) => `${theme[option].from}, ${theme[option].to}`});
  grid-area: ${({gridArea}) => gridArea};
  box-shadow: inset 0 -5px 2px 2px ${({theme, option}) => theme[option].shadow};
  padding: 15px;
  border: none;
  border-radius: 50%;
  width: 130px;
  height: 130px;
  cursor: pointer;
  animation: ${winAnimation(({theme, option}) => theme[option].shadow)} 2s 2s ease alternate infinite;
  animation-play-state: ${({win}) => win ? "running" : "paused"};
  top: ${({top}) => top.mobile};
  left: ${({left}) => left.mobile};
  
  &:focus,
  &:focus-visible{
    outline: 4px dashed ${({theme}) => theme.elementColor};
    outline-offset: 10px;
  }
  
  &:focus:not(:focus-visible){
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: ${({mode}) => mode === "original" ? "200px" : "150px"};
    height: ${({mode}) => mode === "original" ? "200px" : "150px"};
    padding: ${({mode}) => mode === "original" ? "23px" : "17px"};
    transition: transform 0.2s;
    top: ${({top}) => top.desktop};
    left: ${({left}) => left.desktop};
    
    &:hover{
     transform: scale(0.9); 
    }
    
    & img{
      width: ${({mode}) => mode === "original" ? "65px" : "50px"};
    }
  }
  
  &:disabled{
    @media screen and (min-width: 768px) {
      width: 300px;
      height: 300px;
      padding: 35px;
      top: 0;
      left: 0;

      & img{
        width: 105px;
      }
    }
  }
  
`;

export const ButtonSpan = styled.span`
  display: grid;
  place-items: center;
  background-color: ${({theme}) => theme.elementColor};
  box-shadow: inset 0 5px 2px 1px ${({theme}) => theme.elementShadow};
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;