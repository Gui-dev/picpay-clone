import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

interface ILabelProps {
  focused: boolean
}

export const Container = styled.TouchableWithoutFeedback`
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
`

export const Content = styled(LinearGradient)`
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
`

export const Label = styled.Text<ILabelProps>`
  font-size: 12px;
  color: ${({ focused }) => focused ? '#00AC4A' : '#FFF'};
`
