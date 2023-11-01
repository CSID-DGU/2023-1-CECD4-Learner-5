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
} from "./styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StartPage = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [selectedMode, setSelectedMode] = useState("");
  const navigate = useNavigate();

  const onClickSelectModeButton = () => {
    navigate("/select");
  };

  useEffect(() => {
    const getArt = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOST}/art/findArt/우는 여자`
      );
      //console.log(response);
      if (response.data) {
        setTitle(response.data.art.title);
        setArtist(response.data.artist.name);
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
        <TextContainer>
          <TextTypo>{title}</TextTypo>
          <SubTextTypo>{artist}</SubTextTypo>
        </TextContainer>
        <ButtonContainer>
          {selectedMode !== "" && (
            <ButtonInnerContainer>
              <ButtonStyled>{selectedMode}로 선택</ButtonStyled>
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
