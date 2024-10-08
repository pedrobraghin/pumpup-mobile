import * as SecureStore from 'expo-secure-store';

async function getToken(key: string) {
  try {
    const item = await SecureStore.getItemAsync(key);
    return item;
  } catch (error) {
    await SecureStore.deleteItemAsync(key);
    return null;
  }
}
async function saveToken(key: string, value: string) {
  try {
    return SecureStore.setItemAsync(key, value);
  } catch (err) {
    return;
  }
}

export default {
  getToken,
  saveToken,
};
