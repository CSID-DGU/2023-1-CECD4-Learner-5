import styled from 'styled-components'
import { HEADER_HEIGHT } from '../../constants/layout'
import { Typography } from 'antd'
import { LeftOutlined } from '@ant-design/icons';

export const Root = styled.div`
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

export const Container = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const BackButton = styled(LeftOutlined)`
  font-size: 20px;
  color: black;
`

export const MenuTypo = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
  color: black;
`