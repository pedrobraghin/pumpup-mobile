import { Stack } from 'expo-router';

export default function ProtectedLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: true,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="search-exercise" />
      <Stack.Screen name="training" />
      <Stack.Screen name="create-training" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="statistics" />
    </Stack>
  );
}
