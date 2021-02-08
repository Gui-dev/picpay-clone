import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

import { Routes } from './routes'

export const Main: React.FC = () => {
  return (
    <>
      <StatusBar style="light" backgroundColor="#222"/>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  )
}
