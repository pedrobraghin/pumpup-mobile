import { SelectorData } from '../../components/selector/types';
import Flag from 'react-native-country-flag';

export const languageSelectorData: SelectorData[] = [
  {
    label: 'Português Brasileiro',
    value: 'pt',
    text: 'PT',
    icon: <Flag isoCode="br" size={24} />,
    smallIcon: <Flag isoCode="br" size={16} />,
  },
  {
    label: 'English',
    value: 'en',
    text: 'EN',
    icon: <Flag isoCode="us" size={24} />,
    smallIcon: <Flag isoCode="us" size={16} />,
  },
  {
    label: 'Español',
    value: 'es',
    text: 'ES',
    icon: <Flag isoCode="es" size={24} />,
    smallIcon: <Flag isoCode="es" size={16} />,
  },
];
