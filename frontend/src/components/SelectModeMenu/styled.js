import styled from 'styled-components'
import { Button, Typography } from 'antd'
import { FOOTER_HEIGHT, HEADER_HEIGHT } from '../../constants/layout'
import { CloseOutlined } from '@ant-design/icons';

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
  background-color: #096dd9;
`
export const TextContainer = styled.div`
  padding-top: 90px;
`

export const TextTypo = styled(Typography)`
  margin: 10px;
  font-size: 25px;
  font-weight: bold;
  color: white;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 200px;
  gap: 10px;
`

export const ButtonStyled = styled(Button)`
  width: 70%;
  height: 40px;
  margin: 10px;
  border-color: #003a8c; 
  background-color: #003a8c;
  font-size: 20px;
  font-weight: bold;
  color: white;
  box-shadow: 5px 5px #002766;
`
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
`

export const HeaderContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
`
export const HeaderBackButton = styled(CloseOutlined)`
  font-size: 20px;
  color: black;
`

