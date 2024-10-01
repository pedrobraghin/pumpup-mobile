import React, { useCallback } from 'react';
import { View } from 'react-native';
import { FAB } from '@rneui/themed';
import Colors from '@/constants/Colors';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Routes } from '@/@types/routes';

export function FloatActionButton() {
  const router = useRouter();
  const [visible, setVisible] = React.useState(false);

  const handleNavigate = useCallback((route: string) => {
    router.push(route);
    setVisible(false);
  }, []);

  return (
    <View style={{}}>
      <FAB
        onPress={() => handleNavigate(Routes.profile)}
        visible={visible}
        color={Colors.mainColor}
        placement="left"
        style={{ bottom: 70, left: 10 }}
        icon={<Ionicons name="person-circle-outline" size={26} />}
      />
      <FAB
        onPress={() => handleNavigate(Routes.statistics)}
        visible={visible}
        color={Colors.mainColor}
        placement="left"
        style={{ bottom: 0, left: 80 }}
        icon={<Octicons name="graph" size={24} />}
      />
      <FAB
        visible={true}
        onPress={() => setVisible(!visible)}
        placement="left"
        icon={{ name: 'add', color: Colors.black, size: 26 }}
        color={Colors.mainColor}
        style={{
          left: 10,
        }}
        activeOpacity={0.3}
      />
    </View>
  );
}
