import { Selector } from '../selector';
import { languageSelectorData } from './data';
import { setLanguage } from '@/utils';

export function LanguageSelector() {
  return (
    <Selector
      data={languageSelectorData}
      initalState={languageSelectorData[0]}
      onSelect={setLanguage}
      withText
    />
  );
}
