import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 16
  }
})`
  height: 130px;
  background-color: #1E222B;
`

export const Options = styled.TouchableOpacity`
  align-items: center;
  width: 80px;
  margin-right: 16px;
`

export const Img = styled.Image`

`

export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FFF;
  margin-top: 8px;
`

