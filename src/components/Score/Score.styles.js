import styled from "styled-components";

export const StyledScore = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.elementColor};
  border-radius: 5px;
  width: 80px;
  height: 72px;
  
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 115px;
  }
`;

export const ScoreName = styled.span`
  text-transform: uppercase;
  color: ${({theme}) => theme.scoreText};
  font-size: 0.8rem;
  margin-bottom: -5px;

  @media screen and (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const ScoreNumber = styled.span`
  color: ${({theme}) => theme.darkText};
  font-size: 2.2rem;
  font-weight: bold;

  @media screen and (min-width: 768px) {
    font-size: 3.5rem;
  }
`;