import { React } from "react";
import { Root, MainContainer, TextTypo, TextContainer, ButtonContainer, ButtonStyled } from "./styled";
import ClearHeader from "../../components/ClearHeader/ClearHeader";
import ClearFooter from "../../components/ClearFooter/ClearFooter";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();

  const onClickSelectModeButton = () => {
    navigate('/select')
  }
  return (
    <Root>
      <MainContainer>
        <ClearHeader />
          <TextContainer>
            <TextTypo>작품명 : 모나리자</TextTypo>
            <TextTypo>작가명 : 피카소</TextTypo>
          </TextContainer>
          <ButtonContainer>
            <ButtonStyled onClick={onClickSelectModeButton}>도슨트 모드 선택하기</ButtonStyled>
          </ButtonContainer>
        <ClearFooter />
      </MainContainer>
    </Root>
  );
}

export default StartPage;
