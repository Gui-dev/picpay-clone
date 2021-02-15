import styled from 'styled-components/native'

interface IOptionProps {
  bgColor: string
}

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 16
  }
})`
  margin-top: 25px;
`

export const Option = styled.TouchableOpacity<IOptionProps>`
  justify-content: space-between;
  width: 150px;
  height: 200px;
  margin-right: 16px;
  padding: 15px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 8px;
`

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
`

export const Img = styled.Image`
  align-self: center;
`

