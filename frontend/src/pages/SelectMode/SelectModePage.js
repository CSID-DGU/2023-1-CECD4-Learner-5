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
import { useNavigate } from "react-router-dom";
import { FloatButton, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

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

export default SelectModePage;
