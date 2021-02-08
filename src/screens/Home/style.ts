import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #222;
`

export const Scroll = styled.ScrollView``

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  margin-top: 25px;
  padding: 0 16px;
`

export const BalanceContainer = styled.View`

`

export const BalanceTitle = styled.Text`
  font-size: 14px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
`

export const Balance = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #FFF;
`
