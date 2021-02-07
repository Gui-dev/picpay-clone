import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import { Container, Content, Label } from './style'

interface IPayButtonProps {
  navigate: () => void
  focused: boolean
}

export const PayButton: React.FC<IPayButtonProps> = ({ navigate, focused }) => {
  return (
    <Container onPress={ navigate }>
      <Content
        colors={
          focused
          ? ['#FFF', '#CCC']
          : ['#00FC60', '#00AC4A']
        }
        start={ [1, 0.2] }
      >
        <MaterialIcons name="attach-money" size={30} color={ focused ? '#00AC4A' : '#FFF' }/>
        <Label focused={ focused }>Pagar</Label>
      </Content>
    </Container>
  )
}
