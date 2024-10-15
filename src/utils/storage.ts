import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeData(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (e) {
    return false;
  }
}

export async function retriveData(key: string, fallbackState: string) {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value === null) {
      return fallbackState;
    }

    return value;
  } catch (e) {
    return fallbackState;
  }
}

export default {
  storeData,
  retriveData,
};
