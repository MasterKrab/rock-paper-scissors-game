import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;
  width: 100%;
  max-width: 1274px;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid ${({theme}) => theme.headerBorder};
  border-radius: 10px;
  color: ${({theme}) => theme.elementColor};
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
  min-width: 130px;
  height: 42px;
  cursor: pointer;
  margin-top: auto;
  
  &:focus{
    outline: 3px dashed ${({theme}) => theme.elementColor};
    outline-offset: 5px;
  }
  
  @media screen and (min-width: 768px) {
    transition: color 0.3s, border-color 0.3s, background-color 0.3s;
    
    &:hover{
      background-color: ${({theme}) => theme.elementColor};
      color: ${({theme}) => theme.darkText};
      border-color: transparent;
    }
  }
`;