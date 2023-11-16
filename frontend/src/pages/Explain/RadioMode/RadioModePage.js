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
  LoadingContainer,
} from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import ButtonHeader from "../../../components/ButtonHeader/ButtonHeader";
import SelectModeMenu from "../../../components/SelectModeMenu/SelectModeMenu";
import { SoundIcon } from "./styled";
import axios from "axios";
import MoveArtMenu from "../../../components/MoveArtMenu/MoveArtMenu";

const RadioModePage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const [artData, setArtData] = useState("");

  const onClickQuestionButton = () => {
    navigate("/question");
  };

  const getAnswer = async (text) => {
    const title = localStorage.getItem("title");
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_HOST}/art/textMode/${title}`,
      {
        question: text,
      }
    );
    console.log(response);
    if (response.data) {
      setArtData(response.data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const getArt = async () => {
      const title = localStorage.getItem("title");
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOST}/art/findArt/${title}`
      );
      console.log(response);
      if (response.data) {
        setArtData(response.data.art);
        setIsLoading(false);
      }
    };

    if (params.type === "question") {
      console.log("gpt api 코드 + 음성 호출하기!");
      const questionValue = localStorage.getItem("question");
      getAnswer(questionValue);
    } else {
      getArt();
    }
  }, [params]);

  return (
    <Root>
      {openMenu ? (
        <SelectModeMenu setOpenMenu={setOpenMenu} type={params.type} />
      ) : (
        <MainContainer>
          <ButtonHeader setOpenMenu={setOpenMenu} />
          <TextContainer>
            <TextTypo>라디오 모드</TextTypo>
            <Divider></Divider>
          </TextContainer>
          <SoundIcon />
          {artData && artData !== "" && (
            <audio controls autoPlay>
              {params.type === "question" ? (
                <source
                  src={`${process.env.REACT_APP_SERVER_HOST}/art/radioModeExplain/${artData.title}/${artData.content}`}
                  type="audio/mpeg"
                />
              ) : (
                <source
                  src={`${process.env.REACT_APP_SERVER_HOST}/art/radioMode/${artData.title}`}
                  type="audio/mpeg"
                />
              )}
            </audio>
          )}
          <ExplainContainer>
            <ExplainTypo>
              {!isLoading && artData && artData !== "" ? (
                artData.content
              ) : (
                <LoadingContainer size="large" />
              )}
            </ExplainTypo>
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
