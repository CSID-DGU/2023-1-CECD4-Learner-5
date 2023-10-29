import { React, useEffect } from "react";
import {
  Root,
  MainContainer,
  TextTypo,
  TextContainer,
  ButtonContainer,
  ButtonStyled,
  SubTextTypo,
  Divider,
} from "./styled";
import ClearHeader from "../../components/ClearHeader/ClearHeader";
import ClearFooter from "../../components/ClearFooter/ClearFooter";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("http://127.0.0.1:5000/api/users", {
  //     headers: {
  //       Accept: "application / json",
  //     },
  //     //method: "GET",
  //   })
  //     .then(
  //       // response 객체의 json() 이용하여 json 데이터를 객체로 변화
  //       (res) => res.json()
  //     )
  //     .then(
  //       // 데이터를 콘솔에 출력
  //       (data) => console.log(data)
  //     );
  // }, []);

  const onClickSelectModeButton = () => {
    navigate("/select");
  };
  return (
    <Root>
      <MainContainer>
        {/* <ClearHeader /> */}
        <TextContainer>
          <TextTypo>모나리자</TextTypo>
          <SubTextTypo>파블로 피카소, 1503</SubTextTypo>
        </TextContainer>
        <ButtonContainer>
          <ButtonStyled onClick={onClickSelectModeButton}>
            도슨트 모드 선택하기
          </ButtonStyled>
        </ButtonContainer>
        {/* <ClearFooter /> */}
      </MainContainer>
    </Root>
  );
};

export default StartPage;
