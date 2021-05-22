import asyncStorage from '@react-native-async-storage/async-storage';

// Storing object value
export const storeData = async (key: any, value: any) => {
  try {
    const jsonValue = JSON.stringify(value)
    await asyncStorage.setItem(key, jsonValue)
    return true;
  } catch (e) {
  }
};

// Reading object value
export const getData = async (key: any) => {
  try {
    const jsonValue = await asyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
