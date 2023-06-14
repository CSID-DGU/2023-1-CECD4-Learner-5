import { React } from "react";
import { MainContainer, TextTypo, TextContainer, ButtonContainer, ButtonStyled, HeaderRoot, HeaderContainer, HeaderBackButton } from "./styled";
import ClearFooter from "../ClearFooter/ClearFooter";
import { useNavigate } from "react-router-dom";

const SelectModeMenu = ({ setOpenMenu }) => {
  const navigate = useNavigate();

  const onClickCancelMenuButton = () => {
    // 창 닫기
    setOpenMenu(false);
  }

  const onClickPainterModeButton = () => {
    navigate('/explain/painter')
    window.location.reload();
  }

  const onClickTextModeButton = () => {
    navigate('/explain/text')
    window.location.reload();
  }

  const onClickRadioModeButton = () => {
    navigate('/explain/radio')
    window.location.reload();
  }
// 모든 선택한 것을 localstorage에 저장해놓으면 다음 작품에도 적용 가능할듯..?
  return (
    <MainContainer>
        <HeaderRoot>
          <HeaderContainer>
            <HeaderBackButton onClick={onClickCancelMenuButton}/>
          </HeaderContainer>
        </HeaderRoot>
        <TextContainer>
          <TextTypo>도슨트 모드 선택하기</TextTypo>
        </TextContainer>
        <ButtonContainer>
          <ButtonStyled onClick={onClickPainterModeButton}>작가 모드</ButtonStyled>
          <ButtonStyled onClick={onClickTextModeButton}>텍스트 모드</ButtonStyled>
          <ButtonStyled onClick={onClickRadioModeButton}>라디오 모드</ButtonStyled>
        </ButtonContainer>
      <ClearFooter />
    </MainContainer>
  );
}

export default SelectModeMenu;
