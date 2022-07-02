import React from 'react'
import { View, Text } from 'react-native';

const Game = ({route}) => {
    const {name, idade} = route.params;    
  return (
    <View>
        <Text>Game</Text>
        <Text>Ola, {name} , idade {idade} anos </Text>
    </View>
  );
}

export default Game;