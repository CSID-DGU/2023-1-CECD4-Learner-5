import styled from 'styled-components'
import { Button, Typography } from 'antd'
import { FOOTER_HEIGHT, HEADER_HEIGHT } from '../../constants/layout'

export const Root = styled.div`
  overflow: hidden;
  height: 100vh;
`

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