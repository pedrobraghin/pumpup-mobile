import { useCallback } from 'react';
import { Selector } from '../selector';
import { languageSelectorData } from './data';
import i18n from '../../../i18n/scripts/init';
import { storeData } from '@/utils';
import StorageKeys from '@/constants/storage-keys';

export function LanguageSelector() {
  const changeLanguage = useCallback(async (language: string) => {
    i18n.changeLanguage(language);
    await storeData(StorageKeys.LANG, language);
  }, []);

  return (
    <Selector
      data={languageSelectorData}
      initalState={languageSelectorData[0]}
      onSelect={changeLanguage}
      withText
    />
  );
}
