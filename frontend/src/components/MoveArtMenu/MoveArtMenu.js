import { React } from "react";
import { LeftCircleTwoTone, RightCircleTwoTone } from "@ant-design/icons";
import {
  ArtImg,
  MoveArtButton,
  MoveArtContainer,
  TextContainer,
  TextStyled,
} from "./styled";
import beforeArt from "../../assets/art1.png";
import afterArt from "../../assets/art3.png";

const MoveArtMenu = () => {
  return (
    <MoveArtContainer>
      <MoveArtButton>
        <LeftCircleTwoTone />
        <ArtImg alt="beforeArt" src={beforeArt} />
        <TextContainer>
          <TextStyled>마릴린 먼로</TextStyled>
          {/* <TextStyled>작품명 : AAA</TextStyled> */}
        </TextContainer>
      </MoveArtButton>
      <MoveArtButton>
        <TextContainer>
          <TextStyled>자화상과 엉켜있는 가시와 리본</TextStyled>
        </TextContainer>
        <ArtImg alt="afterArt" src={afterArt} />
        <RightCircleTwoTone />
      </MoveArtButton>
    </MoveArtContainer>
  );
};

export default MoveArtMenu;
