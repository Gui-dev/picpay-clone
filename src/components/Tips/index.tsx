import React from 'react'

import img8 from './../../assets/images/08.png'
import img9 from './../../assets/images/09.png'
import img10 from './../../assets/images/10.png'
import img11 from './../../assets/images/11.png'
import img12 from './../../assets/images/12.png'
import { Container, Option, Title, Img } from './style'

export const Tips: React.FC = () => {

  const items = [
    { key: Math.random(), color: '#172C4A', title: 'Pague suas contas sem sair de casa', img: img8 },
    { key: Math.random(), color: '#6A0159', title: 'Pague suas contas sem sair de casa', img: img9 },
    { key: Math.random(), color: '#4139C8', title: 'Pague suas contas sem sair de casa', img: img10 },
    { key: Math.random(), color: '#00AB4B', title: 'Pague suas contas sem sair de casa', img: img11 },
    { key: Math.random(), color: '#BA2F76', title: 'Pague suas contas sem sair de casa', img: img12 }
  ]

  return (
    <Container>

      { items.map(item => {
        return (
          <Option key={ item.key } bgColor={ item.color }>
            <Title>{ item.title }</Title>
            <Img source={ item.img }/>
          </Option>
        )
      }) }

    </Container>
  )
}
