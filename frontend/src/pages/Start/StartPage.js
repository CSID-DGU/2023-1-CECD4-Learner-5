import { React, useEffect, useState } from "react";
import {
  Root,
  MainContainer,
  TextTypo,
  TextContainer,
  ButtonContainer,
  ButtonStyled,
  SubTextTypo,
  ButtonInnerContainer,
  LoadingContainer,
} from "./styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StartPage = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [finishedYear, setFinishedYear] = useState(undefined);
  const [selectedMode, setSelectedMode] = useState("");

  const onClickExplainButton = () => {
    let type = "explain";
    if (selectedMode === "작가 모드") {
      navigate(`/explain/painter/${type}`);
    } else if (selectedMode === "텍스트 모드") {
      navigate(`/explain/text/${type}`);
    } else if (selectedMode === "라디오 모드") {
      navigate(`/explain/radio/${type}`);
    }
  };

  const onClickSelectModeButton = () => {
    navigate("/select");
  };

  useEffect(() => {
    setIsLoading(true);
    const getArt = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOST}/art/findArt/우는 여자`
      );
      console.log(response);
      if (response.data) {
        localStorage.setItem("title", response.data.art.title);
        setTitle(response.data.art.title);
        setArtist(response.data.artist.name);
        setFinishedYear(response.data.art.finished_year);
        setIsLoading(false);
      }
    };

    getArt();
    const modeData = localStorage.getItem("selectedMode");
    if (modeData && modeData !== undefined) {
      setSelectedMode(modeData);
    }
  }, []);

  return (
    <Root>
      <MainContainer>
        {isLoading ? (
          <LoadingContainer size="large" />
        ) : (
          <TextContainer>
            <TextTypo>{title}</TextTypo>
            <SubTextTypo>{artist && `${artist}, ${finishedYear}`}</SubTextTypo>
          </TextContainer>
        )}
        <ButtonContainer>
          {selectedMode !== "" && (
            <ButtonInnerContainer>
              <ButtonStyled onClick={onClickExplainButton}>
                {selectedMode}로 선택
              </ButtonStyled>
            </ButtonInnerContainer>
          )}
          <ButtonInnerContainer>
            <ButtonStyled onClick={onClickSelectModeButton}>
              도슨트 모드 선택하기
            </ButtonStyled>
          </ButtonInnerContainer>
        </ButtonContainer>
      </MainContainer>
    </Root>
  );
};

export default StartPage;
