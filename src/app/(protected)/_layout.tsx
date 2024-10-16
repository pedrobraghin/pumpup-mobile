import { Stack } from 'expo-router';

export default function ProtectedLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: true,
      }}
    >
      <Stack.Screen name="change-language" />
      <Stack.Screen name="create-training" />
      <Stack.Screen name="index" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="search-exercise" />
      <Stack.Screen name="statistics" />
      <Stack.Screen name="training" />
    </Stack>
  );
}
