import React from 'react';
import IoIcons from '@expo/vector-icons/Ionicons'
import Octicons from '@expo/vector-icons/Octicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 100,
          backgroundColor: Colors.black,
          paddingTop: 16,
          paddingBottom: 16
        },
        tabBarActiveTintColor: Colors.mainColor,

      }} >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="arm-flex-outline" color={color} size={32} />,
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          title: 'Estatísticas',
          tabBarIcon: ({ color }) => <Octicons name="graph" color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <IoIcons name="person-circle-outline" color={color} size={32} />,
        }}
      />
    </Tabs>
  );
}
