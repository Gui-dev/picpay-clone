import React from 'react'

import img13 from './../../assets/images/13.png'
import { Container, Details, Title, Description, Img } from './style'

export const Banner: React.FC = () => {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>
        <Description>
          Mantenha suas parcerias em dia, use o PicPay para fazer suas conbranças
        </Description>
      </Details>
      <Img source={ img13 }/>
    </Container>
  )
}
