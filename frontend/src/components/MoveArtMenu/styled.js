import styled from "styled-components";

export const MoveArtContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  width: 100%;
`;

export const MoveArtButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  width: 50%;
  height: 60px;
  margin: 10px;
  margin-bottom: 0;
  border: none;
  border-radius: 5px;
  color: gray;
  font-size: 13px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  line-height: 20px;
  &:hover {
    color: black;
    background-color: white;
  }
`;

export const ArtImg = styled.img`
  width: 45px;
  //height: 60%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextStyled = styled.p`
  margin: 0;
`;
