import React from 'react'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import { Container, Scroll, Header, BalanceContainer, BalanceTitle, Balance } from './style'

export const Home: React.FC = () => {
  return (
    <Container>
      <Scroll>
      <Header>
        <MaterialCommunityIcons name="qrcode" size={30} color="#10C86E"/>

        <BalanceContainer>
          <BalanceTitle>Meu Saldo</BalanceTitle>
          <Balance>R$ 2,543.00</Balance>
        </BalanceContainer>

        <AntDesign name="gift" size={30} color="#10C86E"/>
      </Header>



      </Scroll>
    </Container>
  )
}
