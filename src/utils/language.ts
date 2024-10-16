import StorageKeys from '@/constants/storage-keys';
import i18n from '../../i18n/scripts/init';
import { storeData } from './storage';

export async function setLanguage(language: string) {
  i18n.changeLanguage(language);
  await storeData(StorageKeys.LANG, language);
}
