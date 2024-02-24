import React, { useState } from 'react';
import { View, Text } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';

export default function Index() {
  const [user, setUser] = useState(null);

  const saveData = (key, value) => {
    AsyncStorage.setItem(key, value)
  }

  const getData = async (key) => {
    const value = await AsyncStorage.getItem(key)
    setUser(value)
  }

  saveData('01', 'Zuck');
  saveData('02', 'Musk');

  getData('02')

  return (
    <View style={styles.container}>
      <Text>Armazenamento Local / Async Storage</Text>
      <Text>Nosso User{user}</Text>
    </View>
  )
}