import React from 'react';
import { StatusBar } from 'react-native';

import { Background } from './src/components/Background';

import { Home } from './src/screens/Home';
import { Chat } from './src/screens/Chat';

export default function App() {
  return (
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Background>
        <Chat />
      </Background>
    </>
  );
}