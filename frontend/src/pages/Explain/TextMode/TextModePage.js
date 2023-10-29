import { React, useState } from "react";
import {
  Root,
  MainContainer,
  TextTypo,
  TextContainer,
  FooterContainer,
  ButtonStyled,
  ExplainTypo,
  Divider,
  ExplainContainer,
} from "./styled";
import { useNavigate } from "react-router-dom";
import ButtonHeader from "../../../components/ButtonHeader/ButtonHeader";
import SelectModeMenu from "../../../components/SelectModeMenu/SelectModeMenu";

const TextModePage = () => {
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
            <TextTypo>텍스트 모드</TextTypo>
            <Divider></Divider>
          </TextContainer>
          <ExplainContainer>
            <ExplainTypo>
              피카소의 '모나리자'는 모나리자의 실체적인 형상이 아니라 그녀의
              독특한 개성과 내면적인 표현을 잡아내기 위한 시도로 볼 수 있습니다.
              이 작품은 피카소의 예술적인 실험과 창의성을 대표하는 작품으로,
              현대 미술의 발전에 큰 영향을 미쳤습니다. '모나리자'는 피카소가
              개척한 새로운 시각적 언어와 표현 방식을 통해 관객들에게 깊은
              인상을 남기고 있습니다. '모나리자'는 모노크롬으로 그려진
              레오나르도 다 빈치의 초상화와 달리, 피카소의 작품은 화려하고
              생동감 있는 색상과 독특한 형태로 표현되었습니다. 그는 모나리자의
              얼굴을 기하학적인 도형으로 분해하고, 다양한 각도에서 그림으로
              표현했습니다. 특히, 작품의 배경은 독특한 구조와 선명한 색조로
              구성되어 있어 피카소의 독창적인 스타일을 보여줍니다.
            </ExplainTypo>
          </ExplainContainer>
          <FooterContainer onClick={onClickQuestionButton}>
            <ButtonStyled>추가 질문</ButtonStyled>
          </FooterContainer>
        </MainContainer>
      )}
    </Root>
  );
};

export default TextModePage;
