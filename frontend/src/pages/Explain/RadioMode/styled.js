import styled from "styled-components";
import { Button, Typography } from "antd";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../../../constants/layout";
import { SoundFilled } from "@ant-design/icons";

export const Root = styled.div`
  // overflow: hidden;
  min-height: 100vh;
  height: 100%;
  background: linear-gradient(to bottom, #a0dafe, #009eff);
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  align-items: center;
  padding-top: ${HEADER_HEIGHT}px;
  position: relative;
  padding-bottom: ${FOOTER_HEIGHT}px;
`;
export const TextContainer = styled.div`
  padding: 40px 0;
`;

export const TextTypo = styled(Typography)`
  // margin: 10px;
  font-size: 30px;
  font-weight: bold;
  font-family: "Sunflower", sans-serif;
  color: #22668d;
`;

export const Divider = styled.hr`
  margin: 0;
  border: 3px solid white;
  border-radius: 20px;
`;

export const SoundIcon = styled(SoundFilled)`
  font-size: 60px;
  color: #07629a;
`;

export const ExplainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // margin: 0px 0 100px 0;
`;

export const ExplainTypo = styled(Typography)`
  width: 90%;
  margin: 30px 10px;
  padding: 32px;
  font-size: 18px;
  font-weight: 400;
  font-family: "Noto Sans KR", sans-serif;
  border: 1px solid #cfcdcd;
  border-radius: 30px;
  color: black;
  background-color: white;
  background: linear-gradient(to bottom right, #ffffff, #f0f0f0);
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.1);
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: ${FOOTER_HEIGHT}px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px #c9c9c9 solid;
  box-shadow: 0 1px 2px rgba(57, 63, 72, 0.2);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
`;

export const ButtonStyled = styled(Button)`
  width: 50%;
  height: 80%;
  margin: 10px;
  border-radius: 20px;
  // border-color: #003a8c;
  background-color: #a2d6f6;
  font-size: 20px;
  font-weight: bold;
  font-family: "Noto Sans KR", sans-serif;
  color: #282828;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.1);
  &:hover {
    opacity: 0.8;
    transform: scale(1.02);
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  }
`;
