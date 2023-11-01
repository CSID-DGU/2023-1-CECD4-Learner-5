import styled from "styled-components";
import { Button, Typography } from "antd";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../../constants/layout";
import { CloseOutlined } from "@ant-design/icons";

export const Root = styled.div`
  //overflow: hidden;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-bottom: 30px;
  //padding-top: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextTypo = styled(Typography)`
  margin: 10px;
  font-size: 30px;
  font-weight: bold;
  font-family: "Sunflower", sans-serif;
  color: #22668d;
`;

export const SubTextTypo = styled(Typography)`
  margin: 10px;
  font-size: 25px;
  font-weight: bold;
  font-family: "Noto Sans KR", sans-serif;
  color: #313131;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  //margin-bottom: 200px;
  gap: 10px;
`;

export const Divider = styled.hr`
  border: 3px solid white;
  border-radius: 20px;
  margin: 10px 0;
`;

export const ButtonStyled = styled(Button)`
  width: 80%;
  height: 100%;
  margin: 15px;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid white;
  // border-color: #003a8c;
  background-color: #22668d;
  font-size: 25px;
  font-weight: 700;
  font-family: "Noto Sans KR", sans-serif;
  color: white;
  &:hover {
    opacity: 0.8;
    transform: scale(1.04);
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  }
`;
// 헤더부분
export const HeaderRoot = styled.div`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px #c9c9c9 solid;
  box-shadow: 0 1px 2px rgba(57, 63, 72, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const HeaderContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const HeaderBackButton = styled(CloseOutlined)`
  font-size: 20px;
  color: black;
`;
