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
import ChangeModeMenu from "../../components/ChangeModeMenu/ChangeModeMenu";

const QuestionPage = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [text, setText] = useState("");

  const onClickPainterModeButton = () => {
    console.log(text);
    if (text === "" || !text || text === undefined) {
      alert("질문 내용을 올바르게 작성해주세요");
      return;
    }

    let type = "question";
    const selectedMode = localStorage.getItem("selectedMode");
    localStorage.setItem("question", text);
    if (selectedMode === "작가 모드") {
      navigate(`/explain/painter/${type}`);
    } else if (selectedMode === "텍스트 모드") {
      navigate(`/explain/text/${type}`);
    } else if (selectedMode === "라디오 모드") {
      navigate(`/explain/radio/${type}`);
    }
  };

  return (
    <Root>
      {openMenu ? (
        <ChangeModeMenu setOpenMenu={setOpenMenu} />
      ) : (
        <MainContainer>
          <ButtonHeader setOpenMenu={setOpenMenu} />
          <TextContainer>
            <TextTypo>추가 질문하기</TextTypo>
            <Divider />
          </TextContainer>
          <QuestionInput
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="질문을 입력해주세요."
          />
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
