import { React, useState } from "react";
import { Root, MainContainer, TextTypo, TextContainer, FooterContainer, PainterImg, ButtonStyled } from "./styled";
import { useNavigate } from "react-router-dom";
import ButtonHeader from "../../../components/ButtonHeader/ButtonHeader";
import SelectModeMenu from "../../../components/SelectModeMenu/SelectModeMenu";
import painterFace from  "../../../assets/picasso_img.jpeg"

const PainterModePage = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const onClickQuestionButton = () => {
    navigate('/question')
  }

  return (
    <Root>
      { openMenu ? 
        <SelectModeMenu setOpenMenu={setOpenMenu}/>
        :
        <MainContainer>
          <ButtonHeader setOpenMenu={setOpenMenu}/>
            <TextContainer>
              <TextTypo>작가 모드</TextTypo>
            </TextContainer>
            <PainterImg alt="painterFace" src={painterFace} />
          <FooterContainer>
            <ButtonStyled onClick={onClickQuestionButton}>추가 질문</ButtonStyled>
            <ButtonStyled>다시 듣기</ButtonStyled>
          </FooterContainer>
        </MainContainer>
      }
    </Root>
  );
}

export default PainterModePage;
