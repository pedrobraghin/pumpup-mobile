import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

import Colors from '@/constants/Colors';

export function getSelectorData(t: (s: string) => string) {
  return [
    { value: 'heating', icon: <FontAwesome6 name="sun" size={16} color={Colors.white} />, label: t('exercise.types.type_1') },
    { value: 'work', icon: <FontAwesome6 name="fire-flame-curved" size={16} color={Colors.white} />, label: t('exercise.types.type_2') },
    { value: 'drop', icon: <FontAwesome6 name="arrow-trend-down" size={16} color={Colors.white} />, label: t('exercise.types.type_3') },
    { value: 'fail', icon: <SimpleLineIcons name="energy" size={16} color={Colors.white} />, label: t('exercise.types.type_4') },
    { value: 'another', icon: <Entypo name="dots-three-horizontal" size={16} color={Colors.white} />, label: t('exercise.types.type_5') }
  ];
}