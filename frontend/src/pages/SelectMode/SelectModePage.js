import { React } from "react";
import {
  Root,
  MainContainer,
  TextTypo,
  TextContainer,
  ButtonContainer,
  ButtonStyled,
  Divider,
} from "./styled";
import ClearHeader from "../../components/ClearHeader/ClearHeader";
import ClearFooter from "../../components/ClearFooter/ClearFooter";
import { useNavigate } from "react-router-dom";

const SelectModePage = () => {
  const navigate = useNavigate();

  const onClickPainterModeButton = () => {
    navigate("/explain/painter");
  };

  const onClickTextModeButton = () => {
    navigate("/explain/text");
  };

  const onClickRadioModeButton = () => {
    navigate("/explain/radio");
  };
  // 모든 선택한 것을 localstorage에 저장해놓으면 다음 작품에도 적용 가능할듯..?
  return (
    <Root>
      <MainContainer>
        {/* <ClearHeader /> */}
        <TextContainer>
          <TextTypo>도슨트 모드 선택하기</TextTypo>
          <Divider />
        </TextContainer>
        <ButtonContainer>
          <ButtonStyled onClick={onClickPainterModeButton}>
            작가 모드
          </ButtonStyled>
          <ButtonStyled onClick={onClickTextModeButton}>
            텍스트 모드
          </ButtonStyled>
          <ButtonStyled onClick={onClickRadioModeButton}>
            라디오 모드
          </ButtonStyled>
        </ButtonContainer>
        {/* <ClearFooter /> */}
      </MainContainer>
    </Root>
  );
};

export default SelectModePage;
