import { React, useState } from "react";
import {
  Root,
  MainContainer,
  TextTypo,
  TextContainer,
  FooterContainer,
  ButtonStyled,
  QuestionInput,
  Divider,
} from "./styled";
import { useNavigate } from "react-router-dom";
import ButtonHeader from "../../components/ButtonHeader/ButtonHeader";
import SelectModeMenu from "../../components/SelectModeMenu/SelectModeMenu";

const QuestionPage = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const onClickPainterModeButton = () => {
    navigate("/explain/painter");
  };

  return (
    <Root>
      {openMenu ? (
        <SelectModeMenu setOpenMenu={setOpenMenu} />
      ) : (
        <MainContainer>
          <ButtonHeader setOpenMenu={setOpenMenu} />
          <TextContainer>
            <TextTypo>추가 질문하기</TextTypo>
            <Divider />
          </TextContainer>
          <QuestionInput placeholder="질문을 입력해주세요." />
          <FooterContainer>
            <ButtonStyled onClick={onClickPainterModeButton}>
              질문하기
            </ButtonStyled>
          </FooterContainer>
        </MainContainer>
      )}
    </Root>
  );
};

export default QuestionPage;
