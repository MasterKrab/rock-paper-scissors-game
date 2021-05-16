import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 4px solid ${({theme}) => theme.headerBorder};
  border-radius: 10px;
  padding-left: 22px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 700px;
  height: 100px;
  
  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 22px;
    height: 155px;
  }
`;

export const StyledImage = styled.img`
  width: 82px;
  height: min-content;

  @media screen and (min-width: 768px) {
    width: 160px;
  }
`