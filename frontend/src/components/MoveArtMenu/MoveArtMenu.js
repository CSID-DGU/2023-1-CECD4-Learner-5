import { React, useEffect, useState } from "react";
import { LeftCircleTwoTone, RightCircleTwoTone } from "@ant-design/icons";
import {
  ArtImg,
  MoveArtButton,
  MoveArtContainer,
  TextContainer,
  TextStyled,
} from "./styled";
import beforeArt from "../../assets/art1.png";
import afterArt from "../../assets/art3.png";
import axios from "axios";
import { getImg } from "../../constants/awsS3";

const MoveArtMenu = () => {
  const [artBeforeData, setArtBeforeData] = useState("");
  const [artAfterData, setArtAfterData] = useState("");
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    const getArt = async () => {
      const title = localStorage.getItem("title");
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOST}/art/order/${title}`
      );
      console.log(response);
      if (response.data) {
        setArtBeforeData(response.data.beforeArt);
        setArtAfterData(response.data.afterArt);
      }
    };
    getArt();

    const getImage = async () => {
      const data = await getImg("art", "art1");
      if (data) {
        console.log(data);
        setImgUrl(data);
      }
    };
    getImage();
  }, []);

  return (
    <MoveArtContainer>
      {artBeforeData !== "" && (
        <MoveArtButton>
          <LeftCircleTwoTone />
          <ArtImg alt="beforeArt" src={imgUrl} />
          <TextContainer>
            <TextStyled>{artBeforeData.title}</TextStyled>
          </TextContainer>
        </MoveArtButton>
      )}
      {artAfterData !== "" && (
        <MoveArtButton>
          <TextContainer>
            <TextStyled>{artAfterData.title}</TextStyled>
          </TextContainer>
          <ArtImg alt="afterArt" src={afterArt} />
          <RightCircleTwoTone />
        </MoveArtButton>
      )}
    </MoveArtContainer>
  );
};

export default MoveArtMenu;
