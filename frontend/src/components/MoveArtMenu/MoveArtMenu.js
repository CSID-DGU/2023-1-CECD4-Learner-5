import { React } from "react";
import { LeftCircleTwoTone, RightCircleTwoTone } from "@ant-design/icons";
import {
  MoveArtButton,
  MoveArtContainer,
  TextContainer,
  TextStyled,
} from "./styled";

const MoveArtMenu = () => {
  return (
    <MoveArtContainer>
      <MoveArtButton>
        <LeftCircleTwoTone />
        <TextContainer>
          <TextStyled>이전 작품으로</TextStyled>
          <TextStyled>작품명 : AAA</TextStyled>
        </TextContainer>
      </MoveArtButton>
      <MoveArtButton>
        <TextContainer>
          <TextStyled>다음 작품으로</TextStyled>
          <TextStyled>작품명 : BBB</TextStyled>
        </TextContainer>
        <RightCircleTwoTone />
      </MoveArtButton>
    </MoveArtContainer>
  );
};

export default MoveArtMenu;
