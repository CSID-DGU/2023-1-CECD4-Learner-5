import { React } from "react";
import {
  MainContainer,
  TextTypo,
  TextContainer,
  ButtonContainer,
  ButtonStyled,
  HeaderRoot,
  HeaderContainer,
  HeaderBackButton,
  Root,
} from "./styled";
import { useNavigate } from "react-router-dom";
import { FloatButton, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const SelectModeMenu = ({ setOpenMenu }) => {
  const navigate = useNavigate();

  const onClickCancelMenuButton = () => {
    // 창 닫기
    setOpenMenu(false);
  };

  const onClickPainterModeButton = () => {
    localStorage.setItem("selectedMode", "작가 모드");
    navigate("/explain/painter");
    window.location.reload();
  };

  const onClickTextModeButton = () => {
    localStorage.setItem("selectedMode", "텍스트 모드");
    navigate("/explain/text");
    window.location.reload();
  };

  const onClickRadioModeButton = () => {
    localStorage.setItem("selectedMode", "라디오 모드");
    navigate("/explain/radio");
    window.location.reload();
  };
  // 모든 선택한 것을 localstorage에 저장해놓으면 다음 작품에도 적용 가능할듯..?
  return (
    <Root>
      <MainContainer>
        <HeaderRoot>
          <HeaderContainer>
            <HeaderBackButton onClick={onClickCancelMenuButton} />
          </HeaderContainer>
        </HeaderRoot>
        <TextContainer>
          <TextTypo>도슨트 모드 선택하기</TextTypo>
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
        <Tooltip
          title={
            <div>
              <p>작가 모드 : 작가의 얼굴과 음성으로 해설</p>
              <p>텍스트 모드 : 텍스트로 해설 제공</p>
              <p>라디오 모드 : 음성과 텍스트로 해설 제공</p>
            </div>
          }
          trigger="hover"
          placement="topRight"
        >
          <FloatButton
            icon={<QuestionCircleOutlined />}
            style={{ width: "45px", height: "45px", right: "10%" }}
          />
        </Tooltip>
      </MainContainer>
    </Root>
  );
};

export default SelectModeMenu;
