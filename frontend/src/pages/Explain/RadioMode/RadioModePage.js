import { React, useEffect, useState } from "react";
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
import { SoundIcon } from "./styled";
import axios from "axios";
import MoveArtMenu from "../../../components/MoveArtMenu/MoveArtMenu";

const RadioModePage = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [artData, setArtData] = useState("");

  const onClickQuestionButton = () => {
    navigate("/question");
  };

  useEffect(() => {
    // 음성도 해야 함!
    const questionValue = localStorage.getItem("question");
    const getArt = async () => {
      const title = localStorage.getItem("title");
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOST}/art/findArt/${title}`
      );
      console.log(response);
      if (response.data) {
        setArtData(response.data.art.content);
      }
    };
    if (questionValue && questionValue !== undefined) {
      console.log("gpt api 코드 + 음성 호출하기!");
    }
    getArt();
  }, []);

  return (
    <Root>
      {openMenu ? (
        <SelectModeMenu setOpenMenu={setOpenMenu} />
      ) : (
        <MainContainer>
          <ButtonHeader setOpenMenu={setOpenMenu} />
          <TextContainer>
            <TextTypo>라디오 모드</TextTypo>
            <Divider></Divider>
          </TextContainer>
          <SoundIcon />
          <ExplainContainer>
            <ExplainTypo>{artData}</ExplainTypo>
          </ExplainContainer>
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

export default RadioModePage;
