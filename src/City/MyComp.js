/** Snippets persist data on a device */

// gravar uma chave chamada cityName e seu valor

import {AsyncStorage} from 'react-native';

const cityName = 'SAO GONÇALO';

const saveCityName = async cityName => {
  try {
    await AsyncStorage.setItem('cityName', cityName);
  } catch (error) {
     console.log(error.message);
  }
};


// recuperar o valor salvo
const getCityName = async () => {
    let cityName = '';
    try {
      cityName = await AsyncStorage.getItem('cityName') || 'none';
    } catch (error) {
      console.log(error.message);
    }  return cityName;
  }

// deletar a chave que criada
const deleteCityName = async () => {
    try {
      await AsyncStorage.removeItem('cityName');
    } catch (error) {
      console.log(error.message);
    }
  }
