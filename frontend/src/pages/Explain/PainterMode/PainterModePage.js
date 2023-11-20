import { React, useEffect, useState } from "react";
import {
  Root,
  MainContainer,
  TextTypo,
  TextContainer,
  FooterContainer,
  ButtonStyled,
  Divider,
  ImageContainer,
  PainterVideo,
  LoadingContainer,
} from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import ButtonHeader from "../../../components/ButtonHeader/ButtonHeader";
import SelectModeMenu from "../../../components/SelectModeMenu/SelectModeMenu";
import MoveArtMenu from "../../../components/MoveArtMenu/MoveArtMenu";
import { getVideo } from "../../../constants/awsS3";
import axios from "axios";

const PainterModePage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  const onClickQuestionButton = () => {
    navigate("/question");
  };

  const getPainter = async (num) => {
    const data = await getVideo("explain", `art${num}`);
    if (data) {
      console.log(data);
      setVideoUrl(data);
      setIsLoading(false);
    } else {
      alert("에러가 발생했습니다.");
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
        getPainter(response.data.art.order_num);
      }
    };
    getArt();
  }, []);

  return (
    <Root>
      {openMenu ? (
        <SelectModeMenu setOpenMenu={setOpenMenu} type={params.type} />
      ) : (
        <MainContainer>
          <ButtonHeader setOpenMenu={setOpenMenu} />
          <TextContainer>
            <TextTypo>작가 모드</TextTypo>
            <Divider />
          </TextContainer>
          <ImageContainer>
            {!isLoading && videoUrl ? (
              <PainterVideo src={videoUrl} controls autoPlay={true} />
            ) : (
              <LoadingContainer size="large" />
            )}
          </ImageContainer>
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

export default PainterModePage;
