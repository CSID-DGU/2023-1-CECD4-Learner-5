import { React, useState } from "react";
import {
  Root,
  MainContainer,
  TextTypo,
  TextContainer,
  FooterContainer,
  PainterImg,
  ButtonStyled,
  Divider,
  ImageContainer,
} from "./styled";
import { useNavigate } from "react-router-dom";
import ButtonHeader from "../../../components/ButtonHeader/ButtonHeader";
import SelectModeMenu from "../../../components/SelectModeMenu/SelectModeMenu";
import painterFace from "../../../assets/art2.png";
import MoveArtMenu from "../../../components/MoveArtMenu/MoveArtMenu";

const PainterModePage = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const onClickQuestionButton = () => {
    navigate("/question");
  };

  return (
    <Root>
      {openMenu ? (
        <SelectModeMenu setOpenMenu={setOpenMenu} />
      ) : (
        <MainContainer>
          <ButtonHeader setOpenMenu={setOpenMenu} />
          <TextContainer>
            <TextTypo>작가 모드</TextTypo>
            <Divider />
          </TextContainer>
          <ImageContainer>
            <PainterImg alt="painterFace" src={painterFace} />
          </ImageContainer>
          <MoveArtMenu />
          <FooterContainer>
            <ButtonStyled onClick={onClickQuestionButton}>
              추가 질문
            </ButtonStyled>
            <ButtonStyled>다시 듣기</ButtonStyled>
          </FooterContainer>
        </MainContainer>
      )}
    </Root>
  );
};

export default PainterModePage;
