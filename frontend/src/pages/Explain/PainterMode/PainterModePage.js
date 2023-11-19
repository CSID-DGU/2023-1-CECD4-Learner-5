import { React, useEffect, useState } from "react";
import {
  Root,
  MainContainer,
  TextTypo,
  TextContainer,
  FooterContainer,
  PainterImg,
  ButtonStyled,
  Divider,
  ImageContainer,
} from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import ButtonHeader from "../../../components/ButtonHeader/ButtonHeader";
import SelectModeMenu from "../../../components/SelectModeMenu/SelectModeMenu";
import painterFace from "../../../assets/art2.png";
import MoveArtMenu from "../../../components/MoveArtMenu/MoveArtMenu";
import { getVideo } from "../../../constants/awsS3";

const PainterModePage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [openMenu, setOpenMenu] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  const onClickQuestionButton = () => {
    navigate("/question");
  };

  useEffect(() => {
    const getV = async () => {
      const data = await getVideo("explain", "picaso_final");
      if (data) {
        console.log(data);
        setVideoUrl(data);
      }
    };
    getV();
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
            <video src={videoUrl} controls width="250" />
            {/* <PainterImg alt="painterFace" src={painterFace} /> */}
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
