import styled from "styled-components";
import { Button, Typography } from "antd";
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
export const TextContainer = styled.div`
  padding-top: 90px;
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

export const Divider = styled.hr`
  border: 3px solid white;
  border-radius: 20px;
  margin: 10px 0;
  // opacity: 50%;
  // width: 300px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 150px;
  gap: 10px;
`;

export const ButtonStyled = styled(Button)`
  width: 80%;
  height: 100%;
  margin: 15px;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid white;
  background-color: #22668d;
  font-size: 25px;
  font-weight: 700;
  font-family: "Noto Sans KR", sans-serif;
  color: white;
  //box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  &:hover {
    opacity: 0.8;
    transform: scale(1.04);
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  }
`;
