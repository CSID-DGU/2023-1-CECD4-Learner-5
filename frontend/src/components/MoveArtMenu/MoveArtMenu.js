import { React, useEffect, useState } from "react";
import { LeftCircleTwoTone, RightCircleTwoTone } from "@ant-design/icons";
import {
  ArtImg,
  MoveArtButton,
  MoveArtContainer,
  TextContainer,
  TextStyled,
} from "./styled";
import axios from "axios";
import { getImg } from "../../constants/awsS3";
import { useNavigate } from "react-router-dom";

const MoveArtMenu = () => {
  const navigate = useNavigate();

  const [artBeforeData, setArtBeforeData] = useState("");
  const [artAfterData, setArtAfterData] = useState("");
  const [artBeforeimgUrl, setArtBeforeImgUrl] = useState(null);
  const [artAfterimgUrl, setArtAfterImgUrl] = useState(null);

  const getImage = async (num, type) => {
    const data = await getImg("art", `art${num}`);
    if (data && data !== "") {
      console.log(data);
      if (type === "before") {
        setArtBeforeImgUrl(data);
      } else if (type === "after") {
        setArtAfterImgUrl(data);
      }
    }
  };

  useEffect(() => {
    const getArt = async () => {
      const title = localStorage.getItem("title");
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOST}/art/order/${title}`
      );
      console.log(response);
      if (response.data) {
        setArtBeforeData(response.data.beforeArt);
        if (response.data.beforeArt && response.data.beforeArt !== "") {
          getImage(response.data.beforeArt.order_num, "before");
        }
        setArtAfterData(response.data.afterArt);
        if (response.data.afterArt && response.data.afterArt !== "") {
          getImage(response.data.afterArt.order_num, "after");
        }
      }
    };
    getArt();
  }, []);

  const moveBeforeArt = () => {
    localStorage.setItem("title", artBeforeData.title);
    const mode = localStorage.getItem("selectedMode");
    if (mode === "작가 모드") {
      navigate(`/explain/painter/explain`);
    } else if (mode === "텍스트 모드") {
      navigate(`/explain/text/explain`);
    } else if (mode === "라디오 모드") {
      navigate(`/explain/radio/explain`);
    }
    window.location.reload();
  };

  const moveAfterArt = () => {
    localStorage.setItem("title", artAfterData.title);
    const mode = localStorage.getItem("selectedMode");
    if (mode === "작가 모드") {
      navigate(`/explain/painter/explain`);
    } else if (mode === "텍스트 모드") {
      navigate(`/explain/text/explain`);
    } else if (mode === "라디오 모드") {
      navigate(`/explain/radio/explain`);
    }
    window.location.reload();
  };

  return (
    <MoveArtContainer>
      {artBeforeData && artBeforeData !== "" && (
        <MoveArtButton onClick={moveBeforeArt}>
          <LeftCircleTwoTone />
          {artBeforeimgUrl && <ArtImg alt="beforeArt" src={artBeforeimgUrl} />}
          <TextContainer>
            <TextStyled>{artBeforeData.title}</TextStyled>
          </TextContainer>
        </MoveArtButton>
      )}
      {artAfterData && artAfterData !== "" && (
        <MoveArtButton onClick={moveAfterArt}>
          <TextContainer>
            <TextStyled>{artAfterData.title}</TextStyled>
          </TextContainer>
          {artAfterimgUrl && <ArtImg alt="afterArt" src={artAfterimgUrl} />}
          <RightCircleTwoTone />
        </MoveArtButton>
      )}
    </MoveArtContainer>
  );
};

export default MoveArtMenu;
