import React from 'react'
import IoIcons from '@expo/vector-icons/Ionicons'
import Octicons from '@expo/vector-icons/Octicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { useTranslation } from 'react-i18next'

export default function TabLayout() {
  const { t } = useTranslation()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 50,
          backgroundColor: Colors.black,
          paddingTop: 8,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: Colors.mainColor,
        tabBarShowLabel: false,
      }} >
      <Tabs.Screen
        name="index"
        options={{
          tabBarAccessibilityLabel: t('icon_1_label'),
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="arm-flex-outline" color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          tabBarAccessibilityLabel: t('icon_2_label'),
          tabBarIcon: ({ color }) => <Octicons name="graph" color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarAccessibilityLabel: t('icon_3_label'),
          tabBarIcon: ({ color }) => <IoIcons name="person-circle-outline" color={color} size={28} />,
        }}
      />
    </Tabs>
  )
}
