import styled from "styled-components";

export const MoveArtContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  width: 100%;
`;

export const MoveArtButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 40%;
  height: 60px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  color: gray;
  font-size: 16px;
  font-family: Pretendard-Regular;
  font-weight: 500;
  line-height: 20px;
  &:hover {
    color: black;
    background-color: white;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextStyled = styled.p`
  margin: 0;
`;
