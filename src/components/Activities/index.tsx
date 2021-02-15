import React from 'react'
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import avatar from './../../assets/images/avatar.png'
import { Container, Header, Title, Card, CardHeader, Avatar, Description, Bold,
  CardBody, Username, CardFooter, Details, Value, Divider, Date, Actions, Options, OptionLabel
} from './style'

export const Activities: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={ avatar }/>
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@bruce_silva</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <Username>Gui Silva</Username>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 2,543.00</Value>
            <Divider />
            <Feather name="lock" size={ 14 } color="#FFF"/>
            <Date>há 2 dias atrás</Date>
          </Details>

          <Actions>
            <Options>
              <MaterialCommunityIcons name="comment-outline" size={ 14 } color="#FFF"/>
              <OptionLabel>0</OptionLabel>
            </Options>
            <Options>
              <AntDesign  name="hearto" size={ 14 } color="#FFF"/>
              <OptionLabel>1</OptionLabel>
            </Options>
          </Actions>
        </CardFooter>

      </Card>
    </Container>
  )
}
