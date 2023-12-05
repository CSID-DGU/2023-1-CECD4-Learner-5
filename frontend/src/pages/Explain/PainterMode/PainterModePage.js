import { React, useEffect, useRef, useState } from "react";
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
  AudioWrapper,
} from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import ButtonHeader from "../../../components/ButtonHeader/ButtonHeader";
import SelectModeMenu from "../../../components/SelectModeMenu/SelectModeMenu";
import MoveArtMenu from "../../../components/MoveArtMenu/MoveArtMenu";
import { getVideo } from "../../../constants/awsS3";
import axios from "axios";

const PainterModePage = () => {
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  const navigate = useNavigate();
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [artData, setArtData] = useState("");

  const onClickQuestionButton = () => {
    navigate("/question");
  };

  const onClickResetButton = () => {
    if (videoRef && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
    if (audioRef && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const onClickAudio = (control) => {
    console.log(control);
    if (control === "play") {
      videoRef && videoRef.current.play();
    } else if (control === "pause") {
      videoRef && videoRef.current.pause();
    }
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
    }
  };

  const getPainter = async (num, type) => {
    const data = await getVideo(`${type}`, `art${num}`);
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
    const getArt = async (type) => {
      const title = localStorage.getItem("title");
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOST}/art/findArt/${title}`
      );
      console.log(response);
      if (response.data) {
        getPainter(response.data.art.order_num, type);
      }
    };

    if (params.type === "question") {
      console.log("gpt api 코드 + 음성 호출하기!");
      const questionValue = localStorage.getItem("question");
      getAnswer(questionValue);
      getArt("question");
    } else {
      getArt("explain");
    }
  }, [params.type]);

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
            {!isLoading && videoUrl && videoUrl !== "" ? (
              params.type === "question" ? (
                artData && artData !== "" ? (
                  <>
                    <PainterVideo
                      // if 문으로 2가지 경우로 나누기!
                      src={videoUrl}
                      //controls
                      loop={true}
                      ref={videoRef}
                      muted={true}
                      playsInline={true}
                    />
                    <AudioWrapper
                      controls
                      autoPlay={true}
                      //loop={true}
                      onPause={() => onClickAudio("pause")}
                      onPlay={() => onClickAudio("play")}
                      ref={audioRef}
                    >
                      <source
                        src={`${process.env.REACT_APP_SERVER_HOST}/art/radioModeExplain/${artData.title}/${artData.content}`}
                        type="audio/mpeg"
                      />
                    </AudioWrapper>
                  </>
                ) : (
                  <LoadingContainer size="large" />
                )
              ) : (
                <>
                  <PainterVideo
                    // if 문으로 2가지 경우로 나누기!
                    src={videoUrl}
                    controls
                    autoPlay={true}
                    //loop={true}
                    ref={videoRef}
                    playsInline={true}
                  />
                </>
              )
            ) : (
              <LoadingContainer size="large" />
            )}
          </ImageContainer>
          <MoveArtMenu />
          <FooterContainer>
            <ButtonStyled onClick={onClickQuestionButton}>
              추가 질문
            </ButtonStyled>
            <ButtonStyled onClick={onClickResetButton}>다시 듣기</ButtonStyled>
          </FooterContainer>
        </MainContainer>
      )}
    </Root>
  );
};

export default PainterModePage;
