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
import axios from "axios";
import MoveArtMenu from "../../../components/MoveArtMenu/MoveArtMenu";

const TextModePage = () => {
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
      setArtData(response.data.content);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const questionValue = localStorage.getItem("question");
    const getArt = async () => {
      const title = localStorage.getItem("title");
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOST}/art/findArt/${title}`
      );
      console.log(response);
      if (response.data) {
        setArtData(response.data.art.content);
        setIsLoading(false);
      }
    };
    if (params.type === "question") {
      // gpt api 코드 호출하기!
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
            <TextTypo>텍스트 모드</TextTypo>
            <Divider></Divider>
          </TextContainer>
          <ExplainContainer>
            <ExplainTypo>
              {isLoading ? <LoadingContainer size="large" /> : artData}
            </ExplainTypo>
          </ExplainContainer>
          <MoveArtMenu />
          <FooterContainer onClick={onClickQuestionButton}>
            <ButtonStyled>추가 질문</ButtonStyled>
          </FooterContainer>
        </MainContainer>
      )}
    </Root>
  );
};

export default TextModePage;
