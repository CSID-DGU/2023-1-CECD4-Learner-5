import styled from 'styled-components'
import { Button, Typography } from 'antd'
import { FOOTER_HEIGHT, HEADER_HEIGHT } from '../../../constants/layout'

export const Root = styled.div`
  //overflow: hidden;
  min-height: 100vh;
  height: 100%;
  background-color: #096dd9;
`

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
  background-color: #096dd9;
`
export const TextContainer = styled.div`
  padding-top: 50px;
`

export const TextTypo = styled(Typography)`
  margin: 10px;
  font-size: 30px;
  font-weight: bold;
  color: white;
`

export const ExplainTypo = styled(Typography)`
  width: 90%;
  margin: 30px 10px;
  padding: 20px 10px;
  font-size: 18px;
  font-weight: 400;
  border: 2px solid #003a8c;
  border-radius: 10px;
  color: black;
  background-color: white;
`

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
`

export const ButtonStyled = styled(Button)`
  width: 80%;
  height: 40px;
  margin: 10px;
  border-color: #003a8c; 
  background-color: #003a8c;
  font-size: 20px;
  font-weight: bold;
  color: white;
  box-shadow: 5px 5px #002766;
`