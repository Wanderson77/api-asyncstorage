import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';

const STORAGE_KEY = '@save_age'

const AsyncBase = () => {
  const [age, setAge] = useState('')

  useEffect(() => {
    readData()
  }, [])

  // read data
  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, age)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  // save data
  const readData = async () => {
    try {
      const userAge = await AsyncStorage.getItem(STORAGE_KEY)

      if (userAge !== null) {
        setAge(userAge)
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }

  // clear data
  const clearStorage = async () => {
    try {
      await AsyncStorage.clear()
      alert('Storage successfully cleared!')
    } catch (e) {
      alert('Failed to clear the async storage.')
    }
  }

  const onChangeText = userAge => setAge(userAge)

  const onSubmitEditing = () => {
    if (!age) return

    saveData(age)
    setAge('')
  }

  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Android App</Text>
        </View>
        <View style={styles.panel}>
          <Text>Enter your age here:</Text>
          <TextInput
            style={styles.input}
            value={age}
            placeholder="Age is just a number"
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
          />
          <Text style={styles.text}>Your age is {age}</Text>
          <TouchableOpacity onPress={clearStorage} style={styles.button}>
            <Text style={styles.buttonText}>Clear Storage</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

export default AsyncBase