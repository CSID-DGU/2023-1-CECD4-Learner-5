import styled from "styled-components";
import { Button, Spin, Typography } from "antd";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../../constants/layout";

export const Root = styled.div`
  overflow: hidden;
  height: 100vh;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: ${HEADER_HEIGHT}px;
  position: relative;
  padding-bottom: ${FOOTER_HEIGHT}px;
  background: linear-gradient(to bottom, #a0dafe, #009eff);
`;

export const LoadingContainer = styled(Spin)`
  padding-top: 120px;
`;
export const TextContainer = styled.div`
  padding-top: 90px;
`;

export const TextTypo = styled(Typography)`
  margin: 10px;
  font-size: 40px;
  font-weight: bold;
  font-family: "Sunflower", sans-serif;
  text-align: center;
  color: #22668d;
`;

export const SubTextTypo = styled(Typography)`
  margin: 10px;
  font-size: 25px;
  // font-weight: bold;
  font-family: "Sunflower", sans-serif;
  text-align: center;
  color: #22668d;
`;

export const Divider = styled.hr`
  border: 1px solid black;
  margin: 10px 0;
  border-color: #878787;
  opacity: 50%;
  // width: 300px;
`;
export const ButtonContainer = styled.div`
  margin-bottom: 170px;
  width: 100%;
`;

export const ButtonInnerContainer = styled.div`
  display: flex;
  //flex-direction: column;
  justify-content: center;
  width: 100%;
  //margin-bottom: 200px;
`;

export const ButtonStyled = styled(Button)`
  width: 80%;
  height: 85%;
  margin: 15px;
  padding: 5px;
  border-radius: 10px;
  border: 2px solid white;
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
