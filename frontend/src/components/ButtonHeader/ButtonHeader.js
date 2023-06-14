import { React } from "react";
import { BackButton, Container, MenuTypo, Root } from "./styled";
import { useNavigate } from "react-router-dom";

const ButtonHeader = ({ setOpenMenu }) => {
  const navigate = useNavigate();
  const onClickBtn = () => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };

  const onClickOpenMenuButton = () => {
    setOpenMenu(true);
  }
  return (
    <Root>
      <Container>
        <BackButton onClick={onClickBtn}/>
        <MenuTypo onClick={onClickOpenMenuButton}>모드 선택</MenuTypo>
      </Container>
    </Root>
  );
}

export default ButtonHeader;
